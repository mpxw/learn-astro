import { a as createComponent, d as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_GwfRPgX5.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_DOneCLFH.mjs';

const html = () => "<p>在学习 Astro 大约一周后，我决定尝试些新的东西。我编写并导入了一个小组件！</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"我的第二篇博客文章","author":"Astro 学习者","description":"学习了一些 Astro 后，我根本停不下来！","image":{"url":"https://docs.astro.build/assets/arc.webp","alt":"The Astro logo on a dark background with a purple gradient arc."},"pubDate":"2022-07-08T00:00:00.000Z","tags":["astro","blogging","learning in public","successes"]};
				const file = "D:/programming/front-end/projects/learn-astro/src/pages/posts/post-2.md";
				const url = "/posts/post-2";
				function rawContent() {
					return "   \r\n                                              \r\n                \r\n                 \r\n                                     \r\n      \r\n                                                   \r\n                                                                          \r\n                   \r\n                                                              \r\n   \r\n在学习 Astro 大约一周后，我决定尝试些新的东西。我编写并导入了一个小组件！";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_1 as _ };
