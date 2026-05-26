import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_C7qg0mHk.mjs';
import 'kleur/colors';
import 'html-escaper';
import { g as getDataMovieDetail, $ as $$Layout } from './_id__CPnozwlT.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                             */

const Search = () => {
  const [value, setValue] = useState("");
  const url = "/results/";
  return /* @__PURE__ */ jsxs("div", { className: "search-hero", children: [
    /* @__PURE__ */ jsxs("h1", { className: "search-hero__title", children: [
      "Encuentra tu próxima ",
      /* @__PURE__ */ jsx("span", { children: "película favorita" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "search-hero__subtitle", children: "Busca entre miles de títulos y descubre sinopsis, calificaciones y trailers" }),
    /* @__PURE__ */ jsx("form", { action: url + value, method: "POST", className: "search-hero__form", children: /* @__PURE__ */ jsxs("div", { className: "search-hero__input-wrap", children: [
      /* @__PURE__ */ jsxs("svg", { className: "search-hero__icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
        /* @__PURE__ */ jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "search",
          className: "search-hero__input",
          value,
          onChange: (e) => setValue(e.target.value),
          placeholder: "Buscar película...",
          autoComplete: "off"
        }
      ),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "search-hero__btn", children: "Buscar" })
    ] }) })
  ] });
};

const $$Astro = createAstro();
const $$search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$search;
  const { search } = Astro2.params;
  const data = await getDataMovieDetail(search || "");
  const detail = "/detail/";
  const poster_url = "https://image.tmdb.org/t/p/w500";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Resultados: ${search}`, "data-astro-cid-q5z4b4fp": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SearchBar", Search, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Search.jsx", "client:component-export": "Search", "data-astro-cid-q5z4b4fp": true })} ${maybeRenderHead()}<div class="results-header" data-astro-cid-q5z4b4fp> <h2 class="section-title" data-astro-cid-q5z4b4fp>
Resultados para &ldquo;<span class="results-query" data-astro-cid-q5z4b4fp>${search}</span>&rdquo;
</h2> <span class="results-count" data-astro-cid-q5z4b4fp>${data.results.length} películas encontradas</span> </div> ${data.results.length === 0 ? renderTemplate`<div class="no-results" data-astro-cid-q5z4b4fp> <p class="no-results__icon" data-astro-cid-q5z4b4fp>🎬</p> <p class="no-results__text" data-astro-cid-q5z4b4fp>No encontramos películas para <strong data-astro-cid-q5z4b4fp>${search}</strong>. Intenta con otro término.</p> </div>` : renderTemplate`<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 g-3" data-astro-cid-q5z4b4fp> ${data.results.map((movie) => renderTemplate`<div class="col" data-astro-cid-q5z4b4fp> <a${addAttribute(detail + movie.id, "href")} class="movie-card" data-astro-cid-q5z4b4fp> <div class="movie-card__poster" data-astro-cid-q5z4b4fp> ${movie.poster_path ? renderTemplate`<img${addAttribute(poster_url + movie.poster_path, "src")}${addAttribute(movie.title, "alt")} loading="lazy" data-astro-cid-q5z4b4fp>` : renderTemplate`<img src="https://i.stack.imgur.com/lnYep.png"${addAttribute(movie.title, "alt")} loading="lazy" data-astro-cid-q5z4b4fp>`} ${movie.vote_average > 0 && renderTemplate`<div class="movie-card__overlay" data-astro-cid-q5z4b4fp> <span class="movie-card__rating" data-astro-cid-q5z4b4fp>⭐ ${movie.vote_average.toFixed(1)}</span> </div>`} </div> <div class="movie-card__info" data-astro-cid-q5z4b4fp> <p class="movie-card__title" data-astro-cid-q5z4b4fp>${movie.title}</p> <p class="movie-card__year" data-astro-cid-q5z4b4fp>${movie.release_date?.split("-")[0]}</p> </div> </a> </div>`)} </div>`}` })} `;
}, "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/pages/results/[search].astro", void 0);

const $$file = "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/pages/results/[search].astro";
const $$url = "/results/[search]";

const _search_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Search as S, _search_ as _ };
