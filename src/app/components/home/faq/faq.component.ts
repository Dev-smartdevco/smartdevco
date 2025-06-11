import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-faq',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  constructor(@Inject(DOCUMENT) private document: Document){}
  ngOnInit(){

    const faqs: NodeListOf<Element> = document.querySelectorAll('.faq');

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
}
