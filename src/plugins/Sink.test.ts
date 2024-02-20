import * as P from '@konker.dev/effect-ts-prelude';

import { FsDepContextTest, FsDepWriterTest } from '../layers';
import * as fixturesFsFm from '../test/fixtures/fileset-frontmatter-1';
import * as unit from './Sink';

describe('plugins', () => {
  describe('Sink', () => {
    it('should return the same value with relative path', async () => {
      const pluginStack = P.pipe(P.Effect.succeed, unit.sink('build'));
      const actual = await P.Effect.runPromise(
        P.pipe(
          [...fixturesFsFm.TEST_FILE_SET_FRONT_MATTER_1],
          pluginStack,
          P.Effect.provide(FsDepWriterTest),
          P.Effect.provide(FsDepContextTest)
        )
      );
      expect(actual).toStrictEqual(fixturesFsFm.TEST_FILE_SET_FRONT_MATTER_1);
    });

    it('should return the same value with absolute path', async () => {
      const pluginStack = P.pipe(P.Effect.succeed, unit.sink('/tmp/build'));
      const actual = await P.Effect.runPromise(
        P.pipe(
          [...fixturesFsFm.TEST_FILE_SET_FRONT_MATTER_1],
          pluginStack,
          P.Effect.provide(FsDepWriterTest),
          P.Effect.provide(FsDepContextTest)
        )
      );
      expect(actual).toStrictEqual(fixturesFsFm.TEST_FILE_SET_FRONT_MATTER_1);
    });
  });
});
