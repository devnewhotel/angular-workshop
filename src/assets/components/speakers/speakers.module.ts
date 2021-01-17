import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerCardComponent } from './speaker-card/speaker-card.component';
import { RouterModule } from '@angular/router';
import { SpeakersListComponent } from './speakers-list/speakers-list.component';
import { CollapsedCardComponent } from './collapsed-card/collapsed-card.component';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';

@NgModule({
  declarations: [SpeakerCardComponent, SpeakersListComponent, CollapsedCardComponent, DynamicListComponent, DynamicCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'card' },
      {
        path: 'card', component: SpeakerCardComponent,
        data: { breadcrumbs: ['Card'] }
      },
      {
        path: 'collapsed-card', component: CollapsedCardComponent,
        data: { breadcrumbs: ['Collapsed Card'] }
      },
      {
        path: 'list', component: SpeakersListComponent,
        data: { breadcrumbs: ['Static List'] }
      },
      {
        path: 'dynamic-list', component: DynamicListComponent,
        data: { breadcrumbs: ['Dynamic List'] }
      }
    ])
  ]
})
export class SpeakersModule { }
