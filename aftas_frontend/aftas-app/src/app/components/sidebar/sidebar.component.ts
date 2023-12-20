import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() IsOpned = false;

  competitionsDropdownOpen = false;
  toggleCompetitionsDropdown() {
    this.competitionsDropdownOpen = !this.competitionsDropdownOpen;
  }
}
