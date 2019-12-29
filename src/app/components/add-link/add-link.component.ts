import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Store, Select } from '@ngxs/store';
import { ModalState, ShowAddLinkModal, CreateLink } from '../../shared/state';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent implements OnInit {

  @Select(ModalState.getIsAddLinkShowing)
  public isAddLinkShowing$: Observable<boolean>;

  addModal = false;

  addLinkForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    target: new FormControl(''),
    linkType: new FormControl(''),
    icon: new FormControl('')
  });

  constructor(private store: Store) { }

  ngOnInit() {
  }

  cancelAddApplication() {
    this.addLinkForm.reset();
    this.store.dispatch(new ShowAddLinkModal(false));
  }

  addApplication() {
    this.store.dispatch(new CreateLink({
      name: this.addLinkForm.value.name,
      description: this.addLinkForm.value.description,
      target: this.addLinkForm.value.target,
      linkType: this.addLinkForm.value.linkType,
      icon: this.addLinkForm.value.icon
    }));
    this.store.dispatch(new ShowAddLinkModal(false));
  }

}
