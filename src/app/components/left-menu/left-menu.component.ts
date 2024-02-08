import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { icEvent, icFeed, icFiles, icFriends, icMarket, icPhotos, icVideos } from 'src/assets/svgs';

@Component({
  selector: 'left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LeftMenuComponent implements OnInit {

  options = [
    {icon: icFeed, link: 'feed', title: 'Feed', notifs: 0},
    {icon: icFriends, link: 'feed', title: 'Friends', notifs: 0},
    {icon: icEvent, link: 'feed', title: 'Event', notifs: 3},
    {icon: icVideos, link: 'feed', title: 'Watch Videos', notifs: 0},
    {icon: icPhotos, link: 'feed', title: 'Photos', notifs: 0},
    {icon: icFiles, link: 'feed', title: 'Files', notifs: 0},
    {icon: icMarket, link: 'products', title: 'Marketplace', notifs: 0},
  ];

  constructor() { }

  ngOnInit() {
  }

}
