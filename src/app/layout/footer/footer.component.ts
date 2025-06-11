import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'footer',
    imports: [RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(@Inject(DOCUMENT) private document: Document){}
  ngOnInit(){
    var scrollToTopBtn = document.querySelector(".scrollToTopBtn")!
    var rootElement = document.documentElement

    function handleScroll(): void {
      // Do something on scroll - 0.15 is the percentage the page has to scroll before the button appears
      // This can be changed - experiment
      const scrollTotal: number = rootElement.scrollHeight - rootElement.clientHeight;
      if ((rootElement.scrollTop / scrollTotal) > 0.15) {
        // Show button
        scrollToTopBtn.classList.add("showBtn");
      } else {
        // Hide button
        scrollToTopBtn.classList.remove("showBtn");
      }
    }

    function scrollToTop(): void {
      // Scroll to top logic
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    

    scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)
  }
}
