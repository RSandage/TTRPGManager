import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Encounter } from "./encounter.model";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  encounters: [];
  testURL = 'http://localhost:3000/api/v1/';

  constructor(private http: HttpClient,) {}


  //Encounter Endpoints
  fetchPublicEncounters() {
    return this.http
      .get(`{this.testURL}encounters/index`)
  }

  createEncounter(encounter: Encounter) {
    const encounterData: Encounter = encounter;
    this.http
      .post<Encounter>(this.testURL + 'encounters', encounterData)
      .subscribe((resData) => {
        console.log(resData);
      });
    console.log('encounterData', encounterData)
  }

  updateEncounter(selectedIndex: number, selectedEncounter: Encounter) {
    const encounterData: Encounter = selectedEncounter;
    this.http
      .patch(this.testURL + 'encounters/' + selectedIndex, selectedEncounter)
  }

  deleteEncounter(selectedIndex) {
    this.http
      .delete(this.testURL + 'encounters/', selectedIndex)
      .subscribe((res) => {
        console.log(res)
      })
  }
}
