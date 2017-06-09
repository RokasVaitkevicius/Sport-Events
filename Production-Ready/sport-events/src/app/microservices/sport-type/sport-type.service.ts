import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {ISportType} from './sport-type.model';
import {Http, Response} from '@angular/http';

@Injectable()
export class SportTypeService {
  private baseUrl = 'http://localhost:3000/events';

  constructor(private http: Http) {
  }

  getSportTypes(): Observable<ISportType[]> {
    return this.http.get(this.baseUrl + '/api/sportType')
      .map((response: Response) => {
        return <ISportType[]>response.json();
      }).catch(this.handleError);
  }

  getSportTypeById(id: number): Observable<ISportType> {
    return this.http.get(this.baseUrl + '/api/sportType/' + id)
      .map((response: Response) => {
        return <ISportType>response.json();
      }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
