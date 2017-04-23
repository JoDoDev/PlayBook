import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MdRadioChange, MdSnackBar} from '@angular/material';
import {UserService} from '../../../services/user.service';
import {WebsocketService} from '../../../services/websocket.service';
import {FormControl} from '@angular/forms';
import {KeyobjectPipe} from '../../../pipes/keyobject.pipe';
import randomizeArray from '../../../util/randomizeArray';

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

    .spacer {
      flex: 1 1 auto;
    }

  `]
})
export class MultiJGameComponent implements OnInit, OnDestroy {
  private topicId: number = -1;
  private questions: any[];
  private activeQuestion;
  private onJoin;
  private onFinish;
  private onAnswerQuestion;
  private onSessionLogin;



  constructor(
    @Inject(WebsocketService) private websocketService,
    @Inject(UserService) private userService,
    private router: Router,
    private snackBar: MdSnackBar,
    private activatedRoute: ActivatedRoute,
    private keyobjectPipe: KeyobjectPipe
  ) {
    this.onJoin = (data) => {
      console.log("rec Data", data);
      this.questions = randomizeArray(this.keyobjectPipe.transform(data.data.questions, []));
      this.activeQuestion = this.questions[0]
      console.log(this.activeQuestion);
    };
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
    this.websocketService.messageEmitter.on('MULTIJ_JOIN', this.onJoin);
    this.websocketService.messageEmitter.on('MULTIJ_JOIN_ERROR', this.onError);
    this.websocketService.messageEmitter.on('SESSION_LOGIN_ERROR', this.onError);

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
        sessionkey: this.userService.sessionKey
      }
    })
  }

  onError() {

  }


  onSelect(e: MdRadioChange ) {
    console.log(e.value);
  }



  ngOnDestroy(): void {

  }
}
