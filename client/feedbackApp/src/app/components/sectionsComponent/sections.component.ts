import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { SectionModule } from 'src/app/model/section/section.module';
import { SectionService } from 'src/app/services/section.service';
import { delay } from 'q';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  @Input() sections: SectionModule[];
  error: any;
  sectionsdata: SectionModule[];
  loading: boolean;

  logsomemassage(): void {
    console.log(this.sectionsdata);
  }



  constructor(private sectionService: SectionService) {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  async ngOnInit() {
      this.loading = true;
      this.sectionService.getSection().subscribe(
      data => this.sectionsdata = data,
      err => this.error = err,
      async () => {await delay(1000);
        this.loading = false;
      } );
  }

}
