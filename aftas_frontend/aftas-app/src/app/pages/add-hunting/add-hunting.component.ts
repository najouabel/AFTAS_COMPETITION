import {Component, OnInit} from '@angular/core';
import {Competition} from "../../models/interfaces/competition";
import {CompetitionService} from "../../services/competition.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-add-hunting',
  templateUrl: './add-hunting.component.html',
  styleUrls: ['./add-hunting.component.css']
})
export class AddHuntingComponent implements OnInit{

  allCompetitions:Competition[] = [];
  IsOpenedSideBar = false;
  filteredCompetitions:Competition[] = [];
  constructor(private competitionService: CompetitionService,
              private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getcurrentCompetitions();
  }

  getcurrentCompetitions() {
    this.competitionService.getAllCompetitions().subscribe({
      next: competitions => {
        this.allCompetitions = competitions;
        this.filteredCompetitions = this.allCompetitions.filter(competition => {
          return competition.date && competition.date.toString() == this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
        });
      },
      error: err => console.log(err)
    })
  }



  ToggelSideMenu() {
    this.IsOpenedSideBar = !this.IsOpenedSideBar;
  }

}
