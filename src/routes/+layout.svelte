<script lang="ts">
	import '../app.css';
	import { Menu, X } from 'lucide-svelte';
	const pages = [
		{
			name: 'about',
			color: true
		},
		{
			name: 'projects',
			color: false
		},
		{
			name: 'skills',
			color: false
		},

		{
			name: 'contact',
			color: true
		}
	];
	$: sidebar = false;
</script>

<nav
	class="bg-cynical fixed z-30 w-full flex justify-between items-center font-bold p-4 px-6 md:py-6 md:px-10 border-b border-opacity-15 border-citrine md:-translate-y-full"
>
	<a href="/">rhylen<span class="text-citrine">.</span>n</a>

	<button
		on:click={() => {
			sidebar = !sidebar;
		}}
		class="hamburger md:hidden"
	>
		<Menu />
	</button>

	<!-- <X class="{sidebar ? '' : 'hidden'}    text-cynical" /> -->

	<div class="hidden md:flex gap-6">
		{#each pages as p}
			<a href="#{p.name}">{p.name}</a>
		{/each}
	</div>
</nav>

<div class="relative h-full">
	<div
		class="{sidebar
			? ''
			: 'translate-x-full transition ease-in-out duration-500'} circle-menu transition-all ease-in-out duration-500 font-bold text-3xl text-cynical bg-citrine rounded-full aspect-square flex flex-col gap-20 h-[125%] -top-[13%] fixed z-30 items-star pl-48 justify-center -left-10"
	>
		<nav
			class="fixed top-0 left-0 z-30 w-full flex justify-end items-center font-bold p-4 px-6 md:py-6 md:px-10"
		>
			<button
				on:click={() => {
					sidebar = !sidebar;
				}}
				class="hamburger md:hidden pl-2"
			>
				<X />
			</button>
		</nav>
		{#each pages as p}
			<a
				href="#{p.name}"
				on:click={() => {
					sidebar = !sidebar;
				}}>{p.name}.</a
			>
		{/each}
	</div>
	<slot />
</div>
