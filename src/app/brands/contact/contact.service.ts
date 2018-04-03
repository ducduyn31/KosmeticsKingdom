import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {CUSTOMER_SUPPORT_SERVER} from "../../config";


const contactServiceURL = CUSTOMER_SUPPORT_SERVER;

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {
  }

  submitFormToServer(fd: FormData): Observable<any> {
    return this.http.post<any>(contactServiceURL, fd);
  }

}
