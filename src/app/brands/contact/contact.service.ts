import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";


const contactServiceURL = 'http://localhost:3000/contact';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {
  }

  submitFormToServer(fd: FormData): Observable<any> {
    return this.http.post<any>(contactServiceURL, fd);
  }

}
