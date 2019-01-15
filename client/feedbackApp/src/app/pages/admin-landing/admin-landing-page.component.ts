import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {
  data: any;
  constructor() { }


  ngOnInit() {
      this.data = {
        points : [4, 5, 2, 3, 4, 2.3, 3, 4, 5],
      teacherName : 'Aparna',
      className : 'FYBSc',
      subjectName : 'Programming in C'
    }
}
}
