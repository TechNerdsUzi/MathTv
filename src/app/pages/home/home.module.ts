import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DropdownDirective } from '../../shared/dropdown.directive';
@NgModule({
  declarations: [HomeComponent, DropdownDirective],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
  ]
})
export class HomeModule { }
