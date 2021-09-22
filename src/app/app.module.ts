import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { YourBicyclesComponent } from './components/your-bicycles/your-bicycles.component';
import { PartsComponent } from './components/parts/parts.component';
import { BicycleOverviewComponent } from './components/bicycle-overview/bicycle-overview.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { PartComponent } from './components/part/part.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'yourBicycles', component: YourBicyclesComponent },
  { path: 'yourBicycles/:id', component: BicycleOverviewComponent },
  { path: 'yourParts', component: PartsComponent },
  { path: 'parts/:id', component: PartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    YourBicyclesComponent,
    PartsComponent,
    BicycleOverviewComponent,
    ImageListComponent,
    PartComponent,
    ButtonComponent,
    ModalComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,
    IvyCarouselModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
