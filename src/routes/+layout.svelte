<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<header>
	<h1 class="text-center font-semibold text-4xl px-4 py-6">
		Formula 1: The don't spoil me Schedule
	</h1>
</header>
<main class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 pt-0">
	<slot />
</main>
