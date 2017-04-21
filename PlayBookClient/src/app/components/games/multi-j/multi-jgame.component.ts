import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-multi-jgame',
  templateUrl: './multi-jgame.component.html',
  styles: []
})
export class MultiJGameComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      let topic = params['topic'];
      console.log(topic);
    });
  }

}
