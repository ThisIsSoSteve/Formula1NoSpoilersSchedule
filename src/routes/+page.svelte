<script>
	import item from '$lib/current.json';
	let data = item.MRData.RaceTable;
</script>

<h1 class="font-semibold text-4xl">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{item.MRData.total}
{#each data.Races as race, i}
	<p>{i+1}, {race.raceName}</p>
{/each}
