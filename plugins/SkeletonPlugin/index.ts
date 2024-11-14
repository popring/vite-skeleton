import { PluginOption } from 'vite';
import { join } from 'path';
import { readFile } from 'node:fs/promises';

// 骨架图映射数据
const filename = join(__dirname, './homeSkeleton.js');
// 骨架图展示隐藏逻辑
const code = await readFile(join(__dirname, './script.js'), {
  encoding: 'utf-8',
});

export function SkeletonPlugin(): PluginOption {
  return {
    name: 'SkeletonPlugin',
    async transformIndexHtml(html) {
      const content = (await import(filename)).default;
      return {
        html,
        tags: [
          {
            tag: 'script',
            injectTo: 'body',
            children: `var map=${JSON.stringify(content)};${code}`,
          },
        ],
      };
    },
  };
}
