import { _ as __vite_glob_0_0 } from '../../chunks/post-1_CpnLZk2e.mjs';
import { _ as __vite_glob_0_1 } from '../../chunks/post-2_Bjrt6lUp.mjs';
import { _ as __vite_glob_0_2 } from '../../chunks/post-3_2drVvSrH.mjs';
import { _ as __vite_glob_0_3 } from '../../chunks/post-4_DbUNFghH.mjs';
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_GwfRPgX5.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../../chunks/BlogPost_C8rQrHra.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BDC9rx6T.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
async function getStaticPaths() {
  const allPosts = Object.values(
    [__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3]
  );
  const uniqueTags = [
    ...new Set(allPosts.map((post) => post.frontmatter.tags).flat())
  ];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter(
      (post) => post.frontmatter.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>包含「${tag}」标签的文章</p> <ul> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
}, "D:/programming/front-end/projects/learn-astro/src/pages/tags/[tag].astro", void 0);

const $$file = "D:/programming/front-end/projects/learn-astro/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
