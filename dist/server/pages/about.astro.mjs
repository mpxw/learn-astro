import { c as createAstro, a as createComponent, f as defineStyleVars, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_GwfRPgX5.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BDC9rx6T.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "\u5173\u4E8E\u6211";
  const identity = {
    firstName: "\u838E\u62C9",
    country: "\u4E2D\u56FD",
    occupation: "\u8F6F\u4EF6\u5DE5\u7A0B\u5E08",
    hobbies: ["\u6444\u5F71", "\u89C2\u9E1F", "\u68D2\u7403"]
  };
  const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
  const finished = false;
  const skillColor = "navy";
  const fontWeight = "bold";
  const textCase = "uppercase";
  const $$definedVars = defineStyleVars([{ skillColor, fontWeight, textCase }]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h2 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>……和我的新 Astro 网站！</h2><p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>
我正在学习 Astro
		的入门教程。这是我网站上的第二个页面，也是我自己建立的第一页面！
</p><p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>随着我完成更多教程，该站点将更新，所以请继续查看我的旅程将如何进行吧！</p><p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>以下是关于我的几个事实：</p><ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}><li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>我的名字是${identity.firstName}.</li><li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>我住在${identity.country}。我的职业是${identity.occupation}。</li>${identity.hobbies.length >= 2 && renderTemplate`<li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>
我的两个习惯：${identity.hobbies[0]}和${identity.hobbies[1]}</li>`}</ul><p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>我的技能是：</p><ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${skills.map((skill) => renderTemplate`<li class="skill" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${skill}</li>`)}</ul>${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>我非常乐意学习 Astro！</p>`}${finished}${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>我的目标是在三天内完成。</p>` }` })}`;
}, "D:/programming/front-end/projects/learn-astro/src/pages/about.astro", void 0);

const $$file = "D:/programming/front-end/projects/learn-astro/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
