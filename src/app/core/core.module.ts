import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { UiModule } from '../ui/ui.module';
import { ChannelsModule } from "../channels/channels.module";



@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        NavComponent
    ],
    exports: [
        TemplatesModule,
        UiModule,
        HeaderComponent,
        NavComponent,
        FooterComponent
    ],
    imports: [
        CommonModule, RouterModule,
        ChannelsModule
    ]
})
export class CoreModule { }
