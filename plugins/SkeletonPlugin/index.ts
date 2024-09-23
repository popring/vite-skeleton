import { PluginOption } from 'vite';
import { join } from 'path';
import { readFile } from 'node:fs/promises'
import { load } from 'cheerio';

const filename = join(__dirname, './homeSkeleton.js');
const code = await readFile(join(__dirname, './script.js'), { encoding: 'utf-8' })

export function SkeletonPlugin(): PluginOption {
  return {
    name: 'SkeletonPlugin',
    async transformIndexHtml(html) {
      const modifiedHtml = html.replace('<script', '<script defer');
      const content = (await import(filename)).default;
      const $ = load(modifiedHtml);
      $('body').append(`<script>var map=${JSON.stringify(content)};${code}</script>`);
      return $.html();
    },
  };
}
