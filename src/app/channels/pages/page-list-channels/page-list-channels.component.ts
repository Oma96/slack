import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel } from '../../model/channel';
import { ChannelsService } from '../../services/channels.service';

@Component({
  selector: 'app-page-list-channels',
  templateUrl: './page-list-channels.component.html',
  styleUrls: ['./page-list-channels.component.scss']
})
export class PageListChannelsComponent {
public channels!: Channel [];


constructor(private channelService: ChannelsService){

this.channelService.collection$.subscribe((data)=>{
  this.channels= data;
})
}
}
