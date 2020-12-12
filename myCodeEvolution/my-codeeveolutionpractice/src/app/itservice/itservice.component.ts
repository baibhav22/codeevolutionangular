import { Component, OnInit } from '@angular/core';
import { ItserviceService } from '../itservice.service';

@Component({
  selector: 'app-itservice',
  templateUrl: './itservice.component.html',
  styleUrls: ['./itservice.component.css']
})
export class ItserviceComponent implements OnInit {

  public itemployees = [] as any;

  constructor(private _itservice : ItserviceService) { }

  ngOnInit(): void {
   this.itemployees= this._itservice.getITBasedEmployees();
  }
}
