<script>
	import '../app.css';
	import { Menu } from 'lucide-svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	export const prerender = true;

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

<main class="relative flex flex-col size-full snap-y snap-mandatory overflow-auto">
	<nav class="bg-cynical sticky w-full top-0 z-30">
		<div
			class="flex justify-between items-center font-bold p-4 px-6 md:py-6 md:px-10 border-b border-opacity-15 border-citrine md:-translate-y-full"
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
		</div>
	</nav>
	<Sidebar {pages} {sidebar} />
	<div class="w-full h-full"><slot /></div>
</main>
