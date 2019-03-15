import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FirstFormComponent } from './first-form/first-form.component';
import { ViewFormsComponent } from './views/view-forms/view-forms.component';
import { SecondFormComponent } from './second-form/second-form.component';
import { ThirdFormComponent } from './third-form/third-form.component';
import { FourthFormComponent } from './fourth-form/fourth-form.component';
import { BigFormComponent } from './big-form/big-form.component';
import { ViewDependencyInjectionComponent } from './views/view-dependency-injection/view-dependency-injection.component';
import { AnalyticsDiComponent } from './analytics-di/analytics-di.component';
import { SimpleExampleHttpComponent } from './http/simple-example-http/simple-example-http.component';
import { ViewRoutingsComponent } from './views/view-routings/view-routings.component';
import { FirstExampleRoutingComponent } from './routing-examples/first-example-routing/first-example-routing.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { DashboardUserComponent } from './routing-examples/dashboard-user/dashboard-user.component';
import { LoginComponent } from './routing-examples/login-second-example/login-second-example.component';
import { SecondExampleHttpComponent } from './http/second-example-http/second-example-http.component';
import {
  routesProduct as childRoutes
} from './routing-examples/product/products.module';
import { SimpleObservableComponent } from './observablesRxJS/simple-observable/simple-observable.component';
import { ViewObsRxjsComponent } from './observablesRxJS/view-obs-rxjs/view-obs-rxjs.component';
import { ViewObsRxjsEg2Component } from './observablesRxJS/view-obs-rxjs-eg2/view-obs-rxjs-eg2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstExampleNgrxComponent } from './ngrx-examples/first-example-ngrx/first-example-ngrx.component';
import { BookExampleNgrxComponent } from './ngrx-examples/book-example-ngrx/book-example-ngrx.component';
import { OperationsExampleNgrxComponent } from './ngrx-examples/operations-example-ngrx/operations-example-ngrx.component';

// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

// import { dashboardRoutes } from './dashboard/dashboard.routes';

const routes: Routes = [
  { path: '', component: ViewFormsComponent },
  // { path: 'menu', component: MenuComponent },
  { path: 'firstForm', component: FirstFormComponent },
  { path: 'secondForm', component: SecondFormComponent },
  { path: 'thirdForm', component: ThirdFormComponent },
  { path: 'fourthForm', component: FourthFormComponent },
  { path: 'bigForm', component: BigFormComponent },
  { path: 'dependencyInjection', component: ViewDependencyInjectionComponent },
  { path: 'dependencyInjectionFactory', component: AnalyticsDiComponent },
  { path: 'firstHttp', component: SimpleExampleHttpComponent },
  { path: 'secondHttp', component: SecondExampleHttpComponent },
  { path: 'firstRouting', component: ViewRoutingsComponent, data: { animation: 'routing1' } },
  { path: 'firstRouting/:id', component: FirstExampleRoutingComponent },
  { path: 'loginSecondRouting', component: LoginComponent, data: { animation: 'routing2' } },
  { path: 'viewObsRxjs', component: ViewObsRxjsComponent },
  { path: 'viewAdvancedObsRxjs', component: ViewObsRxjsEg2Component},
  { path: 'viewNgrx', component: FirstExampleNgrxComponent},
  { path: 'bookSearchNgrx', component: BookExampleNgrxComponent},
  { path: 'operationNgrx', component: OperationsExampleNgrxComponent},
  // {
  //     path: '',
  //     component: DashboardComponent,
  //     children: dashboardRoutes
  // },
  {
    path: 'dashboardUser',
    component: DashboardUserComponent,
    canActivate: [LoggedInGuard],
    children: childRoutes // Nested
  },
  // Nested
  // {
  //   path: 'products',
  //   component: DashboardUserComponent,
  //   children: childRoutes
  // },
  // { path: '**', redirectTo: '' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
