import type RaceEvent from '$lib/classes/RaceEvent'

export default class Race implements IRace {
    round: number
    name: string
    circuitName: string
    isNext: boolean
    isUpcoming: boolean
    events: RaceEvent[]
    startDate: Date
    endDate: Date

    constructor(round: string, name: string, circuitName: string,
        isNext: boolean, isUpcoming: boolean, events: RaceEvent[],
        startDate: Date, endDate: Date) {

        this.round = Number(round)
        this.name = name
        this.circuitName = circuitName
        this.isNext = isNext
        this.isUpcoming = isUpcoming
        this.events = events
        this.startDate = startDate
        this.endDate = endDate
    }
}

export interface IRace {
    round: number;
    name: string;
    circuitName: string;
    isNext: boolean;
    isUpcoming: boolean;
    events: RaceEvent[];
    startDate: Date;
    endDate: Date;
}