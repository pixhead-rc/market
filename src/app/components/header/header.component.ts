import { Component, OnInit } from '@angular/core';
import { icAddFriend, icChats, icDropdown, icNotifs } from 'src/assets/svgs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  icAddFriend = icAddFriend;
  icChats = icChats;
  icNotifs = icNotifs;
  icDropdown = icDropdown;

  constructor() { }

  ngOnInit() {
  }

}
