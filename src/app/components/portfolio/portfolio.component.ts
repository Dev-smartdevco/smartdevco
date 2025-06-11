import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
   allButton:any;
   appsButton:any ;
   websitesButton:any;
   portfolioItems:any;
   buttons:any;
   popup:any;
   popupClose:any;
   viewDetails:any;
   projectSelected:any={};
   PreviousWebsite:any=[
    {'projectId':1,'projectName':'Movies','projectType':'Website','projectImage':'web/Portfolio-movies.png','projectDescription':'One Movies is the world most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows'},
    {'projectId':2,'projectName':'House','projectType':'Website','projectImage':'web/Portfolio-house.png','projectDescription':'House offers an interface that is user friendly and lets you find and make great deals for your Flats,Houses and much more'},
    {'projectId':3,'projectName':'ShoppingAds','projectType':'Website','projectImage':'web/Portfolio-shopping.png','projectDescription':'ShoppingAds offers an interface that is user friendly and lets you find and make great deals for your Mobile Phones, Electronics, Cars, Home, Houses, Apparel Fashion, Pets, Kids Products and much more'},
   ]
   PreviousApp:any=[
    {'projectId':1,'projectName':'La Cucina','projectType':'App','projectImage':'apps/Portfolio-Cucina.png','projectDescription':'La Cucina is an application to order your food easily, you can choose from different categories and get your meal done. Keep track of your orders and easily contact the delivery man to get your order on time.'},
    {'projectId':2,'projectName':'Homely','projectType':'App','projectImage':'apps/Portfolio-homely.png','projectDescription':'homely is an app for selling home appliances such as tvs, microwaves and ovens..etc with affordable prices and special offers to suits all. with delivery service you can with few steps get what you want at home.'},
    {'projectId':3,'projectName':'Home Mate','projectType':'App','projectImage':'apps/Portfolio-home mate.png','projectDescription':'home mate is an app for home services booking such as plumber, it is play as a chain between user and providers. you can choose your favorite provider with suitable price and get him.'},
    {'projectId':4,'projectName':'Jaleesa','projectType':'App','projectImage':'apps/Portfolio-jaleesa.png','projectDescription':'jaleesa is an app for getting a babysetter for your kid with few steps and with all of ease. you can feel comfortable now with jaleesa. you can get your favorite babysetter with the best price and the nearest one to your location too and contact her for that.'},
    {'projectId':5,'projectName':'Jobify','projectType':'App','projectImage':'apps/Portfolio-jobify.png','projectDescription':'jobify is an application to help users getting jobs easily by searching for a specific job and they can easily apply to it.'},
    {'projectId':6,'projectName':'Kids Joy','projectType':'App','projectImage':'apps/Portfolio-kidsjoy.png','projectDescription':'kids joy is an app for kids learning with ease through multiple classes and exercises to all sections, it is also add a little joy for the kid to enjoy his time on app learning. it is the stone that will build your kid journey to learn without extra efforts.'},
    {'projectId':7,'projectName':'Monagah','projectType':'App','projectImage':'apps/Portfolio-Monagah.png','projectDescription':'Monagah is an app for muslim to get all daily religious needs such as quran, duaa and hadith. you can get the direction of qibla too. it is for muslims to be always aware of his religion rules and terms.'},
    {'projectId':8,'projectName':'Payee','projectType':'App','projectImage':'apps/Portfolio-Payee.png','projectDescription':'Payee is an application for bank services such as deposits, loans, card services, exchage and transfer money. it is made for you to make your life easier.'},
    {'projectId':9,'projectName':'Seek','projectType':'App','projectImage':'apps/Portfolio-seek.png','projectDescription':'seek is a realestate app for selling and buy a realestate, you can search for a specific realestate or make a post to sell your one. you can contact the seller of the property and get it now.'},
    {'projectId':10,'projectName':'Shifaa','projectType':'App','projectImage':'apps/Portfolio-Shifaa.png','projectDescription':'Shifaa is an application for a doctor appointment booking, you can choose from a list of doctors and book your session now by online calling or chat then rate your session with the doctor.'},
    {'projectId':11,'projectName':'Stand','projectType':'App','projectImage':'apps/Portfolio-stand.png','projectDescription':'stand is an app for car request in which you can easily choose your car category and the destination and start point then get your car and driver info with prices info and start your trip now!'},
    {'projectId':12,'projectName':'Travelo','projectType':'App','projectImage':'apps/Portfolio-travelo.png','projectDescription':'Travelo is an application that allows you to easily book your flight to a place. you can choose your date and time for booking, also check the place details and reviews then complete your booking with a safe payment.'},
    {'projectId':13,'projectName':'Wasfa','projectType':'App','projectImage':'apps/Portfolio-wasfa.png','projectDescription':'Wasfa is an app for sharing food recipes with all details and images, exchange food experiences and get notified about all new posts and follow your favourite people to get all of their updates'},
    {'projectId':14,'projectName':'Workout','projectType':'App','projectImage':'apps/Portfolio-workout.png','projectDescription':'Workout is an application for women to keep fit and lose weight by setting their goals and trying to achieve them through exercises and workouts. She can also track her progress from her statistics to be encouraged.'}
   ]

 
constructor(@Inject(DOCUMENT) private document: Document){}
ngOnInit(){
        this.allButton = this.document.getElementById('All-Portfolio')as HTMLElement;
        this.appsButton  = this.document.getElementById('Apps-Portfolio')as HTMLElement;
        this.websitesButton  = this.document.getElementById('Websites-Portfolio')as HTMLElement;
        this.portfolioItems  = this.document.querySelectorAll<HTMLElement>('.portfolio .item');
        this.buttons  = [this.allButton, this.appsButton, this.websitesButton];


        this.popup = this.document.querySelector('.portfolio-popup');
        this.popupClose = this.document.querySelector('#popup-close');
        this.viewDetails = this.document.querySelectorAll('.view-details');
      
         this.viewDetails.forEach((viewDetail:any) =>{
            viewDetail.addEventListener('click', ()=> {
                this.popup.style.display = 'flex';
            });
        });
      
        this.popupClose.addEventListener('click', ()=> {
            this.popup.style.display = 'none';
        });
    }
    filterPortfolio(category: string): void {
        this.portfolioItems  = this.document.querySelectorAll<HTMLElement>('.portfolio .item');
      this.portfolioItems.forEach((item:any) => {
          if (category === 'all') {
              item.style.display = 'block';
          } else if (item.getAttribute('data-category') === category) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  }

   setActiveButton(activeButton: any): void {
    this.buttons  = [this.allButton, this.appsButton, this.websitesButton];
    this.buttons.forEach((button:any) => {
          if (button.innerHTML === activeButton) {
              button.classList.remove('secondary-btn');
              button.classList.add('primary-btn');
          } else {
              button.classList.remove('primary-btn');
              button.classList.add('secondary-btn');
          }
      });

}
showpopup(item:any){
    this.projectSelected = item;
    this.popup.style.display = 'flex';
}
}
