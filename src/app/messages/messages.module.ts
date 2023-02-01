import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { PageAddMessagesComponent } from './pages/page-add-messages/page-add-messages.component';
import { PageEditMessagesComponent } from './pages/page-edit-messages/page-edit-messages.component';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';
import { FormMessageComponent } from './components/form-message/form-message.component';
import { SharedModule } from '../shared/shared.module';
import { FormEditMessageComponent } from './components/form-edit-message/form-edit-message.component';


@NgModule({
  declarations: [
    PageAddMessagesComponent,
    PageEditMessagesComponent,
    PageListMessagesComponent,
    FormMessageComponent,
    FormEditMessageComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedModule
  ],exports: [
   PageListMessagesComponent
  ]
})
export class MessagesModule { }
