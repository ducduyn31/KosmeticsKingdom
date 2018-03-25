import { Component, OnInit } from '@angular/core';
import {NoticeService} from "./notice.service";

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
  providers: [NoticeService]
})
export class NoticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
