<script>
	export let years;
	const percent = Math.min(1, years / 5) * 100;
</script>

<div class="flex flex-col gap-2 min-w-fit w-full h-full items-center lg:hidden relative">
	<div class="bg-white bg-opacity-10 h-full w-full flex flex-col justify-end">
		<div
			class="progress bg-citrine h-full flex items-end justify-center py-2"
			style:height="{percent}%"
		>
			<p class="text-xs text-cynical font-bold [writing-mode:vertical-lr]">
				{years > 5 ? '5+ years' : years + ' years'}
			</p>
		</div>
	</div>
	<p class="text-xs font-bold h-24 [writing-mode:vertical-lr] absolute -bottom-28"><slot /></p>
</div>
