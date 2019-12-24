import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Store, Select } from '@ngxs/store';
import { ModalState, ShowAddLinkModal } from '../../shared/state';

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

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.warn('onSubmit()', this.addLinkForm.value);
  // }

  cancelAddApplication() {
    this.addLinkForm.reset();
    // this.addModal = false;
    this.store.dispatch(new ShowAddLinkModal(false));
  }

  addApplication() {
    // console.warn(this.addApplicationForm.value);
    console.log('addApplicationForm', this.addLinkForm.value);
    this.store.dispatch(new ShowAddLinkModal(false));
  }

}
