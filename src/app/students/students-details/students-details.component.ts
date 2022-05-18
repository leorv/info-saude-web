import { StudentsService } from './../students.service';
import { SearchService } from './../../shared/search.service';
import { Student } from './../student';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs';

@Component({
    selector: 'app-students-details',
    templateUrl: './students-details.component.html',
    styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {

    student: Student = { id: 0, name: '', gender: '', birthDate: new Date, grade: '', cpf: 0, events: []};

    constructor(
        private route: ActivatedRoute,
        private service: StudentsService
    ) { }

    ngOnInit(): void {
        this.route.params.pipe(
            map((params: any) => {
                const id = params['id'];
                return id;
            }),
            switchMap((id: number) => this.service.getStudentsById(id))
        ).subscribe((student: Student) => this.student = student);
    }

}
