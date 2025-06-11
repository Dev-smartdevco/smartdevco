import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    constructor(@Inject(DOCUMENT) private document: Document){}

  ngOnInit() {
    this.initializeNavbar();
  }
   initializeNavbar(): void {
    const navbar:any = this.document.querySelector('.navbar');
    const navLogo: any = this.document.querySelector('.nav-logo img');
    // const languageButton: any = document.querySelector('.language-button img');
    // const languageButtonText: any = document.querySelector('.language-button');
    const navLinks:any = this.document.querySelectorAll('.nav-links ul li a');
    const menu: any = this.document.querySelector('.open-menu img');

    const originalNavLogoSrc: string | null = navLogo.src;
    // const originalLanguageButtonSrc: string | null = languageButton.src;
    // const originalLanguageButtonTextColor: string | null = window.getComputedStyle(languageButtonText).color;
    const originalNavLinkColor: string | null = window.getComputedStyle(navLinks[0]).color;

    window.addEventListener('scroll', function() {
        if (window.scrollY >= 0.5 * 16) { // 10rem converted to pixels (assuming 1rem = 16px)
            navbar.style.position = 'fixed';
            navbar.style.backgroundColor = 'white';
            navbar.style.boxShadow = 'rgba(149, 157, 165, 0.2) 0px 8px 24px';
            navLogo.src = 'assets/public/svg/blue_black.svg'; // Change to the new logo src
            menu.src = 'assets/public/svg/menue.svg';
            // languageButton.src = 'assets/public/svg/blueicon.svg'; // Change to the new icon src
            // languageButtonText.style.color = '#3084B6';
            navLinks.forEach((link:any) => {
                link.style.color = 'black';
            });
        } else {
            navbar.style.position = 'relative';
            navbar.style.backgroundColor = '#3084B6';
            navbar.style.boxShadow = 'none';
            menu.src = 'assets/public/svg/Menu.svg';
            navLogo.src = originalNavLogoSrc; // Revert to the original logo src
            // languageButton.src = originalLanguageButtonSrc; // Revert to the original icon src
            // languageButtonText.style.color = originalLanguageButtonTextColor; // Revert to the original color
            navLinks.forEach((link:any) => {
                link.style.color = 'white'; // Revert to the original color
            });
        }
    });

    const closeMenu: any = this.document.querySelector('.close-menu');
    const mobileNav: any = this.document.querySelector('.mobile-nav');
    const openMenu: any = this.document.querySelector('.open-menu');
    closeMenu.addEventListener('click', function(){
        mobileNav.style.display = 'none';
    });
    openMenu.addEventListener('click', function(){
        mobileNav.style.display = 'block';
    });

    // Underline Active Page Nav
    const currentPath: string = window.location.pathname;
    const navListItems: NodeListOf<HTMLLIElement> = this.document.querySelectorAll('#nav-list li');
    navListItems.forEach(function (li) {
        const aTag: HTMLAnchorElement | null = li.querySelector('a');
        if (aTag && aTag.getAttribute('href') === currentPath) {
            li.classList.add('active');
        }
    });
}

hidemenue()
{ 
    const mobileNav: any = this.document.querySelector('.mobile-nav');
        mobileNav.style.display = 'none';
}
}
