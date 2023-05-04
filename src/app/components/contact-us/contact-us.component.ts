import { Component, OnInit } from '@angular/core';
import { ContactUsUSerForm } from 'src/app/models.ts/userContactDeatails';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],

})
export class ContactUsComponent implements OnInit {

  userContactDetails:ContactUsUSerForm = new ContactUsUSerForm('', '', '', '');
  submitted:boolean = false;
  afterSubmit:boolean = true;

  ngOnInit(): void {
  }

  onSubmit():void {
    this.submitted = true;
    this.afterSubmit = false;

  }

}
