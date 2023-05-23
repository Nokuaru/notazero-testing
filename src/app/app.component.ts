import { Component } from '@angular/core';
import {GetpostService} from './getpost.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'notazero-testing';
  constructor(public getpostService:GetpostService) {}
}
