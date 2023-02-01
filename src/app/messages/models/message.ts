import { MessageI } from "../interfaces/message-i";

export class Message implements MessageI {
  text!: string;
  owner!:string;
  channelId!: number;
  createdDate!: string;
  id!:number;
  constructor(obj?: Partial<Message>){
    if(obj){
      Object.assign(this, obj)
    }
  }
}
