import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(@Inject(DOCUMENT) private document: Document){}

  ngOnInit(){
  const services: NodeListOf<Element> = document.querySelectorAll('.service');
const descriptionElement: Element | null = document.querySelector('.description');

services.forEach((service: Element) => {
    service.addEventListener('click', function() {
        // Remove 'active' class from all services
        services.forEach((s: Element) => s.classList.remove('active'));
        
        // Add 'active' class to the clicked service
        service.classList.add('active');
        
        // Update the description text
        const description: string | null = service.getAttribute('data-description');
        if (descriptionElement) {
            descriptionElement.textContent = description;
        }
    });
});
}
}
