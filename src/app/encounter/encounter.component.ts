import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './data-storage.service';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {
  encounters: [];

  constructor(private dataStorage: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorage.fetchPublicEncounters();
  }

}
