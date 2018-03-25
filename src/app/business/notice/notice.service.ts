import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Notice} from "./notice";
import "rxjs/observable/from";
import "rxjs/observable/of";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class NoticeService {

  private noticeServer = 'http://localhost:3000/notice';

  private notices: Notice[] = [
    /*new Notice(1, '', 'C&C International Site Renewal', 'Admin', new Date(), 1888, '\n' +
      '<img src="https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg" class="w-100">\n' +
      '<img src="https://www.w3schools.com/howto/img_fjords.jpg" class="w-100">\n' +
      '<img src="https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg" class="w-100">', true)*/
  ];

  constructor(private _http: HttpClient) {
  }

  getAllNotices(): Observable<any> {
    return this._http.get(`${this.noticeServer}`);
  }

  async getNoticeById(id: number) {
    let p: Notice = this.notices.find(
      (notice: Notice) => notice.id === id
    );

    if (!p.touched) {
      await this._http.get<string>(`${this.noticeServer}/getContent/${p._id}`).toPromise().then(
        (res: string) => {p.rawContent = res}
      )
    }

    return p;
  }

}
