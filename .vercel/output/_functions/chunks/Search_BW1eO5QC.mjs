import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

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

export { Search as S };
