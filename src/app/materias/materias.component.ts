import { Component, OnInit } from '@angular/core';
import { GetpostService } from '../getpost.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css'],
})
export class MateriasComponent implements OnInit {
  public jsonData: any[] = [];
  
  constructor(public getpostService: GetpostService) {}

  ngOnInit() {
    this.getpostService.getFetch()
      .then((jsonData) => {
        this.jsonData = jsonData;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
