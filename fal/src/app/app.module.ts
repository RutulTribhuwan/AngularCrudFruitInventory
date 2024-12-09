import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,provideHttpClient,withFetch  } from '@angular/common/http';
import { RouterModule } from '@angular/router';


// Import the SharedModule to access Navbar, Header, Footer
import { SharedModule } from './shared/shared.module';

// Import the standalone components
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitFormComponent } from './fruit-form/fruit-form.component';

@NgModule({
  declarations: [
    AppComponent
    // No need to declare standalone components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: FruitListComponent },
      { path: 'edit/:id', component: FruitFormComponent },
      { path: 'add', component: FruitFormComponent }
    ]),
    SharedModule,  // Import SharedModule here to use Navbar, Header, Footer
    FruitListComponent,  // Import standalone component here
    FruitFormComponent   // Import standalone component here
  ],
  providers: [
    // Add the following line to enable `fetch`
    provideHttpClient(withFetch()),
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
