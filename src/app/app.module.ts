import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { KatexModule } from 'ng-katex';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { CalculoComponent } from './calculo/calculo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    CalculoComponent,
  ],
  imports: [
    BrowserModule,
    KatexModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatSliderModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
