import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { routes } from './app.routes';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions())
  ]
};
