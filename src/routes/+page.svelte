<script>
	import Race from '$lib/Race.svelte';
	import {beforeUpdate } from 'svelte';
	export let data;

	let lang = 'en-GB';

	beforeUpdate(() => {
		lang = navigator.languages.length > 0 ? navigator.languages[0] : 'en';
	});

</script>

<div class="flex flex-col items-center gap-4 mx-1">
	{#each data.races as race}
		<Race {...race} {lang} />
	{/each}
</div>

