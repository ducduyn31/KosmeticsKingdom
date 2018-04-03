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

  ngOnInit() {
    this.noticesSub = this.noticeService.getAllNotices().subscribe(
      (notices: Notice[]) => {
        this.notices = notices;
      }
    );
    //this.notices = await this.noticeService.getAllNotices();
  }

  ngOnDestroy(): void {
    this.noticesSub.unsubscribe();
  }
}
