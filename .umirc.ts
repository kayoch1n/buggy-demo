import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/buggy', component: '@/pages/Buggy/index.tsx' },
  ],
  fastRefresh: {},
});
