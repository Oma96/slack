import { ChannelI } from "../interfaces/channel-i"

export class Channel implements ChannelI{
  channelName!: string;
  channelUser!:string;
  id!: number;
  createdDate!: string;
  constructor(obj?: Partial<Channel>){
    if(obj){
      Object.assign(this, obj)
    }
  }
}
