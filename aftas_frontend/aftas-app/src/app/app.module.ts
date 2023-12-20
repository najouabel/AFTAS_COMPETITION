import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CompetitionService} from "./services/competition.service";
import {CompetitionCardComponent} from "./components/competition-card/competition-card.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListerCompetitionsComponent } from './pages/lister-competitions/lister-competitions.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import { AddCompetitionComponent } from './pages/add-competition/add-competition.component';
import { CompetitionFormComponent } from './components/competition-form/competition-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddRankingComponent } from './pages/add-ranking/add-ranking.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { AddHuntingComponent } from './pages/add-hunting/add-hunting.component';
import {MemberService} from "./services/member.service";
import {FishService} from "./services/fish.service";
import {HuntingService} from "./services/hunting.service";
import {RankingService} from "./services/ranking.service";
import {DatePipe} from "@angular/common";
import { AddMemberToRunkingComponent } from './pages/add-member-to-runking/add-member-to-runking.component';
import { GenerateRankingCompetitionComponent } from './pages/generate-ranking-competition/generate-ranking-competition.component';
import { ListMemberHuntingComponent } from './pages/list-member-hunting/list-member-hunting.component';



@NgModule({
  declarations: [
    AppComponent,
    CompetitionCardComponent,
    DashboardComponent,
    SidebarComponent,
    ListerCompetitionsComponent,
    AddCompetitionComponent,
    CompetitionFormComponent,
    AddRankingComponent,
    RankingComponent,
    AddHuntingComponent,
    AddMemberToRunkingComponent,
    GenerateRankingCompetitionComponent,
    ListMemberHuntingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CompetitionService,
    MemberService,
    FishService,
    HuntingService,
    RankingService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
