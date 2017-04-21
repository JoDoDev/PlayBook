import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [`
    .icon {
      padding: 0 14px;
    }

    .spacer {
      flex: 1 1 auto;
    }
    .mat-elevation-z6 {
      box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
    }
  `]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
