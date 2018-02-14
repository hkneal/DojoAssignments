import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main-island',
  templateUrl: './main-island.component.html',
  styleUrls: ['./main-island.component.css']
})
export class MainIslandComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
}

}
