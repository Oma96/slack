import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Message } from '../../models/message';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit{
  @Input() public init! : Message;
  @Output() public submitted: EventEmitter<Message>;
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder){

  this.submitted= new EventEmitter();
  }

  public onSubmit(): void{
    this.submitted.emit(this.form.value);
  }
    ngOnInit(): void{
    this.form= this.formBuilder.group({
      text: [this.init.text],
      channelId: [this.init.channelId],
      id: [this.init.id],
    })
  }

}
