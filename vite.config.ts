import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import Pages from 'vite-plugin-pages';
import { SkeletonPlugin} from './plugins/SkeletonPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: [
        {
          dir: 'src/pages',
          baseRoute: '',
        },
      ],
      exclude: ['**/components/*.*'],
      extensions: ['js', 'ts', 'tsx', 'jsx'],
    }),
    SkeletonPlugin(),
  ],
  preview: {
    host: 'localhost',
    open: true,
  },
});
