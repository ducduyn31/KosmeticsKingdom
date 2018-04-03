import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Process} from "./process/process";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit, AfterViewInit {

  businessProcesses: Process[] = [
    new Process('Customer request', '고객의뢰', '/assets/vectors/customer.png'),
    new Process('Product consultant', '상담', '/assets/vectors/consult.png'),
    new Process('Development on requested items', '의뢰품목설계 및 개발', '/assets/vectors/request.png'),
    new Process('Sample Confirmation', '견본품 확정', '/assets/vectors/confirm.png'),
    new Process('Contract', '계약', '/assets/vectors/contract.png'),
    new Process('Receiving purchase order', '발주 접수', '/assets/vectors/order.png'),
    new Process('Process mass production', '대량 생산 프로세스', '/assets/vectors/process.png'),
    new Process('Evaluation of inspection', '생산 검수평가', '/assets/vectors/evaluation.png'),
    new Process('Release Products', '남품', '/assets/vectors/release.png')
  ];

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this._route.fragment.subscribe(
      (fragment: string) => {
        window.location.hash = fragment;
      }
    )
  }
}
