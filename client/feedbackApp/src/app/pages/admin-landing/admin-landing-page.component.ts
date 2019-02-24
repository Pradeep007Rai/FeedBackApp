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
        points : [1, 1, 1.3, 1.2, 1.1, 1, 5, 1, 2],
      teacherName : 'Aparna',
      className : 'FYBSc',
      subjectName : 'Programming in C'
    };
}
}
