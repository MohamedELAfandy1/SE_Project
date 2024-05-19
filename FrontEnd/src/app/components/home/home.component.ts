import { Component, OnInit } from '@angular/core';
import { SendAndGetDataBetweenComponentsService } from 'src/app/services/send-and-get-data-between-components.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  darkmode!:boolean;
  constructor(private getData:SendAndGetDataBetweenComponentsService){}
  ngOnInit(): void {
      this.getData.getTheme().subscribe(mode=>this.darkmode=mode)
  }
}
