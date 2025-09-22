import { _ as __vite_glob_0_0 } from '../chunks/post-1_CpnLZk2e.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/post-2_Bjrt6lUp.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/post-3_2drVvSrH.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/post-4_DbUNFghH.mjs';
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_GwfRPgX5.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BDC9rx6T.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const allPosts = Object.values(
    [__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3]
  );
  const tags = [
    ...new Set(allPosts.map((post) => post.frontmatter.tags).flat())
  ];
  const pageTitle = "\u6807\u7B7E\u7D22\u5F15";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="tags" data-astro-cid-os4i7owy> ${tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-os4i7owy> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a> </p>`)} </div> ` })} `;
}, "D:/programming/front-end/projects/learn-astro/src/pages/tags/index.astro", void 0);

const $$file = "D:/programming/front-end/projects/learn-astro/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
