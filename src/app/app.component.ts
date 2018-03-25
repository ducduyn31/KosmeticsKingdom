import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ProductService} from "./brands/product.service";
import {BackgroundService} from "./background.service";
import {Router, RouterEvent} from "@angular/router";
import "rxjs/add/operator/filter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, BackgroundService]
})
export class AppComponent implements OnInit {
  private currentPath: string;
  @ViewChild('main') main: ElementRef;

  constructor(private router: Router, private renderer: Renderer2, private backgroundService: BackgroundService) {
  }

  ngOnInit(): void {
    this.router.events.filter(e => e instanceof RouterEvent).subscribe(
      event => {
        let p: string = event['url'];
        p = '/' + (p.split('/')[1] ? p.split('/')[1] : p.split('/')[0]);
        let theParams: number = p.indexOf('?');

        p = theParams > 0 ? p.substr(0, theParams) : p;

        if (p !== this.currentPath) {
          this.currentPath = p;
          this.renderer.setStyle(this.main.nativeElement, 'background-image', `url(${this.backgroundService.getBackgroundPath(this.currentPath)})`);
          this.renderer.setStyle(this.main.nativeElement, 'background-repeat', 'no-repeat');
          this.renderer.setStyle(this.main.nativeElement, 'background-position', '100% 100%');
        }
      }
    );
  }
}
