import { Component, OnInit } from '@angular/core';
import { ItserviceService } from '../itservice.service';

@Component({
  selector: 'app-itservice',
  templateUrl: './itservice.component.html',
  styleUrls: ['./itservice.component.css']
})
export class ItserviceComponent implements OnInit {

  public itemployees = [] as any;
  public name=" ";
  public eventName=""

  constructor(private _itservice : ItserviceService) { }

  ngOnInit(): void {
   this.itemployees= this._itservice.getITBasedEmployees();
  }

  onClick(){
    console.log('Someone clicked me here')
    this.eventName="OrderReadyForProcessing"
  }
}
