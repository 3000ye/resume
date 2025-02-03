const e="web-resume",s="module",t="0.3.0",n="pnpm@9.15.4",u="Web 简历",i={url:"https://www.yunyoujun.cn",email:"me@yunyoujun.cn",name:"YunYouJun"},o="https://web-resume.yunyoujun.cn",p="https://docs.yunyoujun.cn/projects/web-resume.html",r={url:"https://github.com/YunYouJun/web-resume",type:"git"},c={dev:"vite --host --open",lint:"eslint .",serve:"vite preview",build:"cross-env NODE_ENV=production vite build","build:ssg":"cross-env NODE_ENV=production vite-ssg build",schema:"tsx scripts/schema.ts",prepare:"rm -f public/schema/resume.schema.json && ln src/assets/schema/resume.schema.json public/schema/resume.schema.json && pnpm husky",preview:"vite preview",typecheck:"vue-tsc --noEmit",e2e:"playwright test","e2e:ui":"playwright test --ui","e2e:report":"playwright show-report"},a={"@vueuse/core":"^12.5.0","@vueuse/head":"^2.0.0",beasties:"^0.2.0","js-yaml":"^4.1.0","monaco-editor":"^0.52.2","monaco-yaml":"5.1.1",nprogress:"^0.2.0",pinia:"^2.3.1","prism-theme-vars":"^0.2.5",sass:"^1.83.4",vue:"^3.5.13","vue-about-me":"^1.4.0","vue-demi":"^0.14.10","vue-i18n":"^11.0.1","vue-router":"^4.5.0"},m={"@advjs/gui":"^0.0.7","@antfu/eslint-config":"^4.1.0","@gtm-support/vue-gtm":"^3.1.0","@headlessui/vue":"^1.7.23","@iconify-json/mdi":"^1.2.3","@iconify-json/ri":"^1.2.5","@intlify/unplugin-vue-i18n":"^6.0.3","@playwright/test":"^1.50.0","@rollup/plugin-yaml":"^4.1.2","@types/js-yaml":"^4.0.9","@types/markdown-it-link-attributes":"^3.0.5","@types/node":"^22.10.10","@types/nprogress":"^0.2.3","@vitejs/plugin-vue":"^5.2.1","@yunlefun/vue-components":"0.0.5-beta.4",ajv:"^8.17.1",consola:"^3.4.0","cross-env":"^7.0.3",eslint:"^9.19.0",husky:"^9.1.7","lint-staged":"^15.4.3","markdown-it-link-attributes":"^4.0.1","markdown-it-prism":"^2.3.0","star-markdown-css":"^0.5.3",tsx:"^4.19.2",typescript:"^5.7.3","typescript-json-schema":"^0.65.1",unocss:"^65.4.3","unplugin-auto-import":"^19.0.0","unplugin-vue-components":"^28.0.0","unplugin-vue-markdown":"^28.1.0","unplugin-vue-router":"^0.11.2",vite:"^6.0.11","vite-plugin-pwa":"^0.21.1","vite-plugin-vue-devtools":"^7.7.1","vite-plugin-vue-layouts":"^0.11.0","vite-ssg":"25.0.0","vite-ssg-sitemap":"^0.8.1",vitest:"^3.0.4","vue-tsc":"^2.2.0"},l={name:e,type:s,version:t,private:!0,packageManager:n,description:u,author:i,homepage:o,docs:p,repository:r,scripts:c,dependencies:a,devDependencies:m,"lint-staged":{"*.{vue,ts,js,yml}":"eslint --fix","src/types/*.ts":"npm run schema"}};export{l as p};
