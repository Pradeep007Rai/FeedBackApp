import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { SectionModule } from '../model/section/section.module';


@Injectable({
  providedIn: 'root'
})
export class SectionService {
  sections: SectionModule[];

getSection(): Observable<SectionModule[]> {
  return this.http.get<SectionModule[]>('api/mockServices/section.json');
}


  constructor(private http: HttpClient) {
  }
}
