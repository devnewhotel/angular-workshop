export const NavigationItems = [
  {
    title: 'Welcome',
    tags: 'application welcome',
    icon: 'fas fa-home',
    items: [
      {
        title: 'Angular Workshop',
        tags: 'application welcome workshop',
        routerLink: '/welcome/workshop'
      },
      {
        title: 'Angular Architecture',
        tags: 'application welcome angular architecture',
        routerLink: '/welcome/angular-architecture'
      }
    ]
  },
  {
    title: 'Speakers',
    tags: 'application speakers',
    icon: 'fas fa-user',
    items: [
      {
        title: 'Initial Card',
        tags: 'application speakers card',
        routerLink: '/speakers/card'
      },
      {
        title: 'Static List',
        tags: 'application speakers list',
        routerLink: '/speakers/list'
      },
      {
        title: 'Collapsed Card',
        tags: 'application speakers collapsed card',
        routerLink: '/speakers/collapsed-card'
      },
      {
        title: 'Dynamic List',
        tags: 'application speakers dynamic list',
        routerLink: '/speakers/dynamic-list'
      }
    ]
  },
  {
    title: 'National Football Teams',
    tags: 'application teams',
    icon: 'fal fa-futbol',
    items: [
      {
        title: 'Portugal',
        tags: 'application teams portugal male',
        routerLink: '/teams/portugal-male'
      }
    ]
  }
];
