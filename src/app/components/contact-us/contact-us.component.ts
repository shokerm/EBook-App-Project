import { Component, OnInit } from '@angular/core';
import { UserContactDeatail } from 'src/app/models.ts/userContactDeatails';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],

})
export class ContactUsComponent implements OnInit {

  userContactDetails:UserContactDeatail = new UserContactDeatail('', '', '', '');
  submitted:boolean = false;
  afterSubmit:boolean = true;

  ngOnInit(): void {
  }

  onSubmit():void {
    this.submitted = true;
    this.afterSubmit = false;

  }

}
