import { Component } from '@angular/core';
import { LoaderService } from '../LoaderService';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-spinner',
    imports: [CommonModule],
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  constructor(public loader: LoaderService) { }

  ngOnInit(): void {
  }
}
