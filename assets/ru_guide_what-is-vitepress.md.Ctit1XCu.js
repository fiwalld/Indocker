import{_ as e,c as r,o as t,aT as a}from"./chunks/framework.BM58Iopn.js";const V=JSON.parse('{"title":"Что такое VitePress?","description":"","frontmatter":{},"headers":[],"relativePath":"ru/guide/what-is-vitepress.md","filePath":"ru/guide/what-is-vitepress.md","lastUpdated":1728208628000}'),s={name:"ru/guide/what-is-vitepress.md"},i=a('<h1 id="what-is-vitepress" tabindex="-1">Что такое VitePress? <a class="header-anchor" href="#what-is-vitepress" aria-label="Permalink to &quot;Что такое VitePress? {#what-is-vitepress}&quot;">​</a></h1><p>VitePress — это <a href="https://en.wikipedia.org/wiki/Static_site_generator" target="_blank" rel="noreferrer">Генератор статических сайтов</a> (ГСС), предназначенный для быстрого создания сайтов, ориентированных на контент. В двух словах, VitePress берёт ваш исходный контент, написанный в <a href="https://ru.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer">Markdown</a>, применяет к нему тему и генерирует статические HTML-страницы, которые можно легко развернуть в любом месте.</p><div class="tip custom-block" style="padding-top:8px;"><p>Хотите попробовать прямо сейчас? Перейдите к главе <a href="./getting-started">Первые шаги</a>.</p></div><h2 id="use-cases" tabindex="-1">Примеры использования <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;Примеры использования {#use-cases}&quot;">​</a></h2><ul><li><p><strong>Документация</strong></p><p>VitePress поставляется с темой по умолчанию, предназначенной для технической документации. Она содержит эту страницу, которую вы сейчас читаете, а также документацию по <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>, <a href="https://rollupjs.org/" target="_blank" rel="noreferrer">Rollup</a>, <a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">Pinia</a>, <a href="https://vueuse.org/" target="_blank" rel="noreferrer">VueUse</a>, <a href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a>, <a href="https://d3js.org/" target="_blank" rel="noreferrer">D3</a>, <a href="https://unocss.dev/" target="_blank" rel="noreferrer">UnoCSS</a>, <a href="https://iconify.design/" target="_blank" rel="noreferrer">Iconify</a> и <a href="https://www.vuetelescope.com/explore?framework.slug=vitepress" target="_blank" rel="noreferrer">многое другое</a>.</p><p><a href="https://vuejs.org/" target="_blank" rel="noreferrer">Официальная документация Vue.js</a> также основана на VitePress, но использует пользовательскую тему, разделяемую между несколькими переводами.</p></li><li><p><strong>Блоги, портфолио и маркетинговые сайты</strong></p><p>VitePress поддерживает <a href="./custom-theme">полностью кастомизированные темы</a>, при этом разработчики могут использовать стандартное приложение Vite + Vue. То, что он построен на базе Vite, также означает, что вы можете напрямую использовать плагины Vite из его богатой экосистемы. Кроме того, VitePress предоставляет гибкие API для <a href="./data-loading">загрузки данных</a> (локальной или удаленной) и <a href="./routing#dynamic-routes">динамической генерации маршрутов</a>. С его помощью можно построить практически всё, что угодно, если данные могут быть определены во время сборки.</p><p>Официальный <a href="https://blog.vuejs.org/" target="_blank" rel="noreferrer">блог Vue.js</a> — это простой блог, который генерирует свою индексную страницу на основе локального контента.</p></li></ul><h2 id="developer-experience" tabindex="-1">Опыт разработчика <a class="header-anchor" href="#developer-experience" aria-label="Permalink to &quot;Опыт разработчика {#developer-experience}&quot;">​</a></h2><p>VitePress стремится обеспечить отличные возможности для разработчиков при работе с содержимым в формате Markdown.</p><ul><li><p><strong><a href="https://vitejs.dev/" target="_blank" rel="noreferrer">На базе Vite:</a></strong> мгновенный запуск сервера, правки всегда отражаются мгновенно (&lt;100 мс) без перезагрузки страницы.</p></li><li><p><strong><a href="./markdown">Встроенные расширения Markdown:</a></strong> Frontmatter, таблицы, подсветка синтаксиса... называйте как хотите. В частности, VitePress предоставляет множество расширенных возможностей для работы с блоками кода, что делает его идеальным для создания технической документации.</p></li><li><p><strong><a href="./using-vue">Markdown с возможностями Vue:</a></strong> каждая Markdown-страница также является <a href="https://ru.vuejs.org/guide/scaling-up/sfc.html" target="_blank" rel="noreferrer">однофайловым компонентом</a> Vue, благодаря 100% синтаксической совместимости шаблона Vue с HTML. Вы можете внедрить интерактивность в статический контент, используя шаблонизаторы Vue или импортированные компоненты Vue.</p></li></ul><h2 id="performance" tabindex="-1">Производительность <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Производительность {#performance}&quot;">​</a></h2><p>В отличие от многих традиционных ГСС, где каждая навигация приводит к полной перезагрузке страницы, сайт, созданный VitePress, обслуживает статический HTML при первом посещении, но становится <a href="https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5" target="_blank" rel="noreferrer">Одностраничным приложением</a> (SPA) для последующей навигации по сайту. Эта модель, на наш взгляд, обеспечивает оптимальный баланс производительности:</p><ul><li><p><strong>Быстрая начальная загрузка</strong></p><p>При первом посещении любой страницы будет использоваться статичный, предварительно отрендеренный HTML для быстрой загрузки и оптимального SEO. Затем на страницу загружается пакет JavaScript, который превращает страницу в Vue SPA («гидратация»). Вопреки распространённому мнению о медленной гидратации SPA, этот процесс на самом деле чрезвычайно быстр благодаря высокой производительности Vue 3 и оптимизациям компилятора. По данным <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fvitepress.dev%2F" target="_blank" rel="noreferrer">PageSpeed Insights</a>, типичные сайты VitePress достигают почти идеальных показателей производительности даже на мобильных устройствах с низкой скоростью передачи данных.</p></li><li><p><strong>Быстрая навигация после загрузки</strong></p><p>Что ещё более важно, модель SPA приводит к улучшению пользовательского опыта <strong>после</strong> первоначальной загрузки. Последующая навигация по сайту больше не будет приводить к полной перезагрузке страницы. Вместо этого содержимое входящей страницы будет получено и динамически обновлено. VitePress также автоматически выполняет предварительную выборку фрагментов страницы для ссылок, которые находятся в пределах области просмотра. В большинстве случаев навигация после загрузки будет ощущаться мгновенно.</p></li><li><p><strong>Интерактивность без штрафов</strong></p><p>Для того чтобы динамические части Vue, встроенные в статический Markdown, могли работать в режиме гидратации, каждая страница Markdown обрабатывается как компонент Vue и компилируется в JavaScript. Это может показаться неэффективным, но компилятор Vue достаточно умён, чтобы разделить статическую и динамическую части, минимизируя как стоимость гидратации, так и размер полезной нагрузки. При первоначальной загрузке страницы статические части автоматически исключаются из полезной нагрузки JavaScript и пропускаются во время гидратации.</p></li></ul><h2 id="what-about-vuepress" tabindex="-1">Что насчёт VuePress? <a class="header-anchor" href="#what-about-vuepress" aria-label="Permalink to &quot;Что насчёт VuePress? {#what-about-vuepress}&quot;">​</a></h2><p>VitePress — это духовный наследник VuePress. Оригинальный VuePress был основан на Vue 2 и webpack. Благодаря Vue 3 и Vite под капотом, VitePress обеспечивает значительно лучший опыт разработки, лучшую производительность, более отточенную тему по умолчанию и более гибкий API для настройки.</p><p>Разница в API между VitePress и VuePress заключается в основном в тематическом оформлении и настройке. Если вы используете VuePress 1 с темой по умолчанию, то переход на VitePress будет относительно простым.</p><p>Также были приложены усилия для создания VuePress 2, который также поддерживает Vue 3 и Vite с большей совместимостью с VuePress 1. Однако поддерживать два генератора параллельно не представляется возможным, поэтому команда Vue решила сосредоточиться на VitePress как основном рекомендуемом генераторе статических сайтов в долгосрочной перспективе.</p>',15),o=[i];function n(p,l,h,u,d,g){return t(),r("div",null,o)}const c=e(s,[["render",n]]);export{V as __pageData,c as default};
