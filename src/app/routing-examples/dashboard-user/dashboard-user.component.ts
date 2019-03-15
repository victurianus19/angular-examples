import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router,
    private route: ActivatedRoute) { }

  public ngOnInit() {
  }

  /**
   * User can log out
   */
  public logOut(): void {
    this.authService.logout();
    console.log('You are logged out!');
    this.router.navigate(['']);
  }

  public goToProduct(id: string): void {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }

}
