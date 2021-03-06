import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/classDetailService';
import { ClassModel } from 'src/app/model/class/class.model';

@Component({
  selector: 'app-manage-class-page',
  templateUrl: './manage-class-page.component.html',
  styleUrls: ['./manage-class-page.component.css']
})
export class ManageClassPageComponent implements OnInit {
  classes: any[];
  searchString: string;
  className: string;
  addNewClass: any;
  sections = [
    'Computer Science',
    'Commerce',
    'Art' ,
    'MSC' ,
    'MCA' ,
    'Management'
  ];
  constructor(private classService: ClassService) { }
  deleteClass(index: any) {
    if (window.confirm('Do you want to really delete it')) {
      this.classes.splice(index, 1);
    }
  }
  addClass() {
     this.addNewClass = new Object();
    this.addNewClass['className'] = this.className;
      this.classes.push(this.addNewClass);
      }
  ngOnInit() {
    this.classService.getClassDetail().subscribe(
      data => this.classes = data,
    );
  }

}
