import { Component, OnInit } from '@angular/core';
import { SendAndGetDataBetweenComponentsService } from 'src/app/services/send-and-get-data-between-components.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  darkmode!:boolean;
  constructor(private getData:SendAndGetDataBetweenComponentsService){}
  ngOnInit(): void {
      this.getData.getTheme().subscribe(theme=>this.darkmode=theme)
  }
}
