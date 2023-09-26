import { Subscription } from "./subscription";

export class Tournament extends Subscription {
    idCamp: number;
    game: string;
    mode: Mode;
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
    subscribed: boolean;
    hoursToStart: number;
}

export enum Mode {
  SOLO = "Solo",
  DUO = "Duo",
  TRIO = "Trio",
  SQUAD = "Squad",
  X1 = "X1"
}

