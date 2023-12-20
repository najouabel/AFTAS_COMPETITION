import {Component, OnInit} from '@angular/core';
import {Competition} from "../../models/interfaces/competition";
import {CompetitionService} from "../../services/competition.service";
import {DatePipe} from "@angular/common";
import {RankingService} from "../../services/ranking.service";

@Component({
  selector: 'app-add-ranking',
  templateUrl: './add-ranking.component.html',
  styleUrls: ['./add-ranking.component.css']
})
export class AddRankingComponent implements OnInit{

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
          return competition.date && new Date(competition.date).getTime() > Date.now(); });
      },
      error: err => console.log(err)
    })
  }



  ToggelSideMenu() {
    this.IsOpenedSideBar = !this.IsOpenedSideBar;
  }

}
