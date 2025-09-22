import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_GwfRPgX5.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("http://localhost:4321");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "D:/programming/front-end/projects/learn-astro/src/components/BlogPost.astro", void 0);

export { $$BlogPost as $ };
