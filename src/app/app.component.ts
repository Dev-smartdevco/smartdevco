import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoaderService } from './Loader/LoaderService';
import { SpinnerComponent } from './Loader/spinner/spinner.component';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FooterComponent, NavbarComponent, SpinnerComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smartdevco';
constructor(private LoaderService:LoaderService){
  this.LoaderService.setLoading(true);
}
ngOnInit() {
  
}

ngAfterViewInit() {
  setTimeout(() => {
    this.LoaderService.setLoading(false);
  }, 2000);
 
}
}
