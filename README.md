# Formula 1 no spoilers schedule
Displays only the schedule not the race results

## Live site
https://formula1-no-spoilers-schedule.vercel.app/

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Formula one API

https://ergast.com/mrd/

get the current seasons schedule https://ergast.com/api/f1/current.json
get Qualifying result https://ergast.com/api/f1/2023/6/qualifying.json (https://ergast.com/api/f1/{year}/{round}/qualifying.json)
get Sprint result https://ergast.com/api/f1/2023/12/sprint.json (https://ergast.com/api/f1/{year}/{round}/sprint.json)
get Race result https://ergast.com/api/f1/2023/6/results.json (https://ergast.com/api/f1/{year}/{round}/results.json)

get Driver Standings http://ergast.com/api/f1/current/driverStandings
get Constructor Standings http://ergast.com/api/f1/current/constructorStandings

a copy of the data current seasons schedule lives in the lib folder for dev at the moment 'current.json'

there doesn't seem to be a way to get the sprint shootout results (sprint qualifying) and the refer to it as "SecondPractice" 

## caching
https://stackoverflow.com/questions/64092593/svelte-is-there-a-way-to-cache-the-api-result-in-a-way-that-it-wont-trigger-th
https://github.com/TanStack/query


## Other schedule sites
https://www.formula1.com/en/racing/2023.html
https://www.skysports.com/f1/schedule-results

## Format time
https://github.com/metonym/svelte-time