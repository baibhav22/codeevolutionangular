import { Injectable } from '@angular/core';

@Injectable()
export class ItserviceService {

  constructor() { }

  getITBasedEmployees(){

    return [
      {name: "John", age: 31, city: "Seattle"},
      {name: "Baibhav", age: 19, city: "Boston"},
      {name: "Rama", age: 25, city: "California"}
    ];    
  } 
}



