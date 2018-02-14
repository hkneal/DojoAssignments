import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-big-island',
  templateUrl: './big-island.component.html',
  styleUrls: ['./big-island.component.css']
})
export class BigIslandComponent implements OnInit {

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
