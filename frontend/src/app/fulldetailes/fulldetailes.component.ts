import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-fulldetailes',
  templateUrl: './fulldetailes.component.html',
  styleUrls: ['./fulldetailes.component.css']
})
export class FulldetailesComponent implements OnInit {
  data:any

  constructor(private ds:AuthserviceService) { }

  ngOnInit(): void {
    this.detailslist()
  }
  detailslist(){
    this.ds.detailsfun()
    .subscribe((result: any) => {
      console.log("result", result)
      this.data = result.data
      console.log("resultdata", this.data)

    })
  }

}
