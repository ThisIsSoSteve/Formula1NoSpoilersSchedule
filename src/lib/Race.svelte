<script lang="ts">
	//import type RaceEvent from "./classes/RaceEvent";

	export let round: number;
	export let name: string;
	export let circuitName: string;
	export let isNext: boolean;
	//export let isUpcoming: boolean
	export let startDate: Date;
	export let endDate: Date;
</script>

<div>
	{#if isNext}
		<p>Next Race</p>
	{/if}

	<p>{startDate} - {endDate}</p>

	<p>Round {round}</p>
	<p>{name}</p>
	<p>{circuitName}</p>
	<slot />
</div>
