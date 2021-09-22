import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { YourBicyclesComponent } from './components/your-bicycles/your-bicycles.component';
import { PartsComponent } from './components/parts/parts.component';
import { BicycleOverviewComponent } from './components/bicycle-overview/bicycle-overview.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PartComponent } from './components/part/part.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatButtonModule} from '@angular/material/button';
import { ButtonComponent } from './components/button/button.component';
import {MatDividerModule} from '@angular/material/divider';
import { ModalComponent } from './components/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'yourBicycles', component: YourBicyclesComponent},
  {path: 'yourBicycles/:id', component: BicycleOverviewComponent},
  {path: 'yourParts', component: PartsComponent},
  {path: 'parts/:id', component: PartComponent},
]

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,
    IvyCarouselModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
