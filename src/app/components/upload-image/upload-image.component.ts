import { Component, ChangeDetectorRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { StoredataService } from '@services/store-data.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    private cd: ChangeDetectorRef,
    public service: StoredataService
  ) { }
  ngOnInit(): void {
    this.imageUrl = this.service.imageUrl;
    if (localStorage.getItem("image")) {
      this.service.imageUrl = localStorage.getItem("image");
    } else {
      this.service.imageUrl = "";
    }
  }

  /*##################### Registration Form #####################*/
  registrationForm = this.fb.group({
    file: null
  })

  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: any;
  imageUrl: any;
  editFile: boolean = true;
  removeUpload: boolean = false;

  uploadFile(event: any) {


    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      console.log(reader.result);



      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.service.imageUrl = reader.result;
        localStorage.setItem("image", this.service.imageUrl);
        this.registrationForm.patchValue({
          file: null
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    this.service.imageUrl = './assets/favicon/android-chrome-192x192.png';
    this.editFile = true;
    this.removeUpload = false;
    this.registrationForm.patchValue({
      file: null
    });
    localStorage.removeItem("image");
  }

  // Submit Registration Form
  onSubmit() {

    if (!this.registrationForm.valid) {
      return false;
    } else {
      return;
    }
  }
}
