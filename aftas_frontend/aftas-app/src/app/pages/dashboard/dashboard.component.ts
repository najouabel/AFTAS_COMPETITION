import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
IsOpenedSideBar = false;
  ToggelSideMenu() {
    console.log("gg")
    this.IsOpenedSideBar = !this.IsOpenedSideBar;
  }
}
