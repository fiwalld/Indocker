import{_ as a,c as e,o as s,aT as t}from"./chunks/framework.BM58Iopn.js";const f=JSON.parse('{"title":"Последнее обновление","description":"","frontmatter":{},"headers":[],"relativePath":"ru/reference/default-theme-last-updated.md","filePath":"ru/reference/default-theme-last-updated.md","lastUpdated":1728208628000}'),i={name:"ru/reference/default-theme-last-updated.md"},l=t(`<h1 id="last-updated" tabindex="-1">Последнее обновление <a class="header-anchor" href="#last-updated" aria-label="Permalink to &quot;Последнее обновление {#last-updated}&quot;">​</a></h1><p>Время последнего обновления содержимого будет отображаться в правом нижнем углу страницы. Чтобы включить его, добавьте опцию <code>lastUpdated</code> в свой конфиг.</p><div class="tip custom-block"><p class="custom-block-title">Совет</p><p>Чтобы увидеть обновленное время, необходимо зафиксировать файл Markdown.</p></div><h2 id="site-level-config" tabindex="-1">Настройка в файле конфигурации <a class="header-anchor" href="#site-level-config" aria-label="Permalink to &quot;Настройка в файле конфигурации {#site-level-config}&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lastUpdated: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="frontmatter-config" tabindex="-1">Настройка в метаданных <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;Настройка в метаданных {#frontmatter-config}&quot;">​</a></h2><p>Эту информацию можно отключить на конкретной странице с помощью опции <code>lastUpdated</code> в метаданных:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lastUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p>Также смотрите <a href="./default-theme-config#lastupdated">Тема по умолчанию: <code>lastUpdated</code></a> для получения более подробной информации. Любое истинное значение на уровне темы также включит функцию, если только она не будет явно отключена на уровне сайта или страницы.</p>`,9),n=[l];function d(p,h,o,r,c,k){return s(),e("div",null,n)}const g=a(i,[["render",d]]);export{f as __pageData,g as default};
