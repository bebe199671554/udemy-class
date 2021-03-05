import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface SystemConfigModel {
  apiRootUrl: string;
}

@Injectable()
export class ConfigService {
  systemConfig: SystemConfigModel = { apiRootUrl: '' };
  allMenuNodes;
  constructor(private http: HttpClient) {}

  initData(environment, configFile) {
    return this.http
      .get(configFile)
      .pipe(
        tap((config) => {
          for (const key of Object.keys(config)) {
            this.systemConfig[key] = environment[key] ?? config[key];
          }
        })
      )
      .toPromise();
  }
}
