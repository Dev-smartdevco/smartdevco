import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-contact-us',
    imports: [FormsModule, ReactiveFormsModule, RouterLink],
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  form!: FormGroup;
  submitted = false;
  constructor(@Inject(DOCUMENT) private document: Document,private formBuilder: FormBuilder, private toastr: ToastrService){}
  ngOnInit() {
    this.form = this.formBuilder.group({
      from_name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      message: [null, Validators.required],

    });
  }

sendEmail(e: Event) {
  this.submitted = true;
  if (this.form.invalid) {
      return;
  }
  e.preventDefault();
  emailjs
    .sendForm('service_twv5lru', 'template_xvfyz3p', e.target as HTMLFormElement, {
      publicKey: '3kBKaeJKu_0oRBi3u',
    })
    .then(
      () => {
        this.toastr.success('Your email has been sent successfully', 'Thank You');
        this.form.reset();
      },
      (error) => {
        console.log('FAILED...', (error as EmailJSResponseStatus).text);
      },
    );
}
}
