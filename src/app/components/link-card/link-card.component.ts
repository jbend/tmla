import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/app/shared/models';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit {

  @Input()
  link: Link;

  constructor() { }

  ngOnInit() {
  }

  edit() {
    console.log('Edit Link');
  }

  delete() {
    console.log('Delete Link');
  }

}
