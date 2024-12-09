import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives like ngIf, ngFor
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule  // This allows using Angular's built-in directives
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }