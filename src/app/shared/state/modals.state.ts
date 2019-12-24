import { State, Action, StateContext, Selector } from '@ngxs/store';

import { ShowAddLinkModal } from './modals.actions';

export interface ModalsStateModel {
  addLinkIsShowing: boolean,
}

const defaults: ModalsStateModel = {
  addLinkIsShowing: false,
};

@State<ModalsStateModel>({
  name: 'modals',
  defaults
})
export class ModalState {

  constructor() { }

  @Selector()
  static getIsAddLinkShowing(state: ModalsStateModel) {
    return state.addLinkIsShowing;
  }

  @Action(ShowAddLinkModal)
  showAddLinkModal({ patchState }: StateContext<ModalsStateModel>, { payload }: ShowAddLinkModal ) {
    patchState( { addLinkIsShowing: payload } );
  }

}
