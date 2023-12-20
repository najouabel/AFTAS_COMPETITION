import {Component, OnInit} from '@angular/core';
import {Competition} from "../../models/interfaces/competition";
import {CompetitionService} from "../../services/competition.service";
import {DatePipe} from "@angular/common";
import {Member} from "../../models/interfaces/member";
import {ActivatedRoute, Router} from "@angular/router";
import {MemberService} from "../../services/member.service";
import {RankingService} from "../../services/ranking.service";
import {ReqRanking} from "../../models/interfaces/ReqRanking";
import {FormControl, FormGroup} from "@angular/forms";
import {FishService} from "../../services/fish.service";
import {Fish} from "../../models/interfaces/fish";
import Swal from 'sweetalert2';
import {HuntingService} from "../../services/hunting.service";

@Component({
  selector: 'app-list-member-hunting',
  templateUrl: './list-member-hunting.component.html',
  styleUrls: ['./list-member-hunting.component.css']
})
export class ListMemberHuntingComponent implements OnInit{

  allCompetitions:Competition[] = [];
  allMembers:Member[] = [];
  allfish : Fish[] = [];
  IsOpenedSideBar = false;
  filteredCompetitions:Competition[] = [];
  MemberId = 0;

  private idCompetition : string = 'null';
  IsModelOpened = false;
  constructor(
    private competitionService: CompetitionService,
    private datePipe: DatePipe,
    private rout : ActivatedRoute,
    private memberservice: MemberService,
    private rankingservice : RankingService,
    private router:Router,
    private fishservice: FishService,
    private huntingservice: HuntingService
  ) {}

  huntingForm = new FormGroup({
    member_num : new FormControl(this.MemberId),
      fish_name: new FormControl(this.allfish),
      numberOfFish: new FormControl(0),
      point : new FormControl(0),
      competition_code : new FormControl("")
  })

  point = 0;

  ngOnInit(): void {
    this.rout.params.subscribe(param =>{
      this.idCompetition = param['id'];
    })
    this.getfish();
    this.getAllMembers();
  }


  getfish() {
    this.fishservice.getFishes().subscribe({
      next: fishs => {
        this.allfish = fishs;
        console.log(fishs)
         },
      error: err => console.log(err)
    })
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

  showPopPup(num : number) {
    this.MemberId = num;
    this.IsModelOpened = true;
    console.log(this.IsModelOpened)
  }

  onSubmit() {
    this.huntingForm.value.member_num = this.MemberId;
    this.huntingForm.value.competition_code = this.idCompetition;

    this.allfish.map((fish)=>{
      if(fish.name == this.huntingForm.value.fish_name?.toString()){
        if(Number(this.huntingForm.value.point?.toString()) < Number(fish.averageWeight)){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "point must be supp than  ",
          });
          return;
        } else {
          this.huntingservice.addHunting(this.huntingForm.value).subscribe(
            (response) => {
              console.log('New hunting added:', response);
              Swal.fire({
                title: "Yes",
                text: "New hunting added",
                icon: "success"
              });
              this.getfish();
              this.getAllMembers();
              this.IsModelOpened = false;
            },
            (error) => {
              console.error('Error adding hunting:', error);
              Swal.fire({
                title: "Yes",
                text: "hunting dons't added",
                icon: "error"
              });
            }
          );
        }
      }
    })
    console.log(this.huntingForm)
  }
}
