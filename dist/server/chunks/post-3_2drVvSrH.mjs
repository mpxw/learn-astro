import { a as createComponent, d as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_GwfRPgX5.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_DOneCLFH.mjs';

const html = () => "<p>尽管这并不总是一帆风顺，但我很享受使用 Astro 进行搭建。并且，<a href=\"https://astro.build/chat\">Discord 社区</a>真的很友好而且乐于助人！</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"我的第三篇博客文章","author":"Astro 学习者","description":"我遇到了一些问题，但是在社区里面提问真的很有帮助！","image":{"url":"https://docs.astro.build/assets/rays.webp","alt":"The Astro logo on a dark background with rainbow rays."},"pubDate":"2022-07-15T00:00:00.000Z","tags":["astro","learning in public","setbacks","community"]};
				const file = "D:/programming/front-end/projects/learn-astro/src/pages/posts/post-3.md";
				const url = "/posts/post-3";
				function rawContent() {
					return "   \r\n                                              \r\n                \r\n                 \r\n                                        \r\n      \r\n                                                    \r\n                                                                 \r\n                   \r\n                                                              \r\n   \r\n尽管这并不总是一帆风顺，但我很享受使用 Astro 进行搭建。并且，[Discord 社区](https://astro.build/chat)真的很友好而且乐于助人！";
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

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_2 as _ };
