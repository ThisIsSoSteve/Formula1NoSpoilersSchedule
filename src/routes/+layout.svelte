<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });

	import { beforeUpdate, onMount } from 'svelte';
	import IconLink from '$lib/IconLink.svelte';

	let lang = 'en-GB';
	beforeUpdate(() => {
		lang = navigator.languages.length > 0 ? navigator.languages[0] : 'en';
	});

	let nextPosition = 0;
	let nextHeight = 0;
	let RaceCategory = 'Next Race';

	onMount(() => {
		lang = navigator.languages.length > 0 ? navigator.languages[0] : 'en';

		const el = document.getElementById('isNextElement');
		if (!el) return;

		let isNextElementRect = el.getBoundingClientRect();
		nextHeight = isNextElementRect.height;
		nextPosition = isNextElementRect.top + window.scrollY - nextHeight / 1.8;

		// window.scrollTo({
		// 	top: nextPosition,
		// 	behavior: 'instant'
		// });
	});

	function scrollHandler() {
		if (
			window.scrollY > nextPosition - nextHeight / 2 &&
			window.scrollY < nextPosition + nextHeight / 2 &&
			RaceCategory != 'Next Race'
		) {
			//console.log('passed next race');
			RaceCategory = 'Next Race';
		}

		if (window.scrollY > nextPosition + nextHeight / 2 && RaceCategory != 'Upcoming Races') {
			//console.log('Upcoming race');
			RaceCategory = 'Upcoming Races';
		}

		if (window.scrollY < nextPosition - nextHeight / 2 && RaceCategory != 'Previous Races') {
			//console.log('Previous race');
			RaceCategory = 'Previous Races';
		}
	}
</script>

<svelte:head>
	<title>F1: The don't spoil me Schedule</title>
</svelte:head>

<header class="sticky top-0 z-10">
	<h1 class="text-center font-semibold text-2xl sm:text-4xl px-4 py-2 sm:py-6 bg-white">
		Formula 1: The don't spoil me Schedule
	</h1>
	<div
		class="flex justify-between mx-auto w-full sm:w-4/5 md:w-2/4 lg:w-2/5 pb-2 p-2
sticky top-0 bg-white border-solid border-b"
	>
		<div class="font-medium text-2xl">2023</div>
		<div class="font-medium">
			{RaceCategory}
		</div>
		<div class="text-zinc-900/75">
			{lang}
		</div>
	</div>
</header>
<main>
	<slot />
</main>

<footer class="flex flex-row-reverse flex-nowrap p-6 mt-6 border-t-2">
	<IconLink url="https://github.com/ThisIsSoSteve/Formula1NoSpoilersSchedule">
		<svg
			width="20"
			height="20"
			fill="currentColor"
			viewBox="0 0 16 16"
		>
			<path
				d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
			/>
		</svg>
		<span>GitHub</span>
	</IconLink>
</footer>

<svelte:window on:scroll={scrollHandler} />
