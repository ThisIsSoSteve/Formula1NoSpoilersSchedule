export default class RaceEvent {
    name: string;
    shortName: string;
    date: Date;

    constructor(name: string, shortName: string, date: string) {
        this.name = name;
        this.shortName = shortName;
        this.date = new Date(date);
    }
}