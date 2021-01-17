import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'smart-navbars-page',
  templateUrl: './navbars-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarsPageComponent {
  user = {
    app: 'SmartAdmin',
    name: 'Diana Rodrigues',
    email: 'diana.rodrigues@newhotel.com',
    avatar: 'diana-avatar.jpg',
  };
}
