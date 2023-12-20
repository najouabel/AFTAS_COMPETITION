import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Competition } from '../../models/interfaces/competition';
import {Router} from "@angular/router";

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.css']
})
export class CompetitionFormComponent {
  @Output() competitionAdded = new EventEmitter<Competition>();

  competitionForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.competitionForm = this.formBuilder.group({
      code: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      numberOfParticipants: ['', Validators.required],
      location: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.competitionForm.valid) {
      const competitionData: Competition = this.competitionForm.value;
      this.competitionAdded.emit(competitionData);
      this.router.navigate(["/lister-competitions"])
    }
  }
}
