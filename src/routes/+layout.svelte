<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });

	import { beforeUpdate, onMount } from 'svelte';

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
		nextPosition = isNextElementRect.top + window.scrollY - nextHeight / 1.7;
		
		window.scrollTo({
			top: nextPosition,
			behavior: 'instant'
		});
	});

	function scrollHandler() {

		if (
			window.scrollY > nextPosition - nextHeight / 2  &&
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

<svelte:window on:scroll={scrollHandler} />
