import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { YourBicyclesComponent } from './components/your-bicycles/your-bicycles.component';
import { PartsComponent } from './components/parts/parts.component';
import { BicycleOverviewComponent } from './components/bicycle-overview/bicycle-overview.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { PartComponent } from './components/part/part.component';
import { ButtonComponent } from './components/button/button.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PartsAddModalComponent } from './components/parts-add-modal/parts-add-modal.component';
import { PartsViewModalComponent } from './components/parts-view-modal/parts-view-modal.component';

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
    CarouselComponent,
    PartsAddModalComponent,
    PartsViewModalComponent,
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
    MatAutocompleteModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
