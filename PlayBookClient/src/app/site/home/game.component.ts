import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
    templateUrl: './game.component.html',
  styles: [`
    .game-card {
      width: 350px;
    }

    @media screen and (max-width: 600px) {
      .game-card {
        width: 100%;
      }
    }
  `]
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
