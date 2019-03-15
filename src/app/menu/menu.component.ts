import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit() {
  }

  public goToFirstForm() {
    this.router.navigate(['/firstForm']);
  }

  public goToInitialPage() {
    this.router.navigate(['']);
  }

  public goToSecondForm() {
    this.router.navigate(['/secondForm']);
  }

  public goToThirdForm() {
    this.router.navigate(['/thirdForm']);
  }

  public goToFourthForm() {
    this.router.navigate(['/fourthForm']);
  }

  public goToBigForm() {
    this.router.navigate(['/bigForm']);
  }

  public goToFirstDI() {
    this.router.navigate(['/dependencyInjection']);
  }

  public goToSecondDIFactory() {
    this.router.navigate(['/dependencyInjectionFactory']);
  }

  public goToFirstHttpExample() {
    this.router.navigate(['/firstHttp']);
  }

  public goToSecondHttpExample() {
    this.router.navigate(['/secondHttp']);
  }

  public goToFirstRoutingExample() {
    this.router.navigate(['/firstRouting']);
  }

  public goToSecondRoutingExample() {
    this.router.navigate(['/loginSecondRouting']);
  }

  public goToDashBoardUserRoutingExample() {
    this.router.navigate(['/dashboardUser']);
  }

  public goToSimpleObsRxjsExample() {
    this.router.navigate(['/viewObsRxjs']);
  }

  public goToSecondObsRxjsExample() {
    this.router.navigate(['/viewAdvancedObsRxjs']);
  }

  public goToSimpleNgRXExample() {
    this.router.navigate(['/viewNgrx']);
  }

  public goToSearchBookNgRXExample() {
    this.router.navigate(['/bookSearchNgrx']);
  }

  public goToOperationNgRXExample() {
    this.router.navigate(['/operationNgrx']);
  }

}
