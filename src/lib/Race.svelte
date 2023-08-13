<script lang="ts">
	import type { IRace } from '$lib/classes/Race';
	
	export let race : IRace
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

	function getId(): string
	{
		if(race.isNext)
		{
			return "isNextElement";
		}
		if(race.isNext === false && race.isUpcoming)
		{
			return  "isUpcomingElement";
		}

		return  "isPreviousElement";
	};


</script>

<a id={getId()}
	href="#"
	class="rounded-lg flex-none antialiased overflow-hidden
	cursor-pointer outline-none ring-1 hover:ring-2 focus:ring-2
	shadow hover:shadow-lg focus:shadow-lg
w-full sm:w-4/5 md:w-2/4 lg:w-2/5
{race.isNext ? 'ring-lime-300 bg-lime-300' : ''}
{race.isNext === false && race.isUpcoming ? 'ring-amber-300 bg-amber-300' : ''}
{race.isNext === false && race.isUpcoming === false ? 'ring-red-300 bg-red-300' : ''}"
>
	<article>
		<section class="flex justify-between mb-2 px-4 pt-3 leading-none">
			<div class="">
				<h2 class="font-medium">{race.name}</h2>
				<h3 class="text-zinc-900/75" role="doc-subtitle">{race.circuitName}</h3>
			</div>
			<div>
				<div class="font-medium">
					{formatDate(race.startDate)} - {formatDate(race.endDate)}
				</div>
				<div class="text-center text-zinc-900/75">
					Round {race.round}
				</div>
			</div>
		</section>
		<!-- </article>
	<article> -->
		<section class="px-6 bg-white">
			<table class="table-auto w-full">
				<thead>
					<th />
					<th />
				</thead>
				<tbody class="divide-y">
					{#each race.events as event}
						<tr>
							<td class="py-2 font-medium">{event.name}</td>
							<td class="text-right">
								<span class="text-sm text-zinc-900/75">{formatDayDate(event.date)} </span>
								<span class="text-zinc-900/75">-</span>
								<span class="font-medium">{formatTime(event.date)}</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</section>
	</article>
</a>
