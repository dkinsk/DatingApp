import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})

export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, function(e) {
      if (e) {
        okCallback();
      } else {}
    });
  }

  success(message: string) {
    alertify.success(message, [2]);
  }

  error(message: string) {
    alertify.error(message, [2]);
  }

  warning(message: string) {
    alertify.warning(message, [2]);
  }

  message(message: string) {
    alertify.message(message, [2]);
  }
}
