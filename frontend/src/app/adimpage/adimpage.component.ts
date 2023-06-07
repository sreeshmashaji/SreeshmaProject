import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adimpage',
  templateUrl: './adimpage.component.html',
  styleUrls: ['./adimpage.component.css']
})
export class AdimpageComponent implements OnInit {

  constructor( private root:Router) { }

  ngOnInit(): void {
  }

  details()
  
  {
    this.root.navigateByUrl('fulldetailes')
  }

}
