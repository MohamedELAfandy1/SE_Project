import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/httpRequest/http.service';
import { SendAndGetDataBetweenComponentsService } from 'src/app/services/send-and-get-data-between-components.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  darkmode!:boolean;

  constructor(private http:HttpService,private getData:SendAndGetDataBetweenComponentsService){
    this.getData.getTheme().subscribe(theme=>this.darkmode=theme)

  }
}
