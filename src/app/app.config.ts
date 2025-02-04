import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// import { DesignutilityService } from './designutility.service';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
    // DesignutilityService,
     provideHttpClient(), 
     AuthService
    ]
};
