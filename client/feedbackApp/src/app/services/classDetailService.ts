import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ClassModel } from '../model/class/class.model';


@Injectable({
  providedIn: 'root'
})
export class ClassService {
  classes: ClassModel[];

getClassDetail(): Observable<ClassModel[]> {
  return this.http.get<ClassModel[]>('api/mockServices/classnames.json');
}


  constructor(private http: HttpClient) {
  }
}
