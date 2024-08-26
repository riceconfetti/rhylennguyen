<script>
	import { X } from 'lucide-svelte';

	export let pages;
	/**
	 * @type {boolean}
	 */
	export let sidebar;
</script>

<div
	class="{sidebar
		? ''
		: 'translate-x-full transition ease-in-out duration-500'} circle-menu transition-all ease-in-out duration-500 font-bold text-3xl text-cynical bg-citrine rounded-full aspect-square flex flex-col gap-20 h-[145%] -top-[22%] fixed z-30 items-star pl-48 justify-center -left-20"
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
