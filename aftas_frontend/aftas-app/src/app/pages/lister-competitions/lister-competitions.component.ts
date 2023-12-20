import {Component, OnInit} from '@angular/core';
import {Competition} from "../../models/interfaces/competition";
import {CompetitionService} from "../../services/competition.service";
import {filter} from "rxjs";
import {CompetitionCardComponent} from "../../components/competition-card/competition-card.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-lister-competitions',
  templateUrl: './lister-competitions.component.html',
  styleUrls: ['./lister-competitions.component.css']
})
export class ListerCompetitionsComponent  implements OnInit {
  public competitionclosed !: Competition[] ;
  public competitioncurrent !: Competition[] ;
  public competitionfuture !: Competition[] ;
  allCompetitions:Competition[] = [];
  filteredCompetitions:Competition[] = [];
  filter: string='';
  IsOpenedSideBar = false;
  constructor(private competitionService: CompetitionService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getAllCompetitions()
  }
  getAllCompetitions() {
    this.competitionService.getAllCompetitions().subscribe({
      next: competitions => {
        this.allCompetitions = competitions;
        this.filterCompetitions("current")
      },
      error: err => console.log(err)
    })
  }

  filterCompetitions(filter: string) {
    switch (filter) {
      case "closed": {
        this.filteredCompetitions = this.allCompetitions.filter(competition => {
          return competition.date && new Date(competition.date).getTime() < Date.now();
        });
        break;
      }
      case "current": {
        this.filteredCompetitions = this.allCompetitions.filter(competition => {
          return competition.date && competition.date.toString() == this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
        });
        break;
      }
      case "future": {
        this.filteredCompetitions = this.allCompetitions.filter(competition => {
          return competition.date && new Date(competition.date).getTime() > Date.now();
        });
      }
    }
  }

  ToggelSideMenu() {
    console.log("gg")
    this.IsOpenedSideBar = !this.IsOpenedSideBar;
  }
}
