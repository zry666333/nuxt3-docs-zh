import{_ as a,c as t,o as s,a as n}from"./app.b5cf9d07.js";const h='{"title":"\u5165\u53E3\u7EC4\u4EF6 App","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6700\u5C0F\u5E94\u7528","slug":"\u6700\u5C0F\u5E94\u7528"},{"level":2,"title":"pages","slug":"pages"}],"relativePath":"directory-structure/app-vue.md","lastUpdated":1638894038262}',e={},p=n(`__VP_STATIC_START__<h1 id="\u5165\u53E3\u7EC4\u4EF6-app" tabindex="-1">\u5165\u53E3\u7EC4\u4EF6 <a href="https://v3.nuxtjs.org/docs/directory-structure/app" target="_blank" rel="noopener noreferrer">App</a> <a class="header-anchor" href="#\u5165\u53E3\u7EC4\u4EF6-app" aria-hidden="true">#</a></h1><p><code>app.vue</code> \u6587\u4EF6\u662FNuxt 3\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u5165\u53E3\u7EC4\u4EF6\u3002</p><h2 id="\u6700\u5C0F\u5E94\u7528" tabindex="-1">\u6700\u5C0F\u5E94\u7528 <a class="header-anchor" href="#\u6700\u5C0F\u5E94\u7528" aria-hidden="true">#</a></h2><p>\u5728Nuxt 3\u4E2D\u5982\u679C\u6CA1\u6709<a href="https://v3.nuxtjs.org/docs/directory-structure/pages" target="_blank" rel="noopener noreferrer"><code>pages/</code></a>\u76EE\u5F55\uFF0C\u5219\u8868\u793A\u4E0D\u4F1A\u5305\u542B<a href="https://next.router.vuejs.org/" target="_blank" rel="noopener noreferrer">vue-router</a>\u4F9D\u8D56\u3002 \u5F53\u6211\u4EEC\u5B8C\u6210\u4E00\u4E2A\u843D\u5730\u9875\u6216\u8005\u662F\u4E0D\u9700\u8981\u8DEF\u7531\u5C31\u53EF\u4EE5\u8FD9\u6837\u505A\u3002</p><div class="language-vue [app.vue]"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello World!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="pages" tabindex="-1">pages <a class="header-anchor" href="#pages" aria-hidden="true">#</a></h2><p>\u5982\u679C\u9700\u8981\u4F7F\u7528<a href="https://v3.nuxtjs.org/docs/directory-structure/pages" target="_blank" rel="noopener noreferrer"><code>pages/</code></a>\u663E\u793A\u76F8\u5173\u9875\u9762\u7684\u8BDD\uFF0C\u9700\u8981\u4F7F\u7528 <code>&lt;NuxtPage&gt;</code> \u8DEF\u7531\u51FA\u53E3\u7EC4\u4EF6:</p><div class="language-vue [app.vue]"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u8DEF\u7531\u51FA\u53E3 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtPage</span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">\u5EFA\u8BAE</p><p>\u7531\u4E8ENuxt 3 \u7684\u8DEF\u7531\u51FA\u53E3<code>&lt;NuxtPage&gt;</code> \u5728\u5185\u90E8\u4F7F\u7528\u4E86 <a href="https://v3.vuejs.org/guide/migration/suspense.html" target="_blank" rel="noopener noreferrer"><code>&lt;Suspense&gt;</code></a> \uFF0C\u56E0\u6B64\u5EFA\u8BAE\u53EA\u6709\u4E00\u4E2A\u6839\u8282\u70B9\u3002</p></div><div class="warning custom-block"><p class="custom-block-title">\u63D0\u793A</p><p><code>app.vue</code>\u662FNuxt\u5E94\u7528\u7A0B\u5E8F\u7684\u5165\u53E3\u7EC4\u4EF6\u3002\u60A8\u5728\u5176\u4E2D\u6DFB\u52A0\u7684\u4EFB\u4F55\u5185\u5BB9\uFF08JS\u548CCSS\uFF09\u90FD\u662F\u5168\u5C40\u7684\uFF0C\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u9875\u9762\u3002</p></div><p>\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\u9875\u9762\u5E03\u5C40\u7684\u8BDD,\u8BF7\u67E5\u770B<a href="https://v3.nuxtjs.org/docs/directory-structure/layouts" target="_blank" rel="noopener noreferrer"><code>layouts/</code></a>\u76EE\u5F55.</p>__VP_STATIC_END__`,11),o=[p];function c(r,l,u,d,i,g){return s(),t("div",null,o)}var _=a(e,[["render",c]]);export{h as __pageData,_ as default};
