import { stringToUint8Array } from '@konker.dev/tiny-filesystem-fp/dist/lib/array';

import type { FileSetItem } from '../../lib/fileSet';
import { FileSetItemType } from '../../lib/fileSet';

export const TEST_FILE_SET_1: Array<FileSetItem> = [
  {
    _tag: FileSetItemType.File,
    _id: 'e57ec8617d467edfff00943eac189e0ec6eb1875',
    path: '/tmp/foo/a.txt',
    baseDir: '/tmp/foo',
    relPath: 'a.txt',
    link: '/a.txt',
    relDir: '.',
    fileName: 'a.txt',
    fileBase: 'a',
    fileExt: '.txt',
    contents: stringToUint8Array('A'),
  },
  {
    _tag: FileSetItemType.File,
    _id: '39c8584020d82dc00bda6e549a6c55284dd2f5f3',
    path: '/tmp/foo/b.txt',
    baseDir: '/tmp/foo',
    relPath: 'b.txt',
    link: '/b.txt',
    relDir: '.',
    fileName: 'b.txt',
    fileBase: 'b',
    fileExt: '.txt',
    contents: stringToUint8Array('B'),
  },
  {
    _tag: FileSetItemType.File,
    _id: 'c7712f15959be6b0c2ad22b5b71d2e367d6ff138',
    path: '/tmp/foo/c.csv',
    baseDir: '/tmp/foo',
    relPath: 'c.csv',
    link: '/c.csv',
    relDir: '.',
    fileName: 'c.csv',
    fileBase: 'c',
    fileExt: '.csv',
    contents: stringToUint8Array('bam,baz\ntrue,false\n'),
  },
  {
    _tag: FileSetItemType.File,
    _id: 'c367b94579a7a9ac870a1b33a35075533487d8d6',
    path: '/tmp/foo/d.json',
    baseDir: '/tmp/foo',
    relPath: 'd.json',
    link: '/d.json',
    relDir: '.',
    fileName: 'd.json',
    fileBase: 'd',
    fileExt: '.json',
    contents: stringToUint8Array('{"bam": true, "baz":  false }'),
  },
  {
    _id: 'a5e1be9ba6cb5bf18597ee658159266a000426e6',
    _tag: FileSetItemType.File,
    baseDir: '/tmp/foo',
    contents: stringToUint8Array('IGNORE 1'),
    fileBase: 'ignore1',
    fileExt: '.txt',
    fileName: 'ignore1.txt',
    path: '/tmp/foo/ignore1.txt',
    relDir: '.',
    relPath: 'ignore1.txt',
    link: '/ignore1.txt',
  },
  {
    _tag: FileSetItemType.File,
    _id: '460eab01f1a4de403aced612ab4230ee610d6c09',
    path: '/tmp/foo/bar/e.txt',
    baseDir: '/tmp/foo',
    relPath: 'bar/e.txt',
    link: '/bar/e.txt',
    relDir: 'bar',
    fileName: 'e.txt',
    fileBase: 'e',
    fileExt: '.txt',
    contents: stringToUint8Array('E'),
  },
  {
    _tag: FileSetItemType.File,
    _id: 'f8cba7f6ca545e7d307a508d628ef61dc9ac8072',
    path: '/tmp/foo/bar/f.log',
    baseDir: '/tmp/foo',
    relPath: 'bar/f.log',
    link: '/bar/f.log',
    relDir: 'bar',
    fileName: 'f.log',
    fileBase: 'f',
    fileExt: '.log',
    contents: stringToUint8Array('F'),
  },
  {
    _id: '5da00cfdc5bee8aa488d13af769799a7b4043766',
    _tag: FileSetItemType.File,
    baseDir: '/tmp/foo',
    contents: stringToUint8Array(
      '---\ntitle: Home\nlayout: layout.hbs\ndate: 2023-12-31\nnav: true\nnavOrder: 2\ntags: ["tag1","tag2"]\n---\n# Home\nhome content'
    ),
    fileBase: 'index',
    fileExt: '.md',
    fileName: 'index.md',
    path: '/tmp/foo/posts/index.md',
    relDir: 'posts',
    relPath: 'posts/index.md',
    link: '/posts/index.md',
  },
  {
    _id: 'af1250e6e96150b7d36c7b0448d0a11275cddb93',
    _tag: FileSetItemType.File,
    baseDir: '/tmp/foo',
    contents: stringToUint8Array(
      "---\ntitle: P1\nlayout: post.hbs\ndate: 2024-01-01\ndraft: false\n---\n# P1\np1 content\n```typescript\nimport * as P from '@konker.dev/effect-ts-prelude';\n\n// A pipeh\nexport function foo(x: number) {\n  P.pipe(x, (x) => x * 2);\n}\n\nconsole.log(foo(2)); // 4\n```"
    ),
    fileBase: 'p1',
    fileExt: '.md',
    fileName: 'p1.md',
    path: '/tmp/foo/posts/p1.md',
    relDir: 'posts',
    relPath: 'posts/p1.md',
    link: '/posts/p1.md',
  },
  {
    _id: 'b5867102be1aca22fcd0ca30e236486c4e409b13',
    _tag: FileSetItemType.File,
    baseDir: '/tmp/foo',
    contents: stringToUint8Array(
      '---\ntitle: P2\nlayout: post.hbs\ndate: 2024-01-02\ndraft: true\n---\n# P2\np2 content'
    ),
    fileBase: 'p2',
    fileExt: '.md',
    fileName: 'p2.md',
    path: '/tmp/foo/posts/p2.md',
    relDir: 'posts',
    relPath: 'posts/p2.md',
    link: '/posts/p2.md',
  },
  {
    _id: '56b92724a5ed41ac6817e76408915c758d1ce978',
    _tag: FileSetItemType.File,
    baseDir: '/tmp/foo',
    contents: stringToUint8Array(
      '---\ntitle: P3\nlayout: post.hbs\ndate: 2024-01-03\ndraft: false\nnav: true\nnavOrder: 1\ntags: ["tag1","tag3"]\n---\n# P3\np3 content'
    ),
    fileBase: 'p3',
    fileExt: '.md',
    fileName: 'p3.md',
    path: '/tmp/foo/posts/p3.md',
    relDir: 'posts',
    relPath: 'posts/p3.md',
    link: '/posts/p3.md',
  },
] as const;
