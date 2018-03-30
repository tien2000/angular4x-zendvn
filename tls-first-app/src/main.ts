import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './project-one/app.module';
import { AppModuleTwo } from './project-two/app.module';
import { AppModuleThree } from './project-three/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModuleThree)
  .catch(err => console.log(err));
