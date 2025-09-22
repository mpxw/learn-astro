import { _ as __vite_glob_0_0 } from '../chunks/post-1_CpnLZk2e.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/post-2_Bjrt6lUp.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/post-3_2drVvSrH.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/post-4_DbUNFghH.mjs';
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_GwfRPgX5.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BDC9rx6T.mjs';
import { $ as $$BlogPost } from '../chunks/BlogPost_C8rQrHra.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = Object.values(
    [__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3]
  );
  const pageTitle = "\u6211\u7684 Astro \u5B66\u4E60\u535A\u5BA2";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>这是我的 Astro 学习笔记</p> <ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
}, "D:/programming/front-end/projects/learn-astro/src/pages/blog.astro", void 0);

const $$file = "D:/programming/front-end/projects/learn-astro/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
