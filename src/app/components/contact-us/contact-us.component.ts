import { Component, OnInit } from '@angular/core';
import { UserContactDeatail } from 'src/app/models.ts/userContactDeatails';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],

})
export class ContactUsComponent implements OnInit {

  userContactDetails = new UserContactDeatail('', '', '', '');

  submitted = false;

  afterSubmit = true;



  ngOnInit(): void {
  }

  onSubmit() {

    this.submitted = true;
    this.afterSubmit = false;


  }

}
