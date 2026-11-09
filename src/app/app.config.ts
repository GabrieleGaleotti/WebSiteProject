import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { routes } from './app.routes';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { impostaDirezione } from './core/direzione-transizione';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions({ onViewTransitionCreated: impostaDirezione })
    )
  ]
};