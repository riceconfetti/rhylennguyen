<script>
	import Panel from '$lib/components/Panel.svelte';
	import { animate, scroll } from 'motion';
	import { onMount } from 'svelte';

	onMount(() => {
		const loader = document.querySelector('.loader');
		setTimeout(() => {
			animate(
				(progress) => {
					loader.querySelector('h1').innerHTML = Math.round(progress * 100);
					if (progress == 1) {
						animate(loader, { opacity: 0 });
					}
				},
				{
					duration: 2,
					easing: 'ease-out'
				}
			);
		}, 1000);
		document.querySelectorAll('.panel').forEach((section) => {
			const header = section.querySelector('.header');
			scroll(
				animate(header, {
					transform: [
						'rotate(180deg) translateX(-100%)',
						'rotate(180deg) translateX(0)',
						' rotate(180deg) translateX(-100%)'
					]
				}),
				{
					target: header,
					container: document.querySelector('main')
				}
			);
		});
	});
</script>

<!-- LOADER -->
<div
	class="loader bg-cynical fixed inset-0 flex flex-col gap-4 items-center justify-center z-50 pointer-events-none cursor-none"
>
	<script type="module" src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/newtonsCradle.js"></script>

	<h1 class="font-bold text-xl">0</h1>
	<!-- <l-newtons-cradle size="78" speed="1.4" color="rgb(255 199 0)"></l-newtons-cradle> -->
</div>

<div class="size-full h-dvh">
	<Panel title="home" color="transparent">
		<div>
			<h1 class="font-bold text-xl">Hi, I'm <span class="text-citrine">Rhylen</span>,</h1>
			<h1 class="font-bold text-xl">
				I'm a
				<span
					class="relative transition-all duration-250 after:transition after:scale-x-100 after:w-full after:h-1 after:absolute after:bg-citrine after:left-0 after:-bottom-3"
				>
					Front-End Developer<span class="text-citrine">.</span>
				</span>
			</h1>
		</div>
	</Panel>
	<Panel title="about" color="dark">
		<div
			class="bg-citrine text-xs text-cynical leading-2 w-full font-bold flex flex-col gap-6 p-12 pr-24 md:p-10"
		>
			<p>
				Hi, I'm Rhylen and I have a passion for creating novel experiences on the web. I started my
				journey in the digital world when I was 10 and picked up the book "How to build your own
				website." Since then I've been been around the internet with Greasemonkey userscripts and
				Tumblr theme customizations and fell in love with programming.
			</p>
			<p>
				These days, I'm still just as passionate about computers as I was at 10 years old. Over the
				years I've become experienced in a wide variety of web technologies and languages. My main
				focus is building easy to navigate front-end experiences and making technology intuitive.
				When I'm not coding, I love dancing, reading, and playing board and table-top role playing
				games.
			</p>
		</div>
	</Panel>
	<Panel title="projects" color="white"></Panel>
	<Panel title="skills" color="white"></Panel>
	<Panel title="contact" color="dark">
		<div
			class="bg-citrine text-xs text-cynical leading-2 w-full font-bold flex flex-col gap-6 p-12 pr-24 md:p-10"
		></div>
	</Panel>
	<Panel title="end" color="dark">
		<div
			class="bg-citrine text-xs text-cynical leading-2 w-full font-bold flex flex-col gap-6 p-12 pr-24 md:p-10"
		></div>
	</Panel>
</div>

<style scoped>
</style>
