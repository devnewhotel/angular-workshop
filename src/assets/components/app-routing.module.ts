// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { MainComponent } from './shared/layout/main/main.component';
// import { LayoutModule } from './shared/layout/layout.module';

// const routes: Routes = [

//   {
//     path: '',
//     component: MainComponent,
//     children: [
//       { path: '', redirectTo: 'welcome', pathMatch: 'full' },
//       { path: 'welcome', loadChildren: () => import('./components/welcome/welcome.module').then(m => m.WelcomeModule) },
//       { path: 'speakers', loadChildren: () => import('./components/speakers/speakers.module').then(m => m.SpeakersModule) },
//       { path: 'teams', loadChildren: () => import('./components/football-teams/football-teams.module').then(m => m.FootballTeamsModule) },
//     ]
//   },
// ];

// @NgModule({
//   imports: [LayoutModule, RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
