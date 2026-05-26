import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_C7qg0mHk.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.73kXy_Z-.css"},{"type":"inline","content":".detail-back[data-astro-cid-mxye7ggd]{margin-bottom:1.5rem}.detail-back__link[data-astro-cid-mxye7ggd]{color:#8e8e93;text-decoration:none;font-size:.875rem;transition:color .2s}.detail-back__link[data-astro-cid-mxye7ggd]:hover{color:#f5f5f5}.detail-hero[data-astro-cid-mxye7ggd]{display:grid;grid-template-columns:280px 1fr;gap:2.5rem;align-items:start}@media (max-width: 680px){.detail-hero[data-astro-cid-mxye7ggd]{grid-template-columns:1fr}}.detail-poster__img[data-astro-cid-mxye7ggd]{width:100%;border-radius:12px;box-shadow:0 16px 40px #0009;display:block}.detail-info__title[data-astro-cid-mxye7ggd]{font-size:clamp(1.5rem,4vw,2.2rem);font-weight:700;line-height:1.2;margin-bottom:.4rem;color:#f5f5f5}.detail-info__tagline[data-astro-cid-mxye7ggd]{color:#8e8e93;font-style:italic;font-size:.95rem;margin-bottom:1rem}.detail-info__meta[data-astro-cid-mxye7ggd]{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1rem}.detail-badge[data-astro-cid-mxye7ggd]{display:inline-flex;align-items:center;padding:4px 12px;border-radius:50px;font-size:.82rem;font-weight:600}.detail-badge--gold[data-astro-cid-mxye7ggd]{background-color:#f5c518;color:#000}.detail-badge--muted[data-astro-cid-mxye7ggd]{background-color:#2c2c2e;color:#d1d1d6}.detail-genres[data-astro-cid-mxye7ggd]{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.25rem}.detail-genre[data-astro-cid-mxye7ggd]{border:1px solid #3a3a3c;color:#aeaeb2;font-size:.78rem;padding:3px 10px;border-radius:50px}.detail-info__section[data-astro-cid-mxye7ggd]{margin-bottom:1.25rem}.detail-info__section-title[data-astro-cid-mxye7ggd]{font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#8e8e93;margin-bottom:.5rem}.detail-info__overview[data-astro-cid-mxye7ggd]{color:#d1d1d6;font-size:.95rem;line-height:1.7;margin:0}.detail-info__release[data-astro-cid-mxye7ggd]{font-size:.82rem;color:#8e8e93;margin:0}.detail-info__release[data-astro-cid-mxye7ggd] strong[data-astro-cid-mxye7ggd]{color:#aeaeb2}.detail-trailer[data-astro-cid-mxye7ggd]{margin-top:3rem;margin-bottom:2rem}.detail-trailer__frame[data-astro-cid-mxye7ggd]{border-radius:12px;overflow:hidden;box-shadow:0 16px 40px #00000080}.detail-trailer__missing[data-astro-cid-mxye7ggd]{color:#8e8e93;font-size:.95rem}\n"}],"routeData":{"route":"/detail/[id]","isIndex":false,"type":"page","pattern":"^\\/detail\\/([^/]+?)\\/?$","segments":[[{"content":"detail","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/detail/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.73kXy_Z-.css"},{"type":"inline","content":".results-header[data-astro-cid-q5z4b4fp]{display:flex;align-items:baseline;gap:1rem;flex-wrap:wrap;margin-bottom:.25rem}.results-query[data-astro-cid-q5z4b4fp]{color:#f5c518}.results-count[data-astro-cid-q5z4b4fp]{font-size:.82rem;color:#8e8e93;margin-bottom:1.25rem;display:block}.no-results[data-astro-cid-q5z4b4fp]{text-align:center;padding:4rem 1rem;color:#8e8e93}.no-results__icon[data-astro-cid-q5z4b4fp]{font-size:3rem;margin-bottom:1rem}.no-results__text[data-astro-cid-q5z4b4fp]{font-size:1rem}.no-results__text[data-astro-cid-q5z4b4fp] strong[data-astro-cid-q5z4b4fp]{color:#f5f5f5}\n"}],"routeData":{"route":"/results/[search]","isIndex":false,"type":"page","pattern":"^\\/results\\/([^/]+?)\\/?$","segments":[[{"content":"results","dynamic":false,"spread":false}],[{"content":"search","dynamic":true,"spread":false}]],"params":["search"],"component":"src/pages/results/[search].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.73kXy_Z-.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/josebm/Desktop/Projects/personal/movie-searcher/src/pages/detail/[id].astro",{"propagation":"none","containsHead":true}],["/Users/josebm/Desktop/Projects/personal/movie-searcher/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/josebm/Desktop/Projects/personal/movie-searcher/src/pages/results/[search].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_D83mxERA.mjs","/src/pages/index.astro":"chunks/pages/index_CHfOSQCj.mjs","\u0000@astrojs-manifest":"manifest_DIPOr6kc.mjs","/Users/josebm/Desktop/Projects/personal/movie-searcher/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_Cja478ry.mjs","\u0000@astro-page:src/pages/detail/[id]@_@astro":"chunks/_id__BCCHSkzp.mjs","\u0000@astro-page:src/pages/results/[search]@_@astro":"chunks/_search__Bxoq1MRe.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_lyZpV4Lc.mjs","@components/Search.jsx":"_astro/Search.DDHRp_4w.js","@astrojs/react/client.js":"_astro/client.DbokQZWz.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_id_.73kXy_Z-.css","/favicon.svg","/_astro/Search.DDHRp_4w.js","/_astro/client.DbokQZWz.js","/_astro/index.NEDEFKed.js"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
