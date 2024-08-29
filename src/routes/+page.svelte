<script>
	import Panel from '$lib/components/Panel.svelte';
	import Skill from '$lib/components/Skill.svelte';
	import Copyright from 'svelte-copyright';
	import { animate, scroll } from 'motion';
	import { onMount } from 'svelte';
	import { Linkedin, Github } from 'lucide-svelte';

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

<div id="scroll" class="size-full flex flex-col">
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
	<Panel title="skills" color="white">
		<div class="flex gap-4 justify-between h-3/5 w-full p-12 pr-20">
			<Skill years="6">html & css</Skill>
			<Skill years="6">javascript</Skill>
			<Skill years="4">java</Skill>
			<Skill years="2">vue</Skill>
			<Skill years="2">svelte</Skill>
		</div>
	</Panel>
	<Panel title="contact" color="dark">
		<div
			class="bg-citrine text-xs h-[60dvh] justify-center text-cynical leading-2 w-full font-bold flex flex-col gap-6 p-12 pr-24 md:p-10"
		>
			<h3 class="text-lg">
				I’m available for freelance work! If you’re interested in my work (or if you have fun
				pictures of your cat), I would love to chat!
			</h3>
			<a class="text-lg" href="/">me@rhylennguyen.com</a>
		</div>
		<footer class="w-full flex flex-col gap-2 items-center absolute bottom-0 p-6">
			<div class="flex p-2 items-center justify-center gap-2">
				<Github />
				<Linkedin />
			</div>
			<Copyright class="text-xs">Rhylen Nguyen</Copyright>
		</footer>
	</Panel>
</div>

<style scoped>
</style>
