import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ListerCompetitionsComponent} from "./pages/lister-competitions/lister-competitions.component";
import {AddCompetitionComponent} from "./pages/add-competition/add-competition.component";
import {AddHuntingComponent} from "./pages/add-hunting/add-hunting.component";
import {AddRankingComponent} from "./pages/add-ranking/add-ranking.component";
import {RankingComponent} from "./pages/ranking/ranking.component";
import {AddMemberToRunkingComponent} from "./pages/add-member-to-runking/add-member-to-runking.component";
import {
  GenerateRankingCompetitionComponent
} from "./pages/generate-ranking-competition/generate-ranking-competition.component";
import {ListMemberHuntingComponent} from "./pages/list-member-hunting/list-member-hunting.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashbored', component: DashboardComponent },
  { path: 'lister-competitions', component: ListerCompetitionsComponent },
  { path: 'add-competition', component: AddCompetitionComponent },
  { path: 'add-ranking', component: AddRankingComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'add-hunting', component: AddHuntingComponent },
  { path: 'add-member-to-rinking/:id', component: AddMemberToRunkingComponent },
  { path: 'generate-ranking-competition/:id', component: GenerateRankingCompetitionComponent },
  { path: 'list-member-hunting/:id', component: ListMemberHuntingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
