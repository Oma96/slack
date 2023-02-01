import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { PageListChannelsComponent } from './pages/page-list-channels/page-list-channels.component';
import { PageEditChannelComponent } from './pages/page-edit-channel/page-edit-channel.component';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';


@NgModule({
  declarations: [
    PageListChannelsComponent,
    PageEditChannelComponent,
    PageAddChannelComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
 ], exports: [
  PageListChannelsComponent,
 ]
})
export class ChannelsModule { }
