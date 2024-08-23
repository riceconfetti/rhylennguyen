<script lang="ts">
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
	import { onMount } from 'svelte';
	import SideHeader from '$lib/components/SideHeader.svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

		const sections = gsap.utils.toArray('.swipe-section section');
		const headers = gsap.utils.toArray('.swipe-headers hd');

		sections.forEach((panel: any, i) => {
			ScrollTrigger.create({
				trigger: panel,
				start: 'top top',
				markers: true,
				pin: true,
				pinSpacing: false,
				snap: 1
			});
		});

		function animateHeader() {}
	});
</script>

<!-- LOADER -->
<!-- <div class="loader bg-cynical fixed inset-0 flex items-center justify-center z-50">
	<script type="module" src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/newtonsCradle.js"></script>

	<l-newtons-cradle size="78" speed="1.4" color="rgb(255 199 0)"></l-newtons-cradle>
</div> -->

<div class="swipe-section h-screen w-screen">
	<section id="home" class="size-full flex flex-col justify-center items-center md:p-10 bg-cynical">
		<div>
			<h1 class="font-bold text-xl">Hi, I'm <span class="text-citrine">Rhylen</span>,</h1>
			<h2 class="font-bold text-xl">
				I'm a
				<span
					class="relative transition-all duration-250 after:transition after:scale-x-100 after:w-full after:h-1 after:absolute after:bg-citrine after:left-0 after:-bottom-3"
				>
					Front-End Developer<span class="text-citrine">.</span>
				</span>
			</h2>
		</div>
	</section>
	<section id="about" class="size-full flex flex-col justify-center items-center bg-cynical y-100">
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
	</section>
	<section
		id="projects"
		class="size-full flex flex-col justify-center items-center bg-cynical y-100"
	>
		<div class="text-xs leading-2 w-full font-bold flex flex-col gap-6 p-12 pr-24 md:p-10">
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
	</section>
	<section id="skills" class="size-full flex flex-col justify-center items-center bg-cynical y-100">
		<div class="text-xs leading-2 w-full font-bold flex flex-col gap-6 p-12 pr-24 md:p-10">
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
	</section>
</div>

<SideHeader class="fixed" />

<style scoped>
	.swipe-section {
		position: relative;
		height: 100vh;
		width: 100%;
		overflow: visible;
	}

	.swipe-section section {
		/* position: absolute; */
	}
</style>
