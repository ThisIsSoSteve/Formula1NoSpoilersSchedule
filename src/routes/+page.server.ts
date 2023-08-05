import current from '$lib/current.json';

export function load() {

    const currentDate = new Date;
    const races = current.MRData.RaceTable.Races;
    let upcomingRace = false
    //todo: load from api and cache this 
    return {
        season: current.MRData.RaceTable.season,
        races: races.map((race) => {

            let isNextRace = false;
            //todo: double check that date work correct with timezones etc
            //Date from api is in UTC
            if (upcomingRace == false
                && currentDate <= new Date(`${race.date}T${race.time}`)) {
                upcomingRace = true
                isNextRace = true
            }

            const events = [
                {
                    name: 'Free Practice 1',
                    shortName: 'FP1',
                    date: new Date(`${race.FirstPractice.date}T${race.FirstPractice.time}`)
                },
                {
                    name: 'Qualifying',
                    shortName: 'Quali',
                    date: new Date(`${race.Qualifying.date}T${race.Qualifying.time}`)
                },
                {
                    name: 'Grand Prix',
                    shortName: 'Race',
                    date: new Date(`${race.date}T${race.time}`)
                }
            ];

            //Api seems to call Sprint Shootout SecondPractice when theres a Sprint
            //need to check early races as there was no Sprint Shootout before and Qualifying determined the sprint starting order
            //so the SecondPractice was Free Practice 2 not a Sprint Shootout... bloody sport
            if (race.Sprint !== undefined) {

                if (Number(current.MRData.RaceTable.season) < 2023) {//in prevoius seasons it was fp2 not a sprint shootout
                    events.push({
                        name: 'Free Practice 2',
                        shortName: 'FP2',
                        date: new Date(`${race.SecondPractice.date}T${race.SecondPractice.time}`)
                    }
                    )
                }
                else {
                    events.push(
                        {
                            name: 'Sprint Shootout',
                            shortName: 'Sprint Shootout',
                            date: new Date(`${race.SecondPractice.date}T${race.SecondPractice.time}`)
                        }
                    )
                }
                events.push(
                    {
                        name: 'Sprint',
                        shortName: 'Sprint',
                        date: new Date(`${race.Sprint.date}T${race.Sprint.time}`)
                    },
                )
            }
            else {
                events.push({
                    name: 'Free Practice 2',
                    shortName: 'FP2',
                    date: new Date(`${race.SecondPractice.date}T${race.SecondPractice.time}`)
                })
            }

            if (race.ThirdPractice !== undefined) {
                events.push({
                    name: 'Free Practice 3',
                    shortName: 'FP3',
                    date: new Date(`${race.ThirdPractice.date}T${race.ThirdPractice.time}`)
                })
            }

            //sort events by date
            events.sort((a, b) => a.date.valueOf() - b.date.valueOf());

            return {
                round: Number(race.round),
                name: race.raceName,
                circuitName: race.Circuit.circuitName,
                isNext: isNextRace,
                isUpcoming: upcomingRace,
                events: events,
                startDate: events[0].date,
                endDate: events[events.length - 1].date
            }
        })
    };
}
