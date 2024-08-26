<script>
	export let title, color;
</script>

<section
	id={title}
	class="panel min-h-full flex flex-col justify-center items-center md:p-10 bg-cynical relative snap-start"
>
	<h2
		class="header right-0 absolute text-6xl leading-0 font-bold uppercase tracking-[1rem] [writing-mode:vertical-lr] text-} {color ==
		'dark'
			? 'text-cynical'
			: color === 'transparent'
				? 'text-transparent'
				: 'text-white'}"
	>
		{title}
	</h2>
	<slot />
</section>
