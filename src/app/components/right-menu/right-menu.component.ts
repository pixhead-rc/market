import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {

  sectionsMock = [
    {
      title: 'YOUR PAGES',
      options: [
        {
          profilePic: '',
          name: 'Cynthia Cox',
          lastOnline: 11,
        },
        {
          profilePic: '',
          name: 'Danny Quinn',
          lastOnline: 0,
        }
      ]
    },
    {
      title: 'FRIENDS',
      options: [
        {
          profilePic: '',
          name: 'Morgan',
          lastOnline: 3,
        },
        {
          profilePic: '',
          name: 'Stanley Burton',
          lastOnline: 0,
        },
        {
          profilePic: '',
          name: 'Allen Anderson',
          lastOnline: 0,
        },
        {
          profilePic: '',
          name: 'Lucas West',
          lastOnline: 13,
        },
        {
          profilePic: '',
          name: 'Danny Moore',
          lastOnline: 0,
        }
      ]
    },
    {
      title: 'GROUPS',
      options: [
        {
          profilePic: '',
          name: 'Web Designer',
          lastOnline: 25,
        },
        {
          profilePic: '',
          name: 'Topcoder Indonesia',
          lastOnline: 0,
        },
        {
          profilePic: '',
          name: 'Creativemarket YK',
          lastOnline: 2,
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  public nameToColor(value: string): string {
    return 'rgb(' + (value.charCodeAt(0) * 2).toString() + ',' + (value.charCodeAt(1) * 2) + ',' + (value.charCodeAt(2) * 2) + ')';
  }

}
