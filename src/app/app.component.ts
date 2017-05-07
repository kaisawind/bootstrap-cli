import { AfterContentInit, Component, Inject} from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {

  private route: ActivatedRoute;
  private router: Router;
  private document: any;
  private _prev = '';

  public constructor(route: ActivatedRoute, router: Router, @Inject(DOCUMENT) document: any) {
    this.route = route;
    this.router = router;
    this.document = document;
  }

  public ngAfterContentInit() {
    this.router.events.subscribe((event: any) => setTimeout(() => this.justDoIt(event), 50));
  }

  justDoIt(event: any) {

    const _cur = this.getUrl(this.router);

    if (typeof PR !== 'undefined' && this._prev !== _cur) {
      this._prev = _cur;
      const pres = document.getElementsByTagName('pre');
      for (let i = 0; i < pres.length; i++) {
        if (pres[i].classList.contains('prettyprint') === false) {
          // pres[i].className += ' ' + 'prettyprint' + ' ' +  'linenums';
          pres[i].className += ' ' + 'prettyprint';
        }
      }
      // google code-prettify
      PR.prettyPrint();
    }
  }

  getUrl(router: Router) {
    return router.routerState.snapshot.url.slice(0, router.routerState.snapshot.url.indexOf('#'));
  }

}
