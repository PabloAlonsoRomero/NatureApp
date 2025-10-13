import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';

import { provideNzIcons } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
const icons = Object.values(AllIcons);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideNzI18n(en_US),
    provideNzIcons(icons)
  ]
};
