import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot } from '../astro_C7qg0mHk.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */
/* empty css                         */

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="site-footer__inner" data-astro-cid-sz7xmlte> <span class="site-footer__brand" data-astro-cid-sz7xmlte>🎬 CineSearch</span> <span class="site-footer__copy" data-astro-cid-sz7xmlte>Realizado por Jose BM · ${(/* @__PURE__ */ new Date()).getFullYear()}</span> </div> </div> </footer> `;
}, "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<header class="site-nav" data-astro-cid-dmqpwcec> <div class="container" data-astro-cid-dmqpwcec> <div class="site-nav__inner" data-astro-cid-dmqpwcec> <a href="/" class="site-nav__brand" data-astro-cid-dmqpwcec>
🎬 CineSearch
</a> <a href="/" class="site-nav__link" data-astro-cid-dmqpwcec>Inicio</a> </div> </div> </header> `;
}, "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/components/Nav.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Buscador de películas — CineSearch"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="../../css/bootstrap.min.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <div class="container py-4"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
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

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const data = await getDataMovie("https://api.themoviedb.org/3/movie/" + id);
  const poster_url = "https://image.tmdb.org/t/p/w500";
  const trailer = await getDataMovie("https://api.themoviedb.org/3/movie/" + id + "/videos");
  const video = trailer.results.find((p) => p.type === "Trailer");
  const youtube = "https://www.youtube.com/embed/";
  const rating = data.vote_average ? data.vote_average.toFixed(1) : null;
  const year = data.release_date?.split("-")[0];
  const runtime = data.runtime ? `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m` : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": data.title ?? "Pel\xEDcula", "data-astro-cid-mxye7ggd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="detail-back" data-astro-cid-mxye7ggd> <a href="javascript:history.back()" class="detail-back__link" data-astro-cid-mxye7ggd>← Volver</a> </div> <div class="detail-hero" data-astro-cid-mxye7ggd> <div class="detail-poster" data-astro-cid-mxye7ggd> <img${addAttribute(poster_url + data.poster_path, "src")}${addAttribute(data.title, "alt")} class="detail-poster__img" data-astro-cid-mxye7ggd> </div> <div class="detail-info" data-astro-cid-mxye7ggd> <h1 class="detail-info__title" data-astro-cid-mxye7ggd>${data.title}</h1> ${data.tagline && renderTemplate`<p class="detail-info__tagline" data-astro-cid-mxye7ggd>"${data.tagline}"</p>`} <div class="detail-info__meta" data-astro-cid-mxye7ggd> ${rating && renderTemplate`<span class="detail-badge detail-badge--gold" data-astro-cid-mxye7ggd>⭐ ${rating} / 10</span>`} ${year && renderTemplate`<span class="detail-badge detail-badge--muted" data-astro-cid-mxye7ggd>${year}</span>`} ${runtime && renderTemplate`<span class="detail-badge detail-badge--muted" data-astro-cid-mxye7ggd>🕐 ${runtime}</span>`} </div> ${data.genres && data.genres.length > 0 && renderTemplate`<div class="detail-genres" data-astro-cid-mxye7ggd> ${data.genres.map((g) => renderTemplate`<span class="detail-genre" data-astro-cid-mxye7ggd>${g.name}</span>`)} </div>`} <div class="detail-info__section" data-astro-cid-mxye7ggd> <h3 class="detail-info__section-title" data-astro-cid-mxye7ggd>Sinopsis</h3> <p class="detail-info__overview" data-astro-cid-mxye7ggd>${data.overview || "Sin descripci\xF3n disponible."}</p> </div> <p class="detail-info__release" data-astro-cid-mxye7ggd>
Lanzamiento: <strong data-astro-cid-mxye7ggd>${data.release_date}</strong> </p> </div> </div> <div class="detail-trailer" data-astro-cid-mxye7ggd> <h2 class="section-title" data-astro-cid-mxye7ggd>Trailer</h2> ${video ? renderTemplate`<div class="ratio ratio-16x9 detail-trailer__frame" data-astro-cid-mxye7ggd> <iframe${addAttribute(youtube + video.key, "src")}${addAttribute(`Trailer de ${data.title}`, "title")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-astro-cid-mxye7ggd></iframe> </div>` : renderTemplate`<p class="detail-trailer__missing" data-astro-cid-mxye7ggd>No se encontró trailer disponible.</p>`} </div> ` })} `;
}, "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/pages/detail/[id].astro", void 0);

const $$file = "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/pages/detail/[id].astro";
const $$url = "/detail/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _, getDataMovie as a, getDataMovieDetail as g };
