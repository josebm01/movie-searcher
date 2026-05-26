import { c as createComponent } from './astro-component_C1eGVywg.mjs';
import 'piccolore';
import { o as maybeRenderHead, t as renderTemplate, j as addAttribute, q as renderHead, p as renderComponent, s as renderSlot } from './entrypoint_DQrojydQ.mjs';
import 'clsx';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="site-footer__inner" data-astro-cid-sz7xmlte> <span class="site-footer__brand" data-astro-cid-sz7xmlte>🎬 CineSearch</span> <span class="site-footer__copy" data-astro-cid-sz7xmlte>Realizado por Jose BM · ${(/* @__PURE__ */ new Date()).getFullYear()}</span> </div> </div> </footer>`;
}, "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/components/Footer.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="site-nav" data-astro-cid-dmqpwcec> <div class="container" data-astro-cid-dmqpwcec> <div class="site-nav__inner" data-astro-cid-dmqpwcec> <a href="/" class="site-nav__brand" data-astro-cid-dmqpwcec>
🎬 CineSearch
</a> <a href="/" class="site-nav__link" data-astro-cid-dmqpwcec>Inicio</a> </div> </div> </header>`;
}, "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/components/Nav.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Buscador de películas — CineSearch"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="../../css/bootstrap.min.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <div class="container py-4"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/layouts/Layout.astro", void 0);

const getDataMovie = async (url) => {
  const API_KEY = "f4928f8d9c6da0e9aff83425db71d143";
  const response = await fetch(url + "?api_key=" + API_KEY + "&language=es-US");
  const data = await response.json();
  return data;
};
const getDataMovieDetail = async (search) => {
  const API_KEY = "f4928f8d9c6da0e9aff83425db71d143";
  const response = await fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&language=es-US&query=" + search + "&page=1&include_adult=false"
  );
  const data = await response.json();
  return data;
};

export { $$Layout as $, getDataMovieDetail as a, getDataMovie as g };
