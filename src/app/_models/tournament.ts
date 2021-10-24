import { Subscription } from "./subscription";

export class Tournament extends Subscription {
    idCamp: number;
    mode: string;
    date: string;
    award: string;
    duration: string;
    start: string;
    scoring: string;
    division: number;
    cost: any;
    active: boolean;
    privateCamp: boolean;
    times: number;
    subscribed: boolean
}

