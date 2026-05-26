import { c as createComponent } from './astro-component_C1eGVywg.mjs';
import 'piccolore';
import { p as renderComponent, t as renderTemplate, o as maybeRenderHead, j as addAttribute } from './entrypoint_DQrojydQ.mjs';
import { g as getDataMovie, $ as $$Layout } from './movie_D-pTLzA6.mjs';

const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": data.title ?? "Película", "data-astro-cid-mxye7ggd": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="detail-back" data-astro-cid-mxye7ggd> <a href="javascript:history.back()" class="detail-back__link" data-astro-cid-mxye7ggd>← Volver</a> </div> <div class="detail-hero" data-astro-cid-mxye7ggd> <div class="detail-poster" data-astro-cid-mxye7ggd> <img${addAttribute(poster_url + data.poster_path, "src")}${addAttribute(data.title, "alt")} class="detail-poster__img" data-astro-cid-mxye7ggd> </div> <div class="detail-info" data-astro-cid-mxye7ggd> <h1 class="detail-info__title" data-astro-cid-mxye7ggd>${data.title}</h1> ${data.tagline && renderTemplate`<p class="detail-info__tagline" data-astro-cid-mxye7ggd>"${data.tagline}"</p>`} <div class="detail-info__meta" data-astro-cid-mxye7ggd> ${rating && renderTemplate`<span class="detail-badge detail-badge--gold" data-astro-cid-mxye7ggd>⭐ ${rating} / 10</span>`} ${year && renderTemplate`<span class="detail-badge detail-badge--muted" data-astro-cid-mxye7ggd>${year}</span>`} ${runtime && renderTemplate`<span class="detail-badge detail-badge--muted" data-astro-cid-mxye7ggd>🕐 ${runtime}</span>`} </div> ${data.genres && data.genres.length > 0 && renderTemplate`<div class="detail-genres" data-astro-cid-mxye7ggd> ${data.genres.map((g) => renderTemplate`<span class="detail-genre" data-astro-cid-mxye7ggd>${g.name}</span>`)} </div>`} <div class="detail-info__section" data-astro-cid-mxye7ggd> <h3 class="detail-info__section-title" data-astro-cid-mxye7ggd>Sinopsis</h3> <p class="detail-info__overview" data-astro-cid-mxye7ggd>${data.overview || "Sin descripción disponible."}</p> </div> <p class="detail-info__release" data-astro-cid-mxye7ggd>
Lanzamiento: <strong data-astro-cid-mxye7ggd>${data.release_date}</strong> </p> </div> </div> <div class="detail-trailer" data-astro-cid-mxye7ggd> <h2 class="section-title" data-astro-cid-mxye7ggd>Trailer</h2> ${video ? renderTemplate`<div class="ratio ratio-16x9 detail-trailer__frame" data-astro-cid-mxye7ggd> <iframe${addAttribute(youtube + video.key, "src")}${addAttribute(`Trailer de ${data.title}`, "title")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-astro-cid-mxye7ggd></iframe> </div>` : renderTemplate`<p class="detail-trailer__missing" data-astro-cid-mxye7ggd>No se encontró trailer disponible.</p>`} </div> ` })}`;
}, "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/pages/detail/[id].astro", void 0);

const $$file = "/Users/josebm/Desktop/Projects/personal/movie-searcher/src/pages/detail/[id].astro";
const $$url = "/detail/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
