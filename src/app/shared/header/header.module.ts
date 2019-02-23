import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
