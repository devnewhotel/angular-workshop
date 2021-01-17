import { Component } from '@angular/core';

@Component({
  selector: 'smart-dropdown-user',
  templateUrl: './dropdown-user.component.html',
})
export class DropdownUserComponent {

  user = {
    app: 'SmartAdmin',
    name: 'Diana Rodrigues',
    email: 'diana.rodrigues@newhotel.com',
    avatar: 'diana-avatar.jpg',
  };

}
