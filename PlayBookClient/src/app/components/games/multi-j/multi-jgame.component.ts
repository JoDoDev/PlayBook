import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';
import {UserService} from '../../../services/user.service';
import {WebsocketService} from '../../../services/websocket.service';

@Component({
  selector: 'app-multi-jgame',
  templateUrl: './multi-jgame.component.html',
  styles: []
})
export class MultiJGameComponent implements OnInit, OnDestroy {
  private topicId: number = -1;
  private onJoin;
  private onFinish;
  private onAnswerQuestion;

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



    this.activatedRoute.params.subscribe((params: Params) => {
      let topic = params['topic'];
      if (typeof topic === 'undefined') {
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit() {
    this.websocketService.send({
      type: "MULTIJ_JOIN",
      data: {
        topic: this.topicId
      }
    })
  }

  onError() {

  }


  ngOnDestroy(): void {

  }
}
