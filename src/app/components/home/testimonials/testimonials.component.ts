import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'home-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  constructor(@Inject(DOCUMENT) private document: Document){}
  ngOnInit(){
    const testimonialsContainer:any = this.document.getElementById('testimonials');
    const testimonials:any = this.document.querySelectorAll('.testimonial');
    const dotsContainer:any = this.document.getElementById('dots');
    const arrowLeft:any = this.document.getElementById('arrowLeft');
    const arrowRight:any = this.document.getElementById('arrowRight');
    let currentIndex = 0;
    const testimonialsCount = testimonials.length;

    const updateTestimonialsPerView = () => {
      return window.innerWidth <= 768 ? 1 : 3;
    };
    
    let testimonialsPerView = updateTestimonialsPerView();

    const createDots = (): void => {
      dotsContainer.innerHTML = ''; // Clear existing dots
      const dotsCount: number = Math.ceil(testimonialsCount / testimonialsPerView);
      for (let i: number = 0; i < dotsCount; i++) {
          const dot: any = this.document.createElement('div');
          dot.dataset.slide = i.toString();
          if (i === 0) {
              dot.classList.add('active');
          }
          dotsContainer.appendChild(dot);
      }
  };
    createDots();
    const dots = this.document.querySelectorAll('#dots div');

    const updateSlider = (): void => {
      testimonialsPerView = updateTestimonialsPerView();
      const offset: number = -(currentIndex * (100 / testimonialsPerView));
      testimonialsContainer.style.transform = `translateX(${offset}%)`;
      dots.forEach((dot: any) => dot.classList.remove('active'));
      dots[Math.floor(currentIndex / testimonialsPerView)].classList.add('active');
  };
  
  arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - testimonialsPerView : testimonialsCount - testimonialsPerView;
    if (currentIndex < 0) currentIndex = 0; // Ensure we don't move past the first item
    updateSlider();
});

arrowRight.addEventListener('click', () => {
  currentIndex = (currentIndex < testimonialsCount - testimonialsPerView) ? currentIndex + testimonialsPerView : 0;
  if (currentIndex > testimonialsCount - testimonialsPerView) currentIndex = testimonialsCount - testimonialsPerView; // Ensure we don't move past the last set
  updateSlider();
});

dots.forEach((dot: any, index: number) => {
  dot.addEventListener('click', () => {
      currentIndex = index * testimonialsPerView;
      updateSlider();
  });
});

window.addEventListener('resize', () => {
  updateSlider();
});
updateSlider();

  }
}
