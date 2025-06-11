import { DOCUMENT } from '@angular/common';
import { Component, Inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-portfolioslid',
  standalone: true,
  imports: [RouterLink],
  schemas: [NO_ERRORS_SCHEMA],

  templateUrl: './portfolioslid.component.html',
  styleUrl: './portfolioslid.component.css'
})
export class PortfolioslidComponent {

 
  constructor(@Inject(DOCUMENT) private document: Document){}

  ngOnInit(){

  const sliders = document.querySelectorAll('.portfolio');

  sliders.forEach((slider: any) => {
    let isDown: boolean = false;
    let startX: number;
    let scrollLeft: number;
    let isAutoplay: boolean = true;
    const delay: number = 2000; // 2 seconds delay for autoplay
    let autoplayInterval: NodeJS.Timeout;

    // Clone the items for infinite scroll
    const cloneItems = () => {
      const items = Array.from(slider.children);
      items.forEach((item: any) => {
        const clone = item.cloneNode(true) as HTMLElement;
        slider.appendChild(clone);
      });
      slider.scrollLeft = slider.children[slider.children.length / 2].offsetLeft;
    };

    cloneItems();

    slider.addEventListener('mousedown', (e: MouseEvent) => {
      isAutoplay = false;
      e.preventDefault();
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
      isAutoplay = true;
      startAutoplay();
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
      isAutoplay = true;
      startAutoplay();
    });

    slider.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; // Adjust the scroll speed if needed
      slider.scrollLeft = scrollLeft - walk;
    });

    // Infinite scroll adjustment
    slider.addEventListener('scroll', () => {
      const midPoint = slider.scrollWidth / 2;
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = slider.scrollLeft - midPoint;
      } else if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollLeft + midPoint;
      }
    });

    // Autoplay function
    const autoplay = () => {
      if (!isAutoplay) return;
      slider.scrollLeft += slider.children[0].offsetWidth; // Move to the next item
    };

    // Start and stop autoplay
    const startAutoplay = () => {
      if (autoplayInterval) clearInterval(autoplayInterval);
      autoplayInterval = setInterval(autoplay, delay);
    };

    const stopAutoplay = () => {
      clearInterval(autoplayInterval);
    };

    // Stop autoplay on mouse enter and start on mouse leave
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    // Initial autoplay start
    startAutoplay();
  });




  // const popup:any = document.querySelector('.portfolio-popup');
  // const popupClose:any = document.querySelector('#popup-close');
  // const viewDetails = document.querySelectorAll('.view-details');

  // viewDetails.forEach(function(viewDetail) {
  //     viewDetail.addEventListener('click', function() {
  //         popup.style.display = 'flex';
  //     });
  // });

  // popupClose.addEventListener('click', function() {
  //     popup.style.display = 'none';
  // });
  }
}
