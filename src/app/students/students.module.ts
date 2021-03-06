import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsCreateComponent } from './students-create/students-create.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { EventsModule } from '../events/events.module';
import { VaccinesModule } from '../vaccines/vaccines.module';


@NgModule({
    declarations: [
        StudentsListComponent,
        StudentsCreateComponent,
        StudentsDetailsComponent,
        StudentsEditComponent
    ],
    imports: [
        CommonModule,
        StudentsRoutingModule,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot(),
        TabsModule.forRoot(),
        EventsModule,
        VaccinesModule
    ]
})
export class StudentsModule { }
