import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { StrategyComponent } from './strategy/strategy.component';
import { PortfolioslidComponent } from './portfolioslid/portfolioslid.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { DOCUMENT } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-home',
    imports: [
        SliderComponent,
        AboutusComponent,
        OurservicesComponent,
        StrategyComponent,
        PortfolioslidComponent,
        TestimonialsComponent,
        FaqComponent,
        SponsorComponent,
        FormsModule,
        ReactiveFormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
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