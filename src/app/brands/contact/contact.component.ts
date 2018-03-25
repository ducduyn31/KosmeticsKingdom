import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Form, NgForm} from "@angular/forms";
import {Contact} from "./contact";
import {ContactService} from "./contact.service";
import {ProductService} from "../product.service";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  private formSub: Subscription;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.formSub)
      this.formSub.unsubscribe();
  }

  onSubmit(form: NgForm) {
    let values: any = form.value;
    let fileToUpload: File;
    if (this.fileInput.nativeElement.files && this.fileInput.nativeElement.files[0]) {
      fileToUpload = this.fileInput.nativeElement.files[0];
    }
    let fd = new FormData();

    console.log(values);

    Object.keys(values).map(
      (inputKey: string) => {
        fd.append(inputKey, values[inputKey]);
      }
    );

    if (fileToUpload)
      fd.append('attachment', fileToUpload, fileToUpload.name);

    this.formSub = this.contactService.submitFormToServer(fd).subscribe(
      (res: any) => {

        console.log(res);
      }
    );
  }
}
