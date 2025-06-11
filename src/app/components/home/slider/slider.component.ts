import { DOCUMENT } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'home-slider',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  heroContent: any | null;
 heroTitle: any | null;
 heroParagraph: any | null;
 heroImg: any | null;
 dots: any | null;
 leftArrow: any;
 rightArrow: any | null;
  currentSlide: number = 0;
 slideCount: number=0;
  slides: any[] = [
  {
      title: "Mobile <span>Application</span> Development",
      description: "Extend the capabilities of your existing system to mobile or create your mobile applications across multiple platforms through our technically adept team. Experience improved customer engagement.",
      imgUrl: "assets/public/images/Vector.jpg"
  },
  {
      title: "Business <span>Process</span> Re-Engineering",
      description: "Apply our strategic analysts’ recommendations and designs to update your business processes as per international best practices. Our advanced migration processes help you re-platform legacy software solutions to modern.",
      imgUrl: "assets/public/images/Vector.png"
  },
  {
      title: "Web <span>Application</span> Development",
      description: "Technology Solutions That Inspire We deliver next generation enterprise applications on the web, mobile and desktop, to streamline business processes and enhance customer experience.",
      imgUrl: "assets/public/images/Vector1.png"
  }
];
  constructor(@Inject(DOCUMENT) private document: Document) {
    
  }

  loadScript() {
    const body = this.document.body;
    const script = this.document.createElement('script');
    script.innerHTML = '';
    script.src = 'assets/public/scripts/mainSlider.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit() {
    // this.loadScript();

  
 this.heroContent = document.querySelector('.hero-content');
this.heroTitle = document.querySelector('.hero-content h1');
this.heroParagraph = document.querySelector('.hero-content p');
this.heroImg = document.querySelector('.hero-img');
this.dots = document.querySelector('.slider-dots');
this.leftArrow = document.querySelector('.arrow-leftslider');
this.rightArrow = document.querySelector('.arrow-rightslider');

interface Slide {
    title: string;
    description: string;
    imgUrl: string;
}




this.slideCount = this.slides.length;


this.slides.forEach((_, index: number) => {
    const dot: HTMLElement = document.createElement('div');
    dot.classList.add('dot');
    if (index === this.currentSlide) {
        dot.classList.add('active');
    }
    dot.addEventListener('click', () => this.goToSlide(index));
    this.dots?.appendChild(dot);
});

this.leftArrow?.addEventListener('click', this.goToPreviousSlide);
this.rightArrow?.addEventListener('click', this.goToNextSlide);

setInterval(() => {
    if (this.currentSlide < this.slideCount - 1) {
      this.goToNextSlide();
    } else {
      this.currentSlide = 0;
        this.updateSlider();
    }
}, 3000);

this.updateSlider();

  }

   updateSlider(): void {
    // Fade out current content
    

    setTimeout(() => {
      this.heroContent?.classList.remove('visible');
        this.heroTitle!.innerHTML = this.slides[this.currentSlide].title;
        this.heroParagraph!.innerHTML = this.slides[this.currentSlide].description;
        this.heroImg!.style.backgroundImage = `url(${this.slides[this.currentSlide].imgUrl})`;

        // Fade in new content
        this.heroContent?.classList.add('visible');

        this.dots?.querySelectorAll('.dot').forEach((dot: any, index: number) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });

        // this.leftArrow!.querySelector('img')!.src = this.currentSlide === 0 ? '../assets/public/svg/arrowdisable.svg' : '../assets/public/svg/arrow.svg';
        // this.rightArrow!.querySelector('img')!.src = this.currentSlide === this.slideCount - 1 ? '../assets/public/svg/arrowdisable.svg' : '../assets/public/svg/arrow.svg';
    }, 500); // Match this timeout to the CSS transition duration
}

 goToNextSlide(): void {
    if (this.currentSlide < this.slideCount - 1) {
      this.currentSlide++;
        this.updateSlider();
    }
}

 goToPreviousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
        this.updateSlider();
    }
}

 goToSlide(index: number): void {
  this.currentSlide = index;
    this.updateSlider();
}
}
