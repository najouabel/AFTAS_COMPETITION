import {Component, OnInit} from '@angular/core';
import {Ranking} from "../../models/interfaces/ranking";
import {CompetitionService} from "../../services/competition.service";
import {DatePipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {MemberService} from "../../services/member.service";
import {RankingService} from "../../services/ranking.service";

@Component({
  selector: 'app-generate-ranking-competition',
  templateUrl: './generate-ranking-competition.component.html',
  styleUrls: ['./generate-ranking-competition.component.css']
})
export class GenerateRankingCompetitionComponent implements OnInit{

  allRanking:Ranking[] = [];
  IsOpenedSideBar = false;

  private idCompetition : string = 'null';
  constructor(
    private competitionService: CompetitionService,
    private datePipe: DatePipe,
    private rout : ActivatedRoute,
    private memberservice: MemberService,
    private rankingservice : RankingService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.rout.params.subscribe(param =>{
      this.idCompetition = param['id'];
    })
    this.generateRanking();
  }






  generateRanking() :void {
    this.rankingservice.generateCompetitionRankings(this.idCompetition).subscribe({
      next: rankings => {
        this.allRanking= rankings;
      },
      error: err => console.log(err)
    })
  }




  ToggelSideMenu() {
    this.IsOpenedSideBar = !this.IsOpenedSideBar;
  }
}
