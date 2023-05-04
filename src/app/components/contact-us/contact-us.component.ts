import { Component, OnInit } from '@angular/core';
import { ContactUsUserForm } from 'src/app/models.ts/userContactDeatails';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],

})
export class ContactUsComponent implements OnInit {

  userContactDetails:ContactUsUserForm = new ContactUsUserForm('', '', '', '');
  submitted:boolean = false;
  afterSubmit:boolean = true;

  ngOnInit(): void {
  }

  onSubmit():void {
    this.submitted = true;
    this.afterSubmit = false;

  }

}
