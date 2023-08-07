<script>
	import Race from '$lib/Race.svelte';
	import { onMount, beforeUpdate } from 'svelte';
	export let data;

	let lang = 'en-GB';
	beforeUpdate(() => {
		lang = navigator.languages.length > 0 ? navigator.languages[0] : 'en';
	});

	onMount(() => {
		const el = document.getElementById('isNext');
		if (!el) return;
		el.scrollIntoView({
			behavior: 'instant'
		});
	});
</script>

<div
	class="flex justify-between mx-auto w-full sm:w-4/5 md:w-2/4 lg:w-2/5 pb-2 p-2
sticky top-0 bg-white border-solid border-b"
>
	<div class="font-medium text-2xl">
		{data.season}
	</div>
	<div class="text-zinc-900/75">
		{lang}
	</div>
</div>
<div class="flex flex-col items-center gap-4 mx-1">
	{#if !data.races[0].isNext}
		<div class="font-medium text-left">Previous Races</div>
	{/if}
	{#each data.races as race}
		<Race {...race} {lang} />
	{/each}
</div>
