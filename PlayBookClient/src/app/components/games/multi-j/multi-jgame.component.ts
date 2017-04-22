import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';
import {UserService} from '../../../services/user.service';
import {WebsocketService} from '../../../services/websocket.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-multi-jgame',
  templateUrl: './multi-jgame.component.html',
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
export class MultiJGameComponent implements OnInit, OnDestroy {
  private topicId: number = -1;
  private onJoin;
  private onFinish;
  private onAnswerQuestion;
  private onSessionLogin;


  constructor(
    @Inject(WebsocketService) private websocketService,
    @Inject(UserService) private userService,
    private router: Router,
    private snackBar: MdSnackBar,
    private activatedRoute: ActivatedRoute
  ) {
    this.onJoin = (data) => {};
    this.onFinish = (data) => {};
    this.onAnswerQuestion = (data) => {};
    this.onSessionLogin =  () => {
      this.websocketService.send({
        type: "MULTIJ_JOIN",
        data: {
          topic: this.topicId
        }
      })
    };

    this.websocketService.messageEmitter.once('SESSION_LOGIN', this.onSessionLogin);

    this.activatedRoute.params.subscribe((params: Params) => {
      let topic = params['topic'];
      if (typeof topic === 'undefined') {
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit() {
    this.websocketService.send({
      type: "SESSION_LOGIN",
      data: {
        topic: this.userService.sessionKey
      }
    })
  }

  onError() {

  }


  ngOnDestroy(): void {

  }
}
