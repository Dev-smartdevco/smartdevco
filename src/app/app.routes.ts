import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',loadComponent:()=>import('./components/home/home.component').then(
        (m)=>m.HomeComponent)},
    {path:'about-us',loadComponent:()=>import('./components/about-us/about-us.component').then(
        (m)=>m.AboutUsComponent)},
        {path:'services',loadComponent:()=>import('./components/services/services.component').then(
            (m)=>m.ServicesComponent)},
    {path:'portfolio',loadComponent:()=>import('./components/portfolio/portfolio.component').then(
        (m)=>m.PortfolioComponent)},
     {path:'faq',loadComponent:()=>import('./components/faq/faq.component').then(
            (m)=>m.FAQComponent)},
     {path:'contact-us',loadComponent:()=>import('./components/contact-us/contact-us.component').then(
                (m)=>m.ContactUsComponent)},
     {path:'privacy-and-policy',loadComponent:()=>import('./components/privacy-and-policy/privacy-and-policy.component').then(
        (m)=>m.PrivacyAndPolicyComponent)},
    {path:'terms-and-condtitons',loadComponent:()=>import('./components/terms-and-condtitons/terms-and-condtitons.component').then(
           (m)=>m.TermsAndCondtitonsComponent)},
        {path:'**',component:HomeComponent},
];
