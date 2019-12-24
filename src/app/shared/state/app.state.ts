import { State, Action, StateContext, Selector } from '@ngxs/store';

export interface AppStateModel {
  useLightTheme: boolean;
}

const defaults: AppStateModel = {
  useLightTheme: true
};

@State<AppStateModel>({
  name: 'app',
  defaults
})
export class AppState {

  constructor() { }

  @Selector()
  static getUseLightTheme(state: AppStateModel) {
    return state.useLightTheme;
  }

}

