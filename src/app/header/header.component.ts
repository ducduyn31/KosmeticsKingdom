import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Background} from "./objects/background";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('navchanged') navigationChangedEvent = new EventEmitter<Background>();

  constructor() { }

  ngOnInit() {
  }

  onNavClicked(tab: number) {
    this.navigationChangedEvent.emit(new Background(`/assets/backgrounds/background${tab}.png`, 2));
  }

}
