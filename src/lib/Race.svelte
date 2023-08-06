<script lang="ts">
	import type RaceEvent from '$lib/classes/RaceEvent';
	import { onMount } from 'svelte';

	export let round: number;
	export let name: string;
	export let circuitName: string;
	export let isNext: boolean;
	export let isUpcoming: boolean;
	export let startDate: Date;
	export let endDate: Date;
	export let events: RaceEvent[];
	export let lang: string;

	function formatDate(date: Date): string {
		return `${date.toLocaleString(lang, { day: '2-digit', month: 'short' })}`;
	}

	function formatDayDate(date: Date): string {
		return `${date.toLocaleString(lang, {
			//weekday: 'short',
			day: '2-digit',
			month: 'short'
		})}`;
	}

	function formatTime(date: Date): string {
		return `${date.toLocaleTimeString(lang, {
			hour12: false,
			hour: '2-digit',
			minute: '2-digit'
			//timeZoneName: 'short'
		})}`;
	}

	//$: startDateFormatted = formatDate(startDate);
</script>

{#if isNext}
	<div id="isNext" class="font-medium">Next Race</div>
{/if}

<a
	href="#"
	class="m-4 rounded-lg flex-none antialiased overflow-hidden
	cursor-pointer outline-none ring-1 hover:ring-2 focus:ring-2
	shadow hover:shadow-lg focus:shadow-lg
w-full sm:w-4/5 md:w-2/4 lg:w-2/5
{isNext ? 'ring-lime-300 bg-lime-300' : ''}
{isNext === false && isUpcoming ? 'ring-amber-300 bg-amber-300' : ''}
{isNext === false && isUpcoming === false ? 'ring-red-300 bg-red-300' : ''}"
>
	<article>
		<section class="flex justify-between mb-2 px-4 pt-4 leading-none">
			<div class="">
				<h2 class="font-medium">{name}</h2>
				<h3 class="opacity-75" role="doc-subtitle">{circuitName}</h3>
			</div>
			<div>
				<div class="font-medium">
					{formatDate(startDate)} - {formatDate(endDate)}
				</div>
				<div class="text-center opacity-75">
					Round {round}
				</div>
			</div>
		</section>
		<!-- </article>
	<article> -->
		<section class="px-2 bg-white">
			<table class="table-auto w-full">
				<thead>
					<th />
					<th />
				</thead>
				<tbody class="divide-y">
					{#each events as event}
						<tr>
							<td class="py-2 font-medium">{event.name}</td>
							<td class="text-right">
								<span class="text-sm opacity-75">{formatDayDate(event.date)} </span>
								<span class="opacity-75">-</span>
								<span class="font-medium">{formatTime(event.date)}</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</section>

		<!-- <div class="text-center">
		{#if isNext}
			<p>Next Race</p>
		{:else if isUpcoming}
			<p>Upcoming Race</p>
		{:else}
			<p>Click to Spoil</p>
		{/if}
	</div> -->
	</article>
</a>
{#if isNext}
	<div class="font-medium">Upcoming Races</div>
{/if}
