import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Link } from '../models';
import { artAdmin, dispatch, customerService} from '../data';

import { FetchLink, FetchLinkFailure, FetchLinkSuccess,
  DeleteLink, EditLink } from './link.actions';

export interface LinkStateModel {
  links: Link[];
}

const defaults: LinkStateModel = {
  links: [artAdmin, dispatch, customerService],
};

@State<LinkStateModel>({
  name: 'links',
  defaults
})
export class LinkState {

  constructor() { }

  @Selector()
  static getLinks(state: LinkStateModel) {
    return state.links;
  }

  @Action(FetchLink)
  fetchLinks({ dispatch }: StateContext<LinkStateModel> ) {
    // dispatch(new FetchLinkSuccess(defaults))
    // this.kpiService.fetchMyPages().subscribe(
    //   (pages: Page[]) => dispatch(new FetchMyPagesSuccess(pages)),
    //   error => dispatch(new FetchMyPagesFailure(error))
    // );
  }

  @Action(FetchLinkSuccess)
  fetchLinksSuccess({ patchState }: StateContext<LinkStateModel>, { payload }: FetchLinkSuccess ) {
    console.error('Fetch Links Success', payload);
    // patchState( { myPages: payload } );
  }

  @Action(FetchLinkFailure)
  fetchLinksFailure({ patchState }: StateContext<LinkStateModel>, { payload }: FetchLinkFailure ) {
    console.error('Fetch Links Error', payload);
    // patchState( { myPages: [] } );
  }


  @Action(DeleteLink)
  deleteLink({ patchState }: StateContext<LinkStateModel>, {payload}: DeleteLink) {
    console.log('Delete Link, payload');
  }

  @Action(EditLink)
  editLink({ patchState }: StateContext<LinkStateModel>, {payload}: EditLink) {
    console.log('Edit Link, payload');
  }

}
