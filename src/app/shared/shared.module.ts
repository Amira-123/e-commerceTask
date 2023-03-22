import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    SearchComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    SearchComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
