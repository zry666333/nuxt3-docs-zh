import{_ as a,c as n,o as s,a as t}from"./app.b5cf9d07.js";const h='{"title":"\u8DEF\u7531\u9875\u9762 pages","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u52A8\u6001\u8DEF\u7531 - Dynamic Routes","slug":"\u52A8\u6001\u8DEF\u7531-dynamic-routes"},{"level":2,"title":"\u5BFC\u822A - Navigation","slug":"\u5BFC\u822A-navigation"},{"level":2,"title":"\u5D4C\u5957\u8DEF\u7531 - Nested Router","slug":"\u5D4C\u5957\u8DEF\u7531-nested-router"}],"relativePath":"directory-structure/pages.md","lastUpdated":1638894038262}',e={},p=t(`<h1 id="\u8DEF\u7531\u9875\u9762-pages" tabindex="-1">\u8DEF\u7531\u9875\u9762 <a href="https://v3.nuxtjs.org/docs/directory-structure/pages" target="_blank" rel="noopener noreferrer">pages</a> <a class="header-anchor" href="#\u8DEF\u7531\u9875\u9762-pages" aria-hidden="true">#</a></h1><blockquote><p>pages \u6587\u4EF6\u5939\u76EE\u5F55\u662F\u53EF\u9009\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u53EF\u4EE5\u53EA\u901A\u8FC7app.vue \u6765\u5B8C\u6210\u4F60\u7684\u9879\u76EE\uFF0C \u4F46\u6211\u4EEC\u6CA1\u6709pages\u6587\u4EF6\u5939\u76EE\u5F55\u65F6\uFF0Cvue-router\u662F\u4E0D\u4F1A\u88AB\u52A0\u8F7D\u7684\uFF0C\u8FD9\u6837\u53EF\u4EE5\u51CF\u5C0F\u5305\u7684\u5927\u5C0F</p></blockquote><p>\u5F53\u6211\u4EEC\u521B\u5EFA\u4E86pages\u6587\u4EF6\u5939\u76EE\u5F55\u540E\uFF0CNuxt\u4F1A\u81EA\u52A8\u96C6\u6210<a href="https://next.router.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">vue-router</a>\uFF0C\u7ED3\u5408pages\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6(\u5939)\u540D\u6765\u6784\u5EFA\u6211\u4EEC\u7684\u9879\u76EE</p><blockquote><p>\u4E0E\u7EC4\u4EF6\u4E0D\u540C\u7684\u662F\uFF0C\u6211\u4EEC\u7684\u9875\u9762\u5FC5\u987B\u6709\u4E00\u4E2A\u5355\u4E00\u7684\u6839\u5143\u7D20\uFF0C\u4EE5\u5141\u8BB8Nuxt\u5728\u9875\u9762\u4E4B\u95F4\u5E94\u7528\u8DEF\u7531\u8F6C\u6362\u3002</p></blockquote><h2 id="\u52A8\u6001\u8DEF\u7531-dynamic-routes" tabindex="-1">\u52A8\u6001\u8DEF\u7531 - Dynamic Routes <a class="header-anchor" href="#\u52A8\u6001\u8DEF\u7531-dynamic-routes" aria-hidden="true">#</a></h2><p>\u5982\u679C\u628A\u4EFB\u4F55\u4E1C\u897F\u653E\u5728\u65B9\u62EC\u53F7<code>[]</code>\u4E2D\uFF0C\u5B83\u5C06\u88AB\u8F6C\u6362\u4E3A\u4E00\u4E2A<a href="https://next.router.vuejs.org/zh/guide/essentials/dynamic-matching.html" target="_blank" rel="noopener noreferrer"><strong>dynamic router</strong></a>\u53C2\u6570\u3002\u60A8\u53EF\u4EE5\u5728\u4E00\u4E2A\u6587\u4EF6\u540D\u6216\u76EE\u5F55\u4E2D\u6DF7\u5408\u548C\u5339\u914D\u591A\u4E2A\u53C2\u6570\uFF0C\u751A\u81F3\u662F\u975E\u52A8\u6001\u6587\u672C\u3002</p><p>\u5982\u679C\u9700\u8981\u4E00\u4E2A\u901A\u914D\u8DEF\u7531\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u540D\u4E3A<code>[\u2026slug].vue</code>\u7684\u6587\u4EF6\u6765\u521B\u5EFA\u5B83\u3002\u8FD9\u5C06\u5339\u914D\u8BE5\u8DEF\u5F84\u4E0B\u7684\u6240\u6709\u8DEF\u7531\uFF0C\u56E0\u6B64\u5B83\u4E0D\u652F\u6301\u4EFB\u4F55\u975E\u52A8\u6001\u6587\u672C\u3002</p><h4 id="\u793A\u4F8B-chestnut" tabindex="-1">\u793A\u4F8B \u{1F330} <a class="header-anchor" href="#\u793A\u4F8B-chestnut" aria-hidden="true">#</a></h4><div class="language-"><pre><code>-| pages/
---| index.vue
---| users-[group]/
-----| [id].vue
</code></pre></div><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 $route \u5BF9\u8C61\u8BBF\u95EE\u7EC4\u4EF6\u4E2D\u7684\u53C2\u6570 group/id:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  {{ $route.params.group }}
  {{ $route.params.id }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5F53\u8DEF\u7531\u8DF3\u8F6C\u5230 /user-admins/123 \u65F6\uFF0C\u5C06\u4F1A\u6E32\u67D3\u51FA</p><div class="language-"><pre><code>admins 123
</code></pre></div><h2 id="\u5BFC\u822A-navigation" tabindex="-1">\u5BFC\u822A - Navigation <a class="header-anchor" href="#\u5BFC\u822A-navigation" aria-hidden="true">#</a></h2><p>\u8981\u5728\u5E94\u7528\u7A0B\u5E8F\u7684\u9875\u9762\u4E4B\u95F4\u5BFC\u822A\uFF0C\u4F60\u5E94\u8BE5\u4F7F\u7528<code>&lt;NuxtLink&gt;</code>\u7EC4\u4EF6\u3002\u8BE5\u7EC4\u4EF6\u5305\u542B\u5728Nuxt\u4E2D\uFF0C\u56E0\u6B64\u60A8\u4E0D\u5FC5\u50CF\u5BFC\u5165\u5176\u4ED6\u7EC4\u4EF6\u90A3\u6837\u5BFC\u5165\u5B83\u3002\u5B83\u7C7B\u4F3C\u4E8EHTML\u7684<code>&lt;a&gt;</code>\u6807\u7B7E\uFF0C\u9664\u4E86\u4F7F\u7528<code>&lt;a href=&quot;/about /&gt;&quot;</code>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>&lt;NuxtLink to=&quot;/about&quot; /&gt;</code>\u3002\u5982\u679C\u4F60\u4EE5\u524D\u7528\u8FC7vue-router\uFF0C\u4F60\u53EF\u4EE5\u628A<code>&lt;NuxtLink&gt;</code>\u770B\u4F5C\u662F<code>&lt;RouterLink&gt;</code>\u7684\u66FF\u6362\u3002</p><p>\u4E00\u4E2A\u5230\u7D22\u5F15\u7684\u7B80\u5355\u94FE\u63A5\u3002Vue\u9875\u9762\u5728\u60A8\u7684\u9875\u9762\u6587\u4EF6\u5939:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9996\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NuxtLink</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><code>&lt;NuxtLink&gt;</code>\u7EC4\u4EF6\u5E94\u8BE5\u7528\u4E8E\u6240\u6709\u5185\u90E8\u94FE\u63A5\u3002\u8FD9\u610F\u5473\u7740\u5BF9\u4E8E\u6240\u6709\u6307\u5411\u7AD9\u70B9\u5185\u9875\u9762\u7684\u94FE\u63A5\uFF0C\u60A8\u5E94\u8BE5\u4F7F\u7528<code>&lt;NuxtLink&gt;</code>\u3002<code>&lt;a&gt;</code>\u6807\u7B7E\u5E94\u8BE5\u7528\u4E8E\u6240\u6709\u5916\u90E8\u94FE\u63A5\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u5982\u679C\u4F60\u6709\u94FE\u63A5\u5230\u5176\u4ED6\u7F51\u7AD9\uFF0C\u4F60\u5E94\u8BE5\u4F7F\u7528<code>&lt;a&gt;</code>\u6807\u7B7E\u3002</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\u9996\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      About (Nuxt\u5E94\u7528\u91CC\u7684\u5185\u90E8\u94FE\u63A5)
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NuxtLink</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://nuxtjs.org<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5176\u4ED6\u5E94\u7528\u91CC\u7684\u94FE\u63A5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><blockquote><p>\u5982\u679C\u4F60\u60F3\u4E86\u89E3\u66F4\u591A\u5173\u4E8E<code>&lt;RouterLink&gt;</code>\u7684\u4FE1\u606F\uFF0C\u8BF7\u9605\u8BFB<a href="https://next.router.vuejs.org/zh/api/index.html#router-link" target="_blank" rel="noopener noreferrer">Vue Router\u6587\u6863</a>\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\u3002</p></blockquote><h2 id="\u5D4C\u5957\u8DEF\u7531-nested-router" tabindex="-1">\u5D4C\u5957\u8DEF\u7531 - Nested Router <a class="header-anchor" href="#\u5D4C\u5957\u8DEF\u7531-nested-router" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u4E3A<code>&lt;RouterView&gt;</code>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E2A\u8BED\u4E49\u522B\u540D<code>&lt;NuxtChild&gt;</code>\uFF0C\u7528\u4E8E\u663E\u793A\u5D4C\u5957\u8DEF\u7531\u7684\u5B50\u7EC4\u4EF6\u3002\u5728Nuxt\u5E94\u7528\u91CC\u6211\u4EEC\u7528<code>&lt;NuxtChild&gt;</code>\u7EC4\u4EF6\u6765\u66FF\u4EE3vue-router\u91CC\u7684<code>&lt;RouterView&gt;</code></p><blockquote><p>\u53EF\u4EE5\u53C2\u8003vue-router\u7684<a href="https://next.router.vuejs.org/zh/guide/essentials/nested-routes.html" target="_blank" rel="noopener noreferrer">\u5D4C\u5957\u8DEF\u7531</a></p></blockquote><h4 id="\u793A\u4F8B-chestnut-1" tabindex="-1">\u793A\u4F8B \u{1F330} <a class="header-anchor" href="#\u793A\u4F8B-chestnut-1" aria-hidden="true">#</a></h4><div class="language-"><pre><code>-| pages/
---| parent/
------| child.vue
---| parent.vue
</code></pre></div><p>Nuxt\u5C06\u4E3A\u6211\u4EEC\u751F\u6210\u4E0B\u9762\u7684\u8DEF\u7531</p><div class="language-js"><pre><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/parent&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token string">&#39;~/pages/parent.vue&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;parent&#39;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token string">&#39;~/pages/parent/child.vue&#39;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;parent-child&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u5C55\u793A<code>child.vue</code>\u7EC4\u4EF6\u65F6\uFF0C\u4F60\u5FC5\u987B\u5728<code>pages/parent.vue</code>\u4E2D\u63D2\u5165<code>&lt;NuxtChild&gt;</code>\u7EC4\u4EF6:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\u8FD9\u91CC\u662F parent component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtChild</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,29),o=[p];function c(u,l,r,i,k,d){return s(),n("div",null,o)}var v=a(e,[["render",c]]);export{h as __pageData,v as default};
