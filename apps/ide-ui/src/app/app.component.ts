import { Component } from '@angular/core';

@Component({
  selector: 'ide-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ide-ui';

  mainTab(): boolean {
    return window.location.pathname.indexOf('/newTabDev')==-1;
  }

}
