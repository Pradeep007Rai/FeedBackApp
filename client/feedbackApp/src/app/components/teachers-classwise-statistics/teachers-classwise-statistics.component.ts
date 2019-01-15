import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-teachers-classwise-statistics',
  templateUrl: './teachers-classwise-statistics.component.html',
  styleUrls: ['./teachers-classwise-statistics.component.css']
})
export class TeachersClasswiseStatisticsComponent implements OnInit {

  pieChartData: any;
  @Input() graphData: any;
  constructor() { }

  ngOnInit() {
    this.pieChartData =  {
      chartType: 'PieChart',
      dataTable :  [
        ['Task', 'Hours per Day'],
        ['Punctuality & Regularity',    this.graphData.points[0]],
        ['Command over the subject',      this.graphData.points[1]],
        ['Fluency of medium',  this.graphData.points[2]],
        ['Understating & effective ness of teaching', this.graphData.points[3]],
        ['Completion of syllabus on time',    this.graphData.points[4]],
        ['Teachers knowledge about application of the subject', this.graphData.points[5]],
        ['Willingness to guide students/Solve Problem',  this.graphData.points[6]],
        ['Use of innovative teaching methods', this.graphData.points[7]],
        ['Overall impression ,despise drawback, if any',   this.graphData.points[8]],
        ['Readiness of extra lectures ',   this.graphData.points[9]]
      ],
      options : {
        'chartArea': {  left: 40,  width: '90%', height: '75%'},
        'tooltip'	:
        {textStyle: {color: 'blue'}, showColorCode: true},
        'title':  this.graphData['teacherName'] + ' - ' + this.graphData['className'] + ' - ' + this.graphData['subjectName'] ,
         'is3D': 'true',
        slices: {  3: {offset: 0.2},
        2: {offset: 0.2},
        4: {offset: 0.2},
        5: {offset: 0.2},
},
        'width': '1050',
        'height': '600',
        'titleTextStyle' : {
          color: 'black',  fontSize: 30
          },
        'legend': {
          'position'	: 'right',
          'textStyle' :
          {
            color: 'black',  fontSize: 20
          }
      }
      }
    };
  }
}
