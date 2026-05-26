import { c as createComponent } from './astro-component_C1eGVywg.mjs';
import 'piccolore';
import { o as maybeRenderHead, j as addAttribute, t as renderTemplate, p as renderComponent } from './entrypoint_DQrojydQ.mjs';
import 'clsx';
import { g as getDataMovie, $ as $$Layout } from './movie_D-pTLzA6.mjs';
import { S as Search } from './Search_BW1eO5QC.mjs';

const $$Movies = createComponent(async ($$result, $$props, $$slots) => {
  const data = await getDataMovie("https://api.themoviedb.org/3/movie/popular");
  const detail = "/detail/";
  const poster_url = "https://image.tmdb.org/t/p/w500";
  return renderTemplate`${maybeRenderHead()}<h2 class="section-title">Películas populares</h2> <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 g-3"> ${data.results.map((movie) => renderTemplate`<div class="col"> <a${addAttribute(detail + movie.id, "href")} class="movie-card"> <div class="movie-card__poster"> ${movie.poster_path ? renderTemplate`<img${addAttribute(poster_url + movie.poster_path, "src")}${addAttribute(movie.title, "alt")} loading="lazy">` : renderTemplate`<img src="https://i.stack.imgur.com/lnYep.png"${addAttribute(movie.title, "alt")} loading="lazy">`} ${movie.vote_average > 0 && renderTemplate`<div class="movie-card__overlay"> <span class="movie-card__rating">⭐ ${movie.vote_average.toFixed(1)}</span> </div>`} </div> <div class="movie-card__info"> <p class="movie-card__title">${movie.title}</p> <p class="movie-card__year">${movie.release_date?.split("-")[0]}</p> </div> </a> </div>`)} </div>`;
}, "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/components/Movies.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Movies Astro" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Search", Search, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Search.jsx", "client:component-export": "Search" })} ${renderComponent($$result2, "Movies", $$Movies, {})} ` })}`;
}, "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/pages/index.astro", void 0);

const $$file = "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
