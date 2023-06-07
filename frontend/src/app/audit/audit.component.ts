import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  save(){
   this.router.navigateByUrl('question')
  }
}
