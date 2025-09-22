import { a as createComponent, m as maybeRenderHead, r as renderTemplate, d as renderComponent, c as createAstro, b as addAttribute, i as renderHead, e as renderSlot, j as renderScript } from './astro/server_GwfRPgX5.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"> <a href="/">首页</a> <a href="/about/">关于</a> <a href="/blog/">博客</a> <a href="/tags/">标签</a> </div>`;
}, "D:/programming/front-end/projects/learn-astro/src/components/Navigation.astro", void 0);

const $$Hamburger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "D:/programming/front-end/projects/learn-astro/src/components/Hamburger.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> </header>`;
}, "D:/programming/front-end/projects/learn-astro/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-yxtifmrq>${platform}</a>`;
}, "D:/programming/front-end/projects/learn-astro/src/components/Social.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> ${renderComponent($$result, "Social", $$Social, { "platform": "twitter", "username": "zhangsan", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "zhangsan", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "youtube", "username": "zhangsan", "data-astro-cid-sz7xmlte": true })} </footer>`;
}, "D:/programming/front-end/projects/learn-astro/src/components/Footer.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "D:/programming/front-end/projects/learn-astro/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/programming/front-end/projects/learn-astro/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
