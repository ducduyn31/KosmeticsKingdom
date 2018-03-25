import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {NoticeService} from "../notice.service";
import {Notice} from "../notice";

@Component({
  selector: 'app-notice-table',
  templateUrl: './notice-table.component.html',
  styleUrls: ['./notice-table.component.css']
})
export class NoticeTableComponent implements OnInit, OnDestroy{

  private noticesSub: Subscription;
  notices: Notice[] = [];

  constructor(private noticeService: NoticeService) { }

  async ngOnInit() {
    this.noticesSub = this.noticeService.getAllNotices().subscribe(
      (res: { _id: string, subject: string, author: string, date: string, view: number }[]) => {
        let counterId = 0;
        res.forEach(
          (notice) => {
            this.notices.push(new Notice(++counterId, notice._id, notice.subject, notice.author, new Date(notice.date), notice.view, '', false));
          }
        )
      }
    );
    //this.notices = await this.noticeService.getAllNotices();
  }

  ngOnDestroy(): void {
    this.noticesSub.unsubscribe();
  }
}
