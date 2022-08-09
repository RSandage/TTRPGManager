import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  encounters: [];
  testURL = 'http://localhost:3000/api/v1/';

  constructor(private http: HttpClient,) {}

  fetchPublicEncounters() {
    return this.http
      .get(`{this.testURL}encounters/index`)
  }

  saveEncounter() {

  }
}
