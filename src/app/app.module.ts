import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActiveComponentService } from './active-component.service';
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { MediaComponent } from './media/media.component';
import { MembersComponent } from './members/members.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MemberComponent } from './members/member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaikoHistoryComponent } from './home/taiko-history/taiko-history.component';
import { ConcertComponent } from './home/concert/concert.component';
import { AlumniComponent } from './home/alumni/alumni.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from './loading.service';

function initializeApp(loadingService: LoadingService) {
  return () => {
    //Display loading page for set time before starting
    setTimeout(() => {
      loadingService.setLoading(false);
    }, 3000); 
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    MediaComponent,
    MembersComponent,
    NavbarComponent,
    MemberComponent,
    TaikoHistoryComponent,
    ConcertComponent,
    AlumniComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgOptimizedImage
  ],
  providers: [
    ActiveComponentService,
    {
      provide: APP_INITIALIZER,
        useFactory: initializeApp,
        multi: true,
        deps: [LoadingService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
