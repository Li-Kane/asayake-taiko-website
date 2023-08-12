import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MediaComponent } from './media/media.component';
import { MembersComponent } from './members/members.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TaikoHistoryComponent } from './home/taiko-history/taiko-history.component';
import { ConcertComponent } from './home/concert/concert.component';
import { RepertoireComponent } from './home/repertoire/repertoire.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'media', component: MediaComponent},
  { path: 'members', component: MembersComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'taiko-history', component: TaikoHistoryComponent},
  { path: 'concert', component: ConcertComponent},
  { path: 'repertoire', component: RepertoireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
