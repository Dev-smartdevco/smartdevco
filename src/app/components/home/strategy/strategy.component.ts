import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'home-strategy',
  standalone: true,
  imports: [],
  templateUrl: './strategy.component.html',
  styleUrl: './strategy.component.css'
})
export class StrategyComponent {

  constructor(@Inject(DOCUMENT) private document: Document){}

  ngOnInit(){
  const navigations: NodeListOf<Element> = document.querySelectorAll('.navigations');
const sectionTitle: HTMLElement | null = document.getElementById('section-title');
const sectionContent: HTMLElement | null = document.getElementById('section-content');
const strategyNumber: HTMLElement | null = document.getElementById('strategy-number');

navigations.forEach((nav: Element) => {
    nav.addEventListener('click', function() {
        // Remove active class from all navigations
        navigations.forEach((nav: Element) => nav.classList.remove('active'));

        // Add active class to the clicked navigation
        nav.classList.add('active');

        // Update the section content
        const index: string | null = nav.getAttribute('data-index');
        const title: string | null = nav.getAttribute('data-title');
        const content: string | null = nav.getAttribute('data-content');

        if (strategyNumber) {
            strategyNumber.textContent = `0${index}`;
        }
        if (sectionTitle) {
            sectionTitle.textContent = title;
        }
        if (sectionContent) {
            sectionContent.textContent = content;
        }
    });
});
  }
}
