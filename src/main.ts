import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule, AppComponent } from './app/';
import { routing } from "./app/app.routing";
import * as angulafire from 'angularfire2'


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [routing, angulafire.FIREBASE_PROVIDERS,
  angulafire.firebaseAuthConfig({
  provider: angulafire.AuthProviders.Password,
  method: angulafire.AuthMethods.Redirect
})]);
