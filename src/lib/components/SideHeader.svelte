<script lang="ts">
	export let className;
	export { className as class };
</script>

<div
	class=" swipe-headers flex justify-end items-center z-20 inset-0 pointer-events-none cursor-none {className}"
>
	<h2
		class="hd text-6xl text-transparent leading-0 font-bold uppercase tracking-[1rem] [writing-mode:vertical-lr] rotate-180"
	>
		home
	</h2>
	<h2
		class="x-100 hd text-6xl leading-0 font-bold uppercase tracking-[1rem] [writing-mode:vertical-lr] rotate-180 text-cynical"
	>
		about
	</h2>
	<h2
		class="x-100 hd text-6xl leading-0 font-bold uppercase tracking-[1rem] [writing-mode:vertical-lr] rotate-180"
	>
		projects
	</h2>
	<h2
		class="x-100 hd text-6xl leading-0 font-bold uppercase tracking-[1rem] [writing-mode:vertical-lr] rotate-180"
	>
		skills
	</h2>
</div>

<style scoped>
	.hd {
		position: absolute;
	}
</style>
