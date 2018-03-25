import {Injectable} from '@angular/core';
import {Background} from "./background";
import {Subject} from "rxjs/Subject";

@Injectable()
export class BackgroundService {

  backgroundChanged: Subject<Background> = new Subject<Background>();

  private backgrounds: Background[] = [
    new Background('/assets/backgrounds/background0.png', '/'),
    new Background('/assets/backgrounds/background1.png', '/brands'),
    new Background('/assets/backgrounds/background2.png', '/business')
  ];

  constructor() {
  }

  getBackgroundPath(path: string): string {
    let value = this.backgrounds.filter((bg: Background) => bg.path === path);

    return value.length ? value[0].backgroundPath : this.backgrounds[0].backgroundPath;
  }

}
