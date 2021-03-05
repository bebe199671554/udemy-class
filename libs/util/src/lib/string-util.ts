import { HttpParams } from '@angular/common/http';

export function parsingParams(options) {
  return Object.keys(options)
    .filter((key) => {
      return options[key] !== undefined && options[key] !== null;
    })
    .reduce((acc, key) => {
      let value = options[key];
      switch (typeof value) {
        case 'boolean':
          value = value ? 'true' : 'false';
          break;
        case 'number':
          value = value.toString();
          break;
      }
      return acc.set(key, value);
    }, new HttpParams());
}
