import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

//import Peer = require('peerjs');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('myvideo') myVideo: any;

  peer;
  anotherid;
  mypeerid;
  friendsList: any = [];
  selectedFriend;


  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
    // this.authenticationService.isAuthenticated().subscribe(data => {},
    //   error => {
    //     this.router.navigate(['/login']);
    //   }
    // );
    let user;
    this.authenticationService.getLoggedUser().subscribe(data => {
      user = data;
      const video = this.myVideo.nativeElement;
      this.peer = new Peer(user.id, {key: '6qn8ssv10dkdfgvi'});
      // this.peer = new Peer('someid', {host: 'localhost', port: 9000, path: '/'});
      setTimeout(() => {
        this.mypeerid = this.peer.id;
      }, 3000);

      this.peer.on('connection', function (conn) {
        conn.on('data', function (data) {
          console.log(data);
        });
      });
      const n = <any>navigator;

      n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia );

      this.peer.on('call', function (call) {

        n.getUserMedia({video: true, audio: true}, function (stream) {
          call.answer(stream);
          call.on('stream', function (remotestream) {
            video.src = URL.createObjectURL(remotestream);
            video.play();
          });
        }, function (err) {
          console.log('Failed to get stream', err);
        });
      });
    });


  }

  connect(userId) {
    console.log(userId);
    const conn = this.peer.connect(userId);
    this.anotherid = userId;
    conn.on('open', function () {
      conn.send('Message from that id');
    });

    setTimeout(() => {
      this.videoconnect();
    }, 2000);

  }

  videoconnect() {
    const video = this.myVideo.nativeElement;
    const localvar = this.peer;
    const fname = this.anotherid;

    const n = <any>navigator;

    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia );

    n.getUserMedia({video: true, audio: true}, function (stream) {
      const call = localvar.call(fname, stream);
      call.on('stream', function (remotestream) {
        video.src = URL.createObjectURL(remotestream);
        video.play();
      });
    }, function (err) {
      console.log('Failed to get stream', err);
    });
  }

  getFriends(event) {
    this.friendsList = event;
    console.log(this.friendsList);
  }

  select(user) {
    this.selectedFriend = user;
  }
}
