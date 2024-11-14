import { PluginOption } from 'vite';
import { join } from 'path';

const filename = join(__dirname, './homeSkeleton.js');

export function SkeletonPlugin(): PluginOption {
  return {
    name: 'SkeletonPlugin',
    async transformIndexHtml(html) {
      // 新增
      const modifiedHtml = html.replace('<script', '<script defer');
      const content = (await import(filename)).default;
      const code = `
      <script id="skeleton-script">
var map = ${JSON.stringify(content)}
var pathname = window.location.pathname
var target = map[pathname]
var content = target && target.html || ''
content && (document.querySelector('#skeleton-script').parentElement.innerHTML += content)
</script>
      `;
      return modifiedHtml.replace(/__SKELETON_CONTENT__/, code);
    },
  };
}