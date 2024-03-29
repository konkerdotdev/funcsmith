import * as P from '@konker.dev/effect-ts-prelude';

import type { FuncSmithError } from '../error';
import { toFuncSmithError } from '../error';
import type { FileSet, FileSetItem } from '../lib/fileSet';
import { isFileSetItemFile } from '../lib/fileSet/fileSetItem';
import { FsDepTinyFileSystem } from '../types';

export const fsFileSinkWriter = <T extends FileSetItem>(
  sinkPath: string,
  fileSet: FileSet<T>
): P.Effect.Effect<void, FuncSmithError, FsDepTinyFileSystem> => {
  return P.pipe(
    P.Effect.Do,
    P.Effect.bind('tfs', () =>
      P.pipe(
        FsDepTinyFileSystem,
        P.Effect.map((deps) => deps.tinyFs)
      )
    ),
    P.Effect.flatMap(({ tfs }) =>
      P.pipe(
        fileSet,
        P.Array.map((fileSetItem) => ({
          ...fileSetItem,
          writePathDir: tfs.joinPath(sinkPath, fileSetItem.relDir),
          writePathFile: tfs.joinPath(sinkPath, fileSetItem.relPath),
        })),
        P.Array.map((fileSetItem) => {
          if (isFileSetItemFile(fileSetItem)) {
            return P.pipe(
              fileSetItem.writePathDir,
              P.Effect.flatMap((path) => tfs.createDirectory(path)),
              P.Effect.flatMap(() =>
                P.pipe(
                  fileSetItem.writePathFile,
                  P.Effect.flatMap((path) => tfs.writeFile(path, fileSetItem.contents))
                )
              )
            );
          }
          return P.Effect.unit;
        }),
        P.Effect.all,
        P.Effect.flatMap(() => P.Effect.unit),
        P.Effect.mapError(toFuncSmithError)
      )
    )
  );
};
