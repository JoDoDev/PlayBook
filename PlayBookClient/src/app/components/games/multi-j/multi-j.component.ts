import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {WebsocketService} from '../../../services/websocket.service';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MdSnackBar, MdSnackBarConfig} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-multi-j',
  templateUrl: './multi-j.component.html',
  styles: [`
    .root-card {
      width: 80%;
      margin: 30px auto;
    }

    @media screen and (max-width: 600px) {
      .root-card {
        width: 100%;
      }
    }
  `]
})
export class MultiJComponent implements OnInit , OnDestroy {
  private topics = {};
  private onGetTopics;

  constructor(
    @Inject(WebsocketService) private websocketService,
    @Inject(UserService) private userService,
    private router: Router,
    private snackBar: MdSnackBar,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onGetTopics = (data) => {
      this.topics = data.data.topics;
    };
    this.websocketService.messageEmitter.on("GET_TOPICS", this.onGetTopics);
    this.websocketService.messageEmitter.on("GET_TOPICS_ERROR", this.onError);
    this.websocketService.send({type: "GET_TOPICS", data: {}})
  }
  private onError(data) {
    let config = new MdSnackBarConfig();
    config.duration = 500000;
    config.extraClasses = ["errorSnackBar"];
    this.snackBar.open(data.cause, "", config);
  }

  startGame(value: string) {
    console.log(value);
    for( let topic in this.topics) {
      if (this.topics[topic].name === value) {
        this.router.navigate(['./', topic], {relativeTo: this.activatedRoute});
        return;
      }
    }
  }


  ngOnDestroy() {
    this.websocketService.messageEmitter.removeListener("GET_TOPICS", this.onGetTopics);
    this.websocketService.messageEmitter.removeListener("GET_TOPICS_ERROR", this.onError);
  }

}
