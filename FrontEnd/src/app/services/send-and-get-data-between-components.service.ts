import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendAndGetDataBetweenComponentsService {
  darkMode=new BehaviorSubject<boolean>(true);
  data=new Subject();

  constructor() { }
  sendTheme(theme:boolean){
    this.darkMode.next(theme)
  }
  getTheme():Observable<boolean>{
    return this.darkMode.asObservable();
  }
}
