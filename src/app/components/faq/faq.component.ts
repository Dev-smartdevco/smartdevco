import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {
     AboutUsButton: HTMLElement | null = this.document.getElementById('AboutUs-FAQ');
      ServicesButton: HTMLElement | null = this.document.getElementById('Services-FAQ');
      CooperationButton: HTMLElement | null = this.document.getElementById('Cooperation-FAQ');
      DeliveryButton: HTMLElement | null = this.document.getElementById('Delivery-FAQ');

       faqItems: any = this.document.querySelectorAll('.faq-accordion .faq');
       classname:any = this.document.getElementsByTagName('body');

      buttons:any
  constructor(@Inject(DOCUMENT) private document: Document){}
  ngOnInit(){
     this.AboutUsButton= this.document.getElementById('AboutUs-FAQ');
     this.ServicesButton= this.document.getElementById('Services-FAQ');
     this.CooperationButton = this.document.getElementById('Cooperation-FAQ');
     this.DeliveryButton = this.document.getElementById('Delivery-FAQ');

     this.faqItems = this.document.querySelectorAll('.faq-accordion .faq');
    this.buttons = [this.AboutUsButton, this.ServicesButton, this.CooperationButton,this.DeliveryButton];
    this.classname = this.document.getElementsByTagName('body');
    this.document.body.className = this.document.body.className.replace("body-gray","");
    this.document.body.className += 'body-gray';
    // classname.addClass('body-gray');
    
    
    this.filterFAQ('AboutUs');
    this.setActiveButton(this.AboutUsButton);
    
    this.AboutUsButton?.addEventListener('click', () => {
        this.filterFAQ('AboutUs');
        this.setActiveButton(this.AboutUsButton);
    });
    this.ServicesButton?.addEventListener('click', () => {
        this.filterFAQ('Services');
        this.setActiveButton(this.ServicesButton);
    });
    this.CooperationButton?.addEventListener('click', () => {
        this.filterFAQ('Cooperation');
        this.setActiveButton(this.CooperationButton);
    });
    this.DeliveryButton?.addEventListener('click', () => {
        this.filterFAQ('Delivery');
        this.setActiveButton(this.DeliveryButton);
    });



    const faqs: NodeListOf<Element> = this.document.querySelectorAll('.faq');

    faqs.forEach((faq: Element) => {
        const question: any = faq.querySelector('.question');
    
        question.addEventListener('click', () => {
            // Remove 'active' class from all FAQs
            faqs.forEach((f: Element) => f.classList.remove('active'));
            
            // Add 'active' class to the clicked FAQ
            faq.classList.add('active');
        });
    });
  }
  filterFAQ(category: string): void {
    this.faqItems.forEach((item: any) => {
        if (item.getAttribute('data-category') === category || category === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
   setActiveButton(activeButton: HTMLElement | null):void {
    this.buttons.forEach((button: any | null) => {
        if (button === activeButton) {
            button.classList.remove('secondary-btn');
            button.classList.add('primary-btn');
        } else {
            button.classList.remove('primary-btn');
            button.classList.add('secondary-btn');
        }
    });
}
  ngOnDestroy(){
    this.document.body.className = this.document.body.className.replace("body-gray","");
  }
}
