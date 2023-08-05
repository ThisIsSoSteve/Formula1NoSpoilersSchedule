<script>
	import Event from '$lib/Event.svelte';
	import Race from '$lib/Race.svelte';
	export let data;
</script>

<h1 class="font-semibold text-4xl">Formula 1: The don't spoil me Schedule</h1>

<!-- {item.MRData.total} -->
<p>Season {data.season}</p>
<div class="flex flex-col gap-4">
	{#each data.races as race}
		<Race {...race}>
			{#each race.events as event}
				<Event {...event} />
			{/each}
		</Race>
	{/each}
</div>
