import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent } from './containers/shell/shell.component';
import { AddLinkComponent } from './components/add-link/add-link.component';
import { LinksComponent } from './components/links/links.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

import { RoutingModule } from './app.routing';

import { AppState, LinkState, ModalState } from './shared/state';

import { environment } from '../environments/environment';
import { LinkCardComponent } from './components/link-card/link-card.component';


export const states = [
  AppState,
  LinkState,
  ModalState
];

export const storageKeys = [
  'app',
  'link',
  'modal'
];

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    AddLinkComponent,
    LinksComponent,
    PageNotFoundComponent,
    LinkCardComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RoutingModule,
    NgxsModule.forRoot(states, { developmentMode: !environment.production }),
//    NgxsResetPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({ key: storageKeys}),
    NgxsReduxDevtoolsPluginModule.forRoot({ name: 'TMLA'}),
    NgxsLoggerPluginModule.forRoot({ collapsed: false }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
