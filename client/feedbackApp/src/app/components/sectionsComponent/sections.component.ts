import { Component, OnInit, Input } from '@angular/core';
import { SectionModule } from 'src/app/model/section/section.module';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  @Input() sections: SectionModule[];
  error: any;
  sectionsdata: SectionModule[];

  logsomemassage(): void {
    console.log(this.sectionsdata);
  }

  constructor(private sectionService: SectionService) {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.sectionService.getSection().subscribe(
      data => this.sectionsdata = data,
      err => this.error = err,
      () => console.log('Data Loaded'));
  }

}
