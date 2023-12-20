import { Component } from '@angular/core';
import { Competition } from '../../models/interfaces/competition';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.css']
})
export class AddCompetitionComponent {

  IsOpenedSideBar = false;
  constructor(private competitionService: CompetitionService) {}

  onCompetitionAdded(newCompetition: Competition) {
    this.competitionService.addCompetition(newCompetition).subscribe(
      (response) => {
        console.log('New competition added:', response);
      },
      (error) => {
        // Gérez ici les erreurs d'ajout de compétition
        console.error('Error adding competition:', error);
      }
    );
  }
  ToggelSideMenu() {
    console.log("gg")
    this.IsOpenedSideBar = !this.IsOpenedSideBar;
  }

}
