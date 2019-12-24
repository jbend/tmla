import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';

import { Link } from '../../shared/models';
import { ModalState, ShowAddLinkModal,
  LinkState } from '../../shared/state';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  @Select(LinkState.getLinks)
  public links$: Observable<Link[]>;

  // @Select(ModalState.getIsAddLinkShowing)
  // public addLinkShowing$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  showAddLink() {
    this.store.dispatch(new ShowAddLinkModal(true));
  }

}
