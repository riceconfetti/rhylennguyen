<script>
	import '../app.css';
	import { Menu } from 'lucide-svelte';

	const pages = [
		{
			name: 'about',
			color: true
		},
		{
			name: 'skills',
			color: false
		},
		{
			name: 'projects',
			color: false
		},
		{
			name: 'contact',
			color: true
		}
	];
</script>

<nav
	class="fixed z-10 w-full flex justify-between items-center font-bold p-4 px-6 md:py-6 md:px-10 border-b border-opacity-15 border-citrine bg-cynical md:-translate-y-full"
>
	<a href="/">rhylen<span class="text-citrine">.</span>n</a>
	<Menu class="md:hidden" />
	<div class="hidden md:flex gap-6">
		{#each pages as p}
			<a href="#{p.name}">{p.name}</a>
		{/each}
	</div>
</nav>

<div class="relative h-full">
	<slot />
</div>
