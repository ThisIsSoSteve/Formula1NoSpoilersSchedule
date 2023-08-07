<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="flex flex-col h-screen overflow-hidden">
	<header>
		<h1 class="text-center font-semibold text-4xl px-4 py-2 sm:py-6 bg-white">
			Formula 1: The don't spoil me Schedule
		</h1>
	</header>
	<main class="flex-1 overflow-y-scroll">
		<slot />
	</main>
</div>
