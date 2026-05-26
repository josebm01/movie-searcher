import { c as createComponent } from './astro-component_C1eGVywg.mjs';
import 'piccolore';
import { p as renderComponent, t as renderTemplate, o as maybeRenderHead, j as addAttribute } from './entrypoint_DQrojydQ.mjs';
import { a as getDataMovieDetail, $ as $$Layout } from './movie_D-pTLzA6.mjs';
import { S as Search } from './Search_BW1eO5QC.mjs';

const $$search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$search;
  const { search } = Astro2.params;
  const data = await getDataMovieDetail(search || "");
  const detail = "/detail/";
  const poster_url = "https://image.tmdb.org/t/p/w500";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Resultados: ${search}`, "data-astro-cid-q5z4b4fp": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SearchBar", Search, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Search.jsx", "client:component-export": "Search", "data-astro-cid-q5z4b4fp": true })} ${maybeRenderHead()}<div class="results-header" data-astro-cid-q5z4b4fp> <h2 class="section-title" data-astro-cid-q5z4b4fp>
Resultados para &ldquo;<span class="results-query" data-astro-cid-q5z4b4fp>${search}</span>&rdquo;
</h2> <span class="results-count" data-astro-cid-q5z4b4fp>${data.results.length} películas encontradas</span> </div> ${data.results.length === 0 ? renderTemplate`<div class="no-results" data-astro-cid-q5z4b4fp> <p class="no-results__icon" data-astro-cid-q5z4b4fp>🎬</p> <p class="no-results__text" data-astro-cid-q5z4b4fp>No encontramos películas para <strong data-astro-cid-q5z4b4fp>${search}</strong>. Intenta con otro término.</p> </div>` : renderTemplate`<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 g-3" data-astro-cid-q5z4b4fp> ${data.results.map((movie) => renderTemplate`<div class="col" data-astro-cid-q5z4b4fp> <a${addAttribute(detail + movie.id, "href")} class="movie-card" data-astro-cid-q5z4b4fp> <div class="movie-card__poster" data-astro-cid-q5z4b4fp> ${movie.poster_path ? renderTemplate`<img${addAttribute(poster_url + movie.poster_path, "src")}${addAttribute(movie.title, "alt")} loading="lazy" data-astro-cid-q5z4b4fp>` : renderTemplate`<img src="https://i.stack.imgur.com/lnYep.png"${addAttribute(movie.title, "alt")} loading="lazy" data-astro-cid-q5z4b4fp>`} ${movie.vote_average > 0 && renderTemplate`<div class="movie-card__overlay" data-astro-cid-q5z4b4fp> <span class="movie-card__rating" data-astro-cid-q5z4b4fp>⭐ ${movie.vote_average.toFixed(1)}</span> </div>`} </div> <div class="movie-card__info" data-astro-cid-q5z4b4fp> <p class="movie-card__title" data-astro-cid-q5z4b4fp>${movie.title}</p> <p class="movie-card__year" data-astro-cid-q5z4b4fp>${movie.release_date?.split("-")[0]}</p> </div> </a> </div>`)} </div>`}` })}`;
}, "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/pages/results/[search].astro", void 0);

const $$file = "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/pages/results/[search].astro";
const $$url = "/results/[search]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
