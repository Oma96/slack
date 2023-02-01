import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Message } from '../../models/message';

@Component({
  selector: 'app-form-edit-message',
  templateUrl: './form-edit-message.component.html',
  styleUrls: ['./form-edit-message.component.scss']
})
export class FormEditMessageComponent {
  @Input() public init! : Message;
  @Output() public submitted: EventEmitter<Message>;
  public  isDisplayed: boolean= false;
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
    closeMe()
    {
        if(this.isDisplayed)
        {
            this.isDisplayed = false;
        }else{
            this.isDisplayed = true;
        }
    }

}
