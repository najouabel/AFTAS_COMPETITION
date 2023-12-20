import {Component, OnInit} from '@angular/core';
import {Competition} from "../../models/interfaces/competition";
import {CompetitionService} from "../../services/competition.service";
import {DatePipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {MemberService} from "../../services/member.service";
import {Member} from "../../models/interfaces/member";
import {Ranking} from "../../models/interfaces/ranking";
import {RankingService} from "../../services/ranking.service";
import {ReqRanking} from "../../models/interfaces/ReqRanking";

@Component({
  selector: 'app-add-member-to-runking',
  templateUrl: './add-member-to-runking.component.html',
  styleUrls: ['./add-member-to-runking.component.css']
})
export class AddMemberToRunkingComponent implements OnInit{

  allCompetitions:Competition[] = [];
  allMembers:Member[] = [];
  IsOpenedSideBar = false;
  filteredCompetitions:Competition[] = [];

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
    this.getAllMembers();
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

  onRankingAdded(idMember: number|undefined) {
    console.log(idMember)
    let ranking: ReqRanking = {
      id: {
        memberNum: idMember,
        competitionCode: this.idCompetition
      }
    };
    ranking.id.memberNum = idMember;
    ranking.id.competitionCode = this.idCompetition;


    this.rankingservice.addRanking(ranking).subscribe(
      (response) => {
        console.log('New competition added:', response);
      },
      (error) => {
        console.error('Error adding competition:', error);
      }
    );
    this.router.navigate(["/lister-competitions"])
  }

  getAllMembers(){
    this.memberservice.getMembers().subscribe(data =>{
      this.allMembers = data;
      console.log(this.allMembers)
    })
  }



  ToggelSideMenu() {
    this.IsOpenedSideBar = !this.IsOpenedSideBar;
  }
}
