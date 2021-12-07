import{_ as e,c as a,o as n,a as s}from"./app.b5cf9d07.js";const g='{"title":"Cookies","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":2,"title":"\u914D\u7F6E\u9879","slug":"\u914D\u7F6E\u9879"},{"level":3,"title":"maxAge / expires","slug":"maxage-expires"},{"level":3,"title":"httpOnly","slug":"httponly"},{"level":3,"title":"secure","slug":"secure"},{"level":3,"title":"domain","slug":"domain"},{"level":3,"title":"path","slug":"path"},{"level":3,"title":"sameSite","slug":"samesite"},{"level":3,"title":"encode","slug":"encode"},{"level":3,"title":"decode","slug":"decode"},{"level":2,"title":"API\u8DEF\u7531\u4E2D\u5904\u7406cookies","slug":"api\u8DEF\u7531\u4E2D\u5904\u7406cookies"}],"relativePath":"usage/cookies.md","lastUpdated":1638894038266}',o={},t=s(`__VP_STATIC_START__<h1 id="cookies" tabindex="-1">Cookies <a class="header-anchor" href="#cookies" aria-hidden="true">#</a></h1><p>Nuxt\u4E3A\u8BFB\u53D6\u548C\u5199\u5165cookies\u63D0\u4F9B\u4E86\u4E00\u5957\u9488\u5BF9\u670D\u52A1\u7AEF\u6E32\u67D3\u53CB\u597D\u7684\u7EC4\u5408\u5F0Fapi</p><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5728\u4F60\u7684\u9875\u9762\u3001\u7EC4\u4EF6\u6216\u8005\u662F\u63D2\u4EF6\u4E2D\uFF0C\u9488\u5BF9\u4E00\u6761\u7279\u5B9A\u7684cookie\u8BB0\u5F55\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>useCookie</code>\u521B\u5EFA\u4E00\u6761\u54CD\u5E94\u5F0F\u7684\u5F15\u7528\u3002</p><div class="language-js"><pre><code><span class="token keyword">const</span> cookie <span class="token operator">=</span> <span class="token function">useCookie</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre></div><p>\u{1F449}<code>useCookie</code>\u53EA\u5728<code>setup</code>\u6216<code>Lifecycle Hooks</code>\u4E2D\u6709\u6548</p><p>\u{1F60C}<code>useCookie</code> ref\u5C06\u81EA\u52A8\u8F6C\u4E49cookie\u7684\u503C\u6210JSON\u683C\u5F0F\u3002</p><h2 id="\u793A\u4F8B" tabindex="-1"><a href="https://v3.nuxtjs.org/docs/usage/cookies#example" target="_blank" rel="noopener noreferrer">\u793A\u4F8B</a> <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u521B\u5EFA\u4E86\u4E00\u6761\u79F0\u4E3Acounter\u7684cookie\u8BB0\u5F55\u3002\u5982\u679C\u8FD9\u6761cookie\u8BB0\u5F55\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u5728\u521D\u59CB\u5316\u8FD9\u6761\u8BB0\u5F55\u65F6\u53EF\u4EE5\u628A\u5B83\u8BBE\u7F6E\u6210\u4E00\u4E2A\u4EFB\u610F\u503C\u3002\u65E0\u8BBA\u4F55\u65F6\u5F53\u6211\u4EEC\u66F4\u65B0\u4E86counter\u53D8\u91CF\u7684\u503C\u7684\u65F6\u5019\uFF0C\u8FD9\u6761cookie\u8BB0\u5F55\u4E5F\u4F1A\u76F8\u5E94\u7684\u81EA\u52A8\u66F4\u65B0\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> Counter: {{ counter || &#39;-&#39; }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter = null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      reset
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter--<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      -
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      +
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">useCookie</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">)</span>
counter<span class="token punctuation">.</span>value <span class="token operator">=</span> counter<span class="token punctuation">.</span>value <span class="token operator">||</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="danger custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u793A\u4F8B\u62A5\u9519reading &#39;default&#39;,\u9700\u8981 const counter = useCookie(&#39;counter&#39;, { default: ()=&gt;0 })</p></div><p><a href="https://stackblitz.com/github/nuxt/framework/tree/main/examples/use-cookie?terminal=dev" target="_blank" rel="noopener noreferrer">StackBlitz\u6253\u5F00</a></p><h2 id="\u914D\u7F6E\u9879" tabindex="-1"><a href="https://v3.nuxtjs.org/docs/usage/cookies#options" target="_blank" rel="noopener noreferrer">\u914D\u7F6E\u9879</a> <a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a></h2><p>Cookie\u63A5\u53D7\u51E0\u4E2A\u914D\u7F6E\u9879\u7EC4\u5408\u4FEE\u6539cookie\u7684\u884C\u4E3A\u3002</p><p>\u5927\u90E8\u5206\u914D\u7F6E\u9879\u662F\u76F4\u63A5\u5F15\u7528\u7684 <a href="https://github.com/jshttp/cookie" target="_blank" rel="noopener noreferrer">cookie </a>\u5305\u4E2D\u7684\u5185\u5BB9\u3002</p><h3 id="maxage-expires" tabindex="-1"><a href="https://v3.nuxtjs.org/docs/usage/cookies#maxage--expires" target="_blank" rel="noopener noreferrer"><code>maxAge</code> / <code>expires</code></a> <a class="header-anchor" href="#maxage-expires" aria-hidden="true">#</a></h3><p><strong><code>maxAge</code></strong> \u660E\u786E\u89C4\u5B9A\u4E86\u54CD\u5E94\u5934\u4E2D<code>Set-Cookie</code>\u7684<code>Max-Age</code>\u5C5E\u6027\u503C\uFF0C\u8BE5\u5C5E\u6027\u63A5\u6536<code>number</code>\u7C7B\u578B\uFF0C\u5355\u4F4D\u79D2\u3002\u9ED8\u8BA4\u4E0D\u8BBE\u7F6E\u6700\u5927\u8D85\u65F6\u65F6\u95F4\u3002</p><p><strong><code>expires</code></strong>:\u660E\u786E\u89C4\u5B9A\u4E86\u54CD\u5E94\u5934\u4E2D<code>Set-Cookie</code>\u7684<code>Expires</code>\u5C5E\u6027\u503C\uFF0C\u8BE5\u5C5E\u6027\u63A5\u6536<code>Date</code>\u7C7B\u578B\u3002\u9ED8\u8BA4\u4E0D\u8BBE\u7F6E\u8BE5\u503C\u3002 \u5927\u90E8\u5206\u5BA2\u6237\u7AEF\u5C06\u5B83\u89C6\u4E3A\u201C\u6301\u4E45\u5316\u7684cookie\u201D\uFF0C\u53EA\u5728\u4F8B\u5982\u9000\u51FAweb\u6D4F\u89C8\u5668\u5E94\u7528\u7A0B\u5E8F\u65F6\u624D\u4F1A\u5220\u9664cookie\u3002</p><p>\u{1F4A1}<strong>\u6CE8\u610F:</strong> cookie\u7684\u5B58\u50A8\u6A21\u578B\u89C4\u5B9A\u5982\u679C\u540C\u65F6\u8BBE\u7F6E\u4E86<code>expires</code>\u548C<code>maxAge</code>,\u4EE5<code>maxAge</code>\u4F18\u5148\u3002\u4F46\u662F\u5E76\u4E0D\u662F\u6240\u6709\u7684\u5BA2\u6237\u7AEF\u90FD\u9075\u5B88\u8FD9\u4E00\u89C4\u5B9A\uFF0C\u6240\u4EE5\u540C\u65F6\u8BBE\u7F6E\u65F6\u5E94\u8BE5\u8BA9\u4ED6\u4EEC\u90FD\u6307\u5411\u76F8\u540C\u7684\u65E5\u671F\u548C\u65F6\u95F4\uFF01</p><p>\u5982\u679C\u90FD\u4E0D\u793E\u4F1A<code>expires</code>\u548C<code>maxAge</code>\uFF0C\u90A3\u4E48cookie\u5C06\u4EC5\u7528\u4E8E\u4F1A\u8BDD\uFF0C\u5F53\u7528\u6237\u5173\u95ED\u6D4F\u89C8\u5668\u7684\u65F6\u5019\u88AB\u79FB\u9664\u3002</p><h3 id="httponly" tabindex="-1"><a href="https://v3.nuxtjs.org/docs/usage/cookies#httponly" target="_blank" rel="noopener noreferrer"><code>httpOnly</code></a> <a class="header-anchor" href="#httponly" aria-hidden="true">#</a></h3><p>\u660E\u786E\u89C4\u5B9A\u4E86\u54CD\u5E94\u5934\u4E2D<code>Set-Cookie</code>\u7684<code>HttpOnly</code>\u5C5E\u6027\u503C\uFF0C\u8BE5\u5C5E\u6027\u63A5\u6536<code>boolean</code>\u7C7B\u578B\u3002\u5F53<code>httpOnly</code>\u4E3A\u201C\u771F\u503C\u201D \u65F6<code>HttpOnly</code>\u5C5E\u6027\u88AB\u8BBE\u7F6E\uFF0C\u53CD\u4E4B\u4E0D\u8BBE\u7F6E\u3002\u9ED8\u8BA4<code>HttpOnly</code>\u5C5E\u6027\u4E0D\u8BBE\u7F6E\u3002</p><p>\u{1F4A1}<strong>\u6CE8\u610F:</strong> \u5C0F\u5FC3\u5F53\u8BE5\u503C\u88AB\u8BBE\u7F6E\u6210<code>true</code>\u65F6\uFF0C\u5408\u683C\u7684\u5BA2\u6237\u7AEF\u662F\u4E0D\u5141\u8BB8\u7528\u6237\u4FA7\u901A\u8FC7javaScript\u811A\u672C\u7684\u65B9\u5F0F\u67E5\u770B<code>documnet.cookie</code>\u3002</p><h3 id="secure" tabindex="-1"><a href="https://v3.nuxtjs.org/docs/usage/cookies#secure" target="_blank" rel="noopener noreferrer"><code>secure</code></a> <a class="header-anchor" href="#secure" aria-hidden="true">#</a></h3><p>\u660E\u786E\u89C4\u5B9A\u4E86\u54CD\u5E94\u5934\u4E2D<code>Set-Cookie</code>\u7684<code>Secure</code>\u5C5E\u6027\u503C\uFF0C\u8BE5\u5C5E\u6027\u63A5\u53D7<code>boolean</code>\u7C7B\u578B\u3002\u5F53secure\u8BBE\u7F6E\u4E3A<code>true</code>\u65F6\uFF0C<code>Secure</code>\u88AB\u8BBE\u7F6E\uFF0C\u53CD\u4E4B\u4E0D\u8BBE\u7F6E\u3002\u9ED8\u8BA4<code>Secure</code>\u4E0D\u8BBE\u7F6E\u3002</p><p>\u{1F4A1}<strong>\u6CE8\u610F:</strong> \u5C0F\u5FC3\u5F53\u8BE5\u503C\u88AB\u8BBE\u7F6E\u6210<code>true</code>\u65F6\uFF0C\u5982\u679C\u5F53\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u6CA1\u6709\u5EFA\u7ACBhttps\u8FDE\u63A5\uFF0C\u5408\u683C\u7684\u5BA2\u6237\u7AEF\u5C06\u4E0D\u4F1A\u4F20\u8F93cookie\u3002\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u9519\u8BEF\u3002</p><h3 id="domain" tabindex="-1"><a href="https://v3.nuxtjs.org/docs/usage/cookies#domain" target="_blank" rel="noopener noreferrer"><code>domain</code></a> <a class="header-anchor" href="#domain" aria-hidden="true">#</a></h3><p>\u660E\u786E\u89C4\u5B9A\u4E86\u54CD\u5E94\u5934\u4E2D<code>Set-Cookie</code>\u7684<code>Domain</code>\u5C5E\u6027\u503C\u3002\u9ED8\u8BA4<code>domain</code>\u4E0D\u8BBE\u7F6E\uFF0C\u5927\u90E8\u5206\u5BA2\u6237\u7AEF\u8BA4\u4E3Acookie\u4EC5\u9002\u7528\u4E8E\u5F53\u524D\u57DF\u3002</p><h3 id="path" tabindex="-1"><a href="https://v3.nuxtjs.org/docs/usage/cookies#path" target="_blank" rel="noopener noreferrer"><code>path</code></a> <a class="header-anchor" href="#path" aria-hidden="true">#</a></h3><p>\u660E\u786E\u89C4\u5B9A\u4E86\u54CD\u5E94\u5934\u4E2D<code>Set-Cookie</code>\u7684<code>Path</code>\u5C5E\u6027\u503C\u3002\u9ED8\u8BA4\u503C\u4E3A\u201Cdefault path\u201D\u3002</p><h3 id="samesite" tabindex="-1"><a href="https://v3.nuxtjs.org/docs/usage/cookies#samesite" target="_blank" rel="noopener noreferrer"><code>sameSite</code></a> <a class="header-anchor" href="#samesite" aria-hidden="true">#</a></h3><p>\u660E\u786E\u89C4\u5B9A\u4E86\u54CD\u5E94\u5934\u4E2D<code>Set-Cookie</code>\u7684<code>SameSite</code>\u5C5E\u6027\u503C</p><ul><li><code>true</code> \u5C06<code>SameSite</code>\u5C5E\u6027\u503C\u8BBE\u4E3A<code>Strict</code>,\u4EE5\u4E25\u683C\u6267\u884C\u540C\u7AD9\u8BF7\u6C42\u3002</li><li><code>false</code>\u4E0D\u8BBE\u7F6E<code>SameSite</code>\u5C5E\u6027\u3002</li><li><code>&#39;lax&#39;</code> \u5C06SameSite\u5C5E\u6027\u503C\u8BBE\u4E3A<code>Lax</code>,\u5141\u8BB8\u90E8\u5206\u7B2C\u4E09\u65B9\u8BF7\u6C42\u643A\u5E26 <code>Cookie</code>\u3002</li><li><code>&#39;none&#39;</code>\u5141\u8BB8\u8DE8\u7AD9\u53D1\u9001<code>Cookie</code>\u3002</li><li><code>&#39;strict&#39;</code>\u5C06SameSite\u5C5E\u6027\u503C\u8BBE\u4E3A<code>Strict</code>,\u4EE5\u4E25\u683C\u6267\u884C\u540C\u7AD9\u8BF7\u6C42\u3002</li></ul><p>\u5173\u4E8E\u4E0D\u540C\u5B9E\u65BD\u7EA7\u522B\u7684\u66F4\u591A\u4FE1\u606F\u53EF\u4EE5\u5728 <a href="https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7" target="_blank" rel="noopener noreferrer">\u89C4\u8303 </a>\u4E2D\u67E5\u9605\u3002</p><h3 id="encode" tabindex="-1"><a href="https://v3.nuxtjs.org/docs/usage/cookies#encode" target="_blank" rel="noopener noreferrer"><code>encode</code></a> <a class="header-anchor" href="#encode" aria-hidden="true">#</a></h3><p>\u6307\u5B9Acookie\u503C\u7684\u7F16\u7801\u51FD\u6570\u3002\u56E0\u4E3Acookie\u7684\u503C\u662F\u4E00\u4E2A\u6709\u9650\u7684\u5B57\u7B26\u96C6\uFF08\u5FC5\u987B\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u5B57\u7B26\u4E32\uFF09\uFF0C\u6240\u4EE5\u8BE5\u51FD\u6570\u9700\u8981\u5C06\u503C\u7F16\u7801\u4E3A\u9002\u5408cookie\u7684\u5B57\u7B26\u4E32\u3002</p><p>\u9ED8\u8BA4\u7F16\u7801\u65B9\u5F0F\u662F <code>JSON.stringify</code> + <code>encodeURIComponent</code>\u3002</p><h3 id="decode" tabindex="-1"><a href="https://v3.nuxtjs.org/docs/usage/cookies#decode" target="_blank" rel="noopener noreferrer"><code>decode</code></a> <a class="header-anchor" href="#decode" aria-hidden="true">#</a></h3><p>\u6307\u5B9Acookie\u503C\u7684\u89E3\u7801\u51FD\u6570\u3002\u56E0\u4E3Acookie\u503C\u4E3A\u4E00\u4E2A\u6709\u9650\u7684\u5B57\u7B26\u96C6\uFF08\u5FC5\u987B\u662F\u4E00\u4E32\u7B80\u5355\u7684\u5B57\u7B26\u4E32\uFF09\uFF0C\u8BE5\u51FD\u6570\u9700\u8981\u5C06\u7F16\u7801\u7684cookie\u503C\u89E3\u7801\u6210javaScript\u4E2D\u7684\u5B57\u7B26\u4E32\u6216\u5BF9\u8C61\u7C7B\u578B\u3002</p><p>\u9ED8\u8BA4\u89E3\u7801\u51FD\u6570\u662F <code>decodeURIComponent</code> + <a href="https://github.com/unjs/destr" target="_blank" rel="noopener noreferrer">destr </a>.</p><p>\u{1F4A1}<strong>\u6CE8\u610F:</strong> \u5982\u679C\u5728\u8BE5\u51FD\u6570\u629B\u51FA\u5F02\u5E38\uFF0C\u90A3\u4E48\u539F\u59CB\u7684\u672A\u7ECF\u89E3\u7801\u7684cookie\u503C\u5C06\u4F1A\u4F5C\u4E3Avalue\u503C\u8FD4\u56DE\u3002</p><h2 id="api\u8DEF\u7531\u4E2D\u5904\u7406cookies" tabindex="-1"><a href="https://v3.nuxtjs.org/docs/usage/cookies#handling-cookies-in-api-routes" target="_blank" rel="noopener noreferrer">API\u8DEF\u7531\u4E2D\u5904\u7406cookies</a> <a class="header-anchor" href="#api\u8DEF\u7531\u4E2D\u5904\u7406cookies" aria-hidden="true">#</a></h2><p>\u4F60\u53EF\u4EE5\u4F7F\u7528<a href="https://github.com/unjs/h3" target="_blank" rel="noopener noreferrer"><code>h3</code></a>\u5305\u4E2D\u7684<code>useCookie</code>\u548C<code>setCookie</code>\u5728\u8BBF\u95EE\u670D\u52A1\u5668\u7684API\u8DEF\u7531\u65F6\u5019\u5904\u7406cookie\u7684\u503C\u3002</p><p><strong>\u793A\u4F8B:</strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCookie<span class="token punctuation">,</span> setCookie <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;h3&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Read counter cookie</span>
  <span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token function">useCookie</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> <span class="token string">&#39;counter&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span>

  <span class="token comment">// Increase counter cookie by 1</span>
  <span class="token function">setCookie</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token operator">++</span>counter<span class="token punctuation">)</span>

  <span class="token comment">// Send JSON response</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> counter <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,45),c=[t];function p(r,l,i,d,u,k){return n(),a("div",null,c)}var f=e(o,[["render",p]]);export{g as __pageData,f as default};
