import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';

//import { far, } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
//import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { LoginComponent } from './login/login.component';
import { DomService } from './dom.service';
import { ModalService } from './modal.service';
library.add(faTwitter);
//library.add(faHome);
library.add(fas);
//library.add(far);

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
    ])
  ],
  entryComponents:[
    LoginComponent
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    LoginComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [DomService, ModalService]
})
export class AppModule { }
