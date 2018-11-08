import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import IPost from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private _http: HttpClient
  ) { }

  public fetchData(): Observable<IPost[]> {
    return interval(10000).pipe(
      switchMap(() => this._http.get<IPost[]>('https://hn.algolia.com/api/v1/search_by_date?tags=story')),
      map((data: any) => data.hits)
    );
  }

}
