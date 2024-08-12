<script lang="ts">
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let currentIndex = -1;
		let animating: Boolean;
		let swipePanels = gsap.utils.toArray('.swipe-section section');

		// set second panel two initial 100%
		gsap.set('.y-100', { yPercent: 100 });

		// set z-index levels for the swipe panels
		gsap.set(swipePanels, {
			zIndex: (i) => i
		});

		// create an observer and disable it to start
		let intentObserver = ScrollTrigger.observe({
			type: 'wheel,touch',
			onUp: () => !animating && gotoPanel(currentIndex + 1, true),
			onDown: () => !animating && gotoPanel(currentIndex - 1, false),
			wheelSpeed: -1,
			tolerance: 10,
			preventDefault: true,
			onPress: (self) => {
				// on touch devices like iOS, if we want to prevent scrolling, we must call preventDefault() on the touchstart (Observer doesn't do that because that would also prevent side-scrolling which is undesirable in most cases)
				ScrollTrigger.isTouch && self.event.preventDefault();
			}
		});
		intentObserver.disable();

		// handle the panel swipe animations
		function gotoPanel(index: number, isScrollingDown: Boolean) {
			animating = true;
			// return to normal scroll if we're at the end or back up to the start
			if ((index === swipePanels.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
				let target = index;
				gsap.to(target, {
					// yPercent: isScrollingDown ? -100 : 0,
					duration: 0.0,
					onComplete: () => {
						animating = false;
						isScrollingDown && intentObserver.disable();
					}
				});
				return;
			}

			//   target the second panel, last panel?
			let target = isScrollingDown ? swipePanels[index] : swipePanels[currentIndex];

			gsap.to(target, {
				yPercent: isScrollingDown ? 0 : 100,
				duration: 0.75,
				onComplete: () => {
					animating = false;
				}
			});
			currentIndex = index;
			console.log(index);
		}

		// pin swipe section and initiate observer
		ScrollTrigger.create({
			trigger: '.swipe-section',
			pin: true,
			start: 'top top',
			end: '+=1',
			onEnter: (self) => {
				intentObserver.enable();
				gotoPanel(currentIndex + 1, true);
			},
			onEnterBack: () => {
				intentObserver.enable();
				gotoPanel(currentIndex - 1, false);
			}
		});

		let currentHIndex = -1;
		let animatingH: Boolean;

		let headers = gsap.utils.toArray('.animateHeader .swipeHeader');

		gsap.set('.x-100', { xPercent: 100 });

		gsap.set(headers, {
			zIndex: (i) => i
		});

		let intentHObserver = ScrollTrigger.observe({
			type: 'wheel,touch',
			onUp: () => !animatingH && gotoHeader(currentHIndex + 1, true),
			onDown: () => !animatingH && gotoHeader(currentHIndex - 1, false),
			wheelSpeed: -1,
			tolerance: 10,
			preventDefault: true,
			onPress: (self) => {
				// on touch devices like iOS, if we want to prevent scrolling, we must call preventDefault() on the touchstart (Observer doesn't do that because that would also prevent side-scrolling which is undesirable in most cases)
				ScrollTrigger.isTouch && self.event.preventDefault();
			}
		});
		intentHObserver.disable();

		function gotoHeader(index: number, isScrollingDown: Boolean) {
			animatingH = true;
			// return to normal scroll if we're at the end or back up to the start
			if ((index === headers.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
				let target = index;
				gsap.to(target, {
					// yPercent: isScrollingDown ? -100 : 0,
					duration: 0.0,
					onComplete: () => {
						animatingH = false;
						isScrollingDown && intentHObserver.disable();
					}
				});
				return;
			}

			//   target the second panel, last panel?
			let target = isScrollingDown ? headers[index] : headers[currentHIndex];
			let parent = isScrollingDown ? headers[currentHIndex] : headers[currentHIndex - 1];

			gsap.to(target, {
				xPercent: isScrollingDown ? 0 : 100,
				duration: 0.75,
				onComplete: () => {
					animatingH = false;
				}
			});

			gsap.to(parent, {
				xPercent: isScrollingDown ? 100 : 0,
				duration: 0.75,
				onComplete: () => {
					animatingH = false;
				}
			});
			currentHIndex = index;
			console.log(index);
		}

		ScrollTrigger.create({
			trigger: '.animateHeader',
			pin: true,
			start: 'top top',
			end: '+=1',
			onEnter: (self) => {
				intentHObserver.enable();
				gotoHeader(currentHIndex + 1, true);
			},
			onEnterBack: () => {
				intentHObserver.enable();
				gotoHeader(currentHIndex - 1, false);
			}
		});
	});

	const pages = [
		{
			name: 'home',
			color: false
		},
		{
			name: 'about',
			color: true
		},
		{
			name: 'skills',
			color: false
		}
	];
</script>

<div
	class="fixed animateHeader size-full flex justify-end items-center z-10 inset-0 pointer-events-none cursor-none"
>
	<h2
		class="swipeHeader text-6xl leading-0 font-bold uppercase tracking-[1rem] [writing-mode:sideways-lr]"
	>
		home
	</h2>
	<h2
		class="x-100 swipeHeader text-6xl leading-0 font-bold uppercase tracking-[1rem] [writing-mode:sideways-lr] text-cynical"
	>
		about
	</h2>
	<h2
		class="x-100 swipeHeader text-6xl leading-0 font-bold uppercase tracking-[1rem] [writing-mode:sideways-lr]"
	>
		skills
	</h2>
</div>

<div class="swipe-section size-full">
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
			class="bg-citrine text-sm text-cynical leading-2 w-full font-bold flex flex-col gap-6 p-16 pr-24 md:p-10"
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
	<section id="skill" class="size-full flex flex-col justify-center items-center bg-cynical y-100">
		<div class="text-sm leading-2 w-full font-bold flex flex-col gap-6 p-16 pr-24 md:p-10">
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

<style>
	.swipe-section {
		position: relative;
		height: 100vh;
		width: 100%;
		overflow: visible;
	}

	.swipe-section section,
	.swipeHeader {
		position: absolute;
	}
</style>
