import {Component, OnDestroy, OnInit} from '@angular/core';
import {NoticeService} from "../notice.service";
import {Subscription} from "rxjs/Subscription";
import {Notice} from "../notice";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-notice-detail',
  templateUrl: './notice-detail.component.html',
  styleUrls: ['./notice-detail.component.css']
})
export class NoticeDetailComponent implements OnInit {

  //private noticeSub: Subscription;
  theNotice: Notice;

  showNoticeDetail = false;

  constructor(private noticeService: NoticeService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.queryParams.subscribe(
      (params: Params) => {
        /*this.noticeSub = this.noticeService.getNoticeById(+params['notice']).subscribe(
          (notice: Notice) => {
            if (notice) {
              this.showNoticeDetail = true;
              this.theNotice = notice;
            } else {
              this.showNoticeDetail = false;
            }
          }
        );*/
        this.theNotice = this.noticeService.getNoticeById(+params['notice']);
        this.showNoticeDetail = !!this.theNotice;
      }
    );
  }
}
