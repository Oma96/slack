import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListMessagesComponent } from '../messages/pages/page-list-messages/page-list-messages.component';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';
import { PageEditChannelComponent } from './pages/page-edit-channel/page-edit-channel.component';
import { PageListChannelsComponent } from './pages/page-list-channels/page-list-channels.component';

const routes: Routes = [
  {path:'', component: PageListChannelsComponent },
  {path:'message/:id', component: PageListMessagesComponent},
  {path:'add', component: PageAddChannelComponent},
  {path:'edit', component: PageEditChannelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsRoutingModule { }
