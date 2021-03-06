import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { SheetbaseModule } from 'sheetbase-angular';

import { MyApp } from './app.component';

import { NavProvider } from '../providers/nav/nav';
import { MetaProvider } from '../providers/meta/meta';

import { SHEETBASE_CONFIG } from '../configs/sheetbase.config';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      locationStrategy: 'path',
      backButtonText: '',
      mode: 'md',
      pageTransition: 'wp-transition'
    }),

    SheetbaseModule.forRoot(SHEETBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    {provide: APP_BASE_HREF, useValue: '/'},

    NavProvider,
    MetaProvider
  ]
})
export class AppModule {}
