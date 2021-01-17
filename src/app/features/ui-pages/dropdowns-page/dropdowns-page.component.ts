import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'smart-dropdowns-page',
  templateUrl: './dropdowns-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownsPageComponent {

  user = {
    name: 'Diana Rodrigues',
    email: 'diana.rodrigues@newhotel.com',
    avatar: 'diana-avatar.jpg',
  };
}
