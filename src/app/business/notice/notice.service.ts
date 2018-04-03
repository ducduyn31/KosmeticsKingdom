import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Notice} from "./notice";
import "rxjs/observable/from";
import "rxjs/observable/of";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs/Subject";
import {NOTICE_SERVER} from "../../config";

@Injectable()
export class NoticeService {

  private noticeServer = NOTICE_SERVER;

  private notices: Notice[] = [
    /*new Notice(1, '', 'C&C International Site Renewal', 'Admin', new Date(), 1888, '\n' +
      '<img src="https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg" class="w-100">\n' +
      '<img src="https://www.w3schools.com/howto/img_fjords.jpg" class="w-100">\n' +
      '<img src="https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg" class="w-100">', true)*/
  ];

  noticesSubject: Subject<Notice[]> = new Subject<Notice[]>();

  constructor(private _http: HttpClient) {
  }

  getAllNotices(): Observable<Notice[]> {
    this._http.get(`${this.noticeServer}`).subscribe(
      (res: { _id: string, subject: string, author: string, date: string, view: number }[]) => {
        let counterId = 0;
        res.forEach(
          (notice) => {
            this.notices.push(new Notice(++counterId, notice._id, notice.subject, notice.author, new Date(notice.date), notice.view, '', false));
            this.noticesSubject.next(this.notices);
          }
        )
      }
    );

    return this.noticesSubject.asObservable();
  }

   getNoticeById(id: number): Notice {
    let p: Notice = this.notices.find(
      (notice: Notice) => notice.id === id
    );

    if (p && !p.touched) {
      this._http.get<string>(`${this.noticeServer}/getContent/${p._id}`).subscribe(content => p.rawContent = content);
    }

    return p;
  }

}
