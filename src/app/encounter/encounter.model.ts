import { EncounterEvent } from "./encounterevent.model";

export class Encounter {
  public name: string;
  public encounterEvent?: EncounterEvent[];

  constructor(name: string, encounterEvent: []) {
    this.name = name;
    this.encounterEvent = encounterEvent;
  }
}
