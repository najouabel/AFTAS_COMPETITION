import {Component, OnInit} from '@angular/core';
import {RankingService} from "../../services/ranking.service";
import {Ranking} from "../../models/interfaces/ranking";
import {Competition} from "../../models/interfaces/competition";
import {Member} from "../../models/interfaces/member";
import {CompetitionService} from "../../services/competition.service";
import {DatePipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {MemberService} from "../../services/member.service";
import {ReqRanking} from "../../models/interfaces/ReqRanking";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit{


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
          return competition.date && new Date(competition.date).getTime() <= Date.now(); });
      },
      error: err => console.log(err)
    })
  }



  ToggelSideMenu() {
    this.IsOpenedSideBar = !this.IsOpenedSideBar;
  }
}
