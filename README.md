Follow below steps to integrate Angular Material into Ionic Project

Step1: Install dependencies for material
npm install --save @angular/material @angular/cdk @angular/animations

Step2: Add material theme into /themes/global.scss
@import "~@angular/material/prebuilt-themes/indigo-pink.css";

Step3: Use an material component, such as datepicker. For datepicker, following modules should be included:

import { MatNativeDateModule } from '@angular/material';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
