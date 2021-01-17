import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from './player/player-card/player-card.component';
import { RouterModule } from '@angular/router';
import { PortugalMaleComponent } from './portugal-male/portugal-male.component';
import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { TabsModule } from 'ngx-bootstrap';
import { DetailedPlayerCardComponent } from './player/detailed-player-card/detailed-player-card.component';
import { CoachCardComponent } from './coach/coach-card/coach-card.component';

@NgModule({
  declarations: [
    PlayerCardComponent, 
    DetailedPlayerCardComponent,
    CoachCardComponent,
    PortugalMaleComponent
  ],
  imports: [
    CommonModule,
    PanelsModule,
    TabsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'portugal-male' },
      {
        path: 'portugal-male', component: PortugalMaleComponent,
        data: { breadcrumbs: ['Portugal'] }
      }
    ])
  ]
})
export class FootballTeamsModule { }
