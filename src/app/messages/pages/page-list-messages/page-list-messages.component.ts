import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss']
})
export class PageListMessagesComponent implements OnInit {
public messages! : Message[];

public variable!: string;
public message!: Message;
public messageEdit!:Message;
public id!: number;
public idSelected!:any;


constructor(private messageService: MessagesService, private activatedRoute: ActivatedRoute, private router: Router){
   this.message= new Message();



}

ngOnInit(){

  this.activatedRoute.params.subscribe((params) => {
        this.id = params['id'];

        this.messageService.collection$.subscribe((data)=>{
      this.messages = data.filter((obj)=>{
        return obj.channelId===this.id
      });

      })

  });
}
public action(message:Message):void{
  message.channelId= this.id;
  this.messageService.add(message).subscribe();

}


public delete(id:number): void{
  this.messageService.delete(id).subscribe();

 }

public action2(message:Message):void{
this.messageService.update(message).subscribe();
this.idSelected=null;
}

 public isEditable(id:number): number{
  this.idSelected=id;
  return id;
 }

}
