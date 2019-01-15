import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  moreData: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-teachers-classwise-detailed-statistics',
  templateUrl: './teachers-classwise-detailed-statistics.component.html',
  styleUrls: ['./teachers-classwise-detailed-statistics.component.css'],
})
export class TeachersClasswiseDetailedStatisticsComponent {

  moreData: string;


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.moreData = 'data';
    const dialogRef = this.dialog.open(TeachersClasswiseDetailedStatisticsMoreComponent, {
      width: '3000px',
      data: {moreData: this.moreData}
    });
  }

}

@Component({
  selector: 'app-teachers-classwise-detailed-statistics-more',
  templateUrl: './teachers-classwise-detailed-statistics-more.component.html',

})
export class TeachersClasswiseDetailedStatisticsMoreComponent {
  constructor(
    public dialogRef: MatDialogRef<TeachersClasswiseDetailedStatisticsMoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
