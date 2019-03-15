import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstFormComponent } from './first-form/first-form.component';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import {MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material';
import { ViewFormsComponent } from './views/view-forms/view-forms.component';
import { SecondFormComponent } from './second-form/second-form.component';
import { ThirdFormComponent } from './third-form/third-form.component';
import { FourthFormComponent } from './fourth-form/fourth-form.component';
import { BigFormComponent } from './big-form/big-form.component';
import { ViewDependencyInjectionComponent } from './views/view-dependency-injection/view-dependency-injection.component';
import { UserDiComponent } from './user-di/user-di.component';
import { UserDiInjectorComponent } from './user-di/user-di.injector.component';
import { UserService } from '../services/user.service';
import { AnalyticsDiComponent } from './analytics-di/analytics-di.component';
import { SimpleExampleHttpComponent } from './http/simple-example-http/simple-example-http.component';

// Module Http
import { HttpClientModule } from '@angular/common/http';
import { AnalyticsDIModule } from './analytics-di/analytics-di.module';
import { FirstExampleRoutingComponent } from './routing-examples/first-example-routing/first-example-routing.component';
import { ViewRoutingsComponent } from './views/view-routings/view-routings.component';
import { AuthService } from '../services/auth.service';
import { LoggedInGuard } from './guards/logged-in.guard';
import { DashboardUserComponent } from './routing-examples/dashboard-user/dashboard-user.component';
import { LoginComponent } from './routing-examples/login-second-example/login-second-example.component';
import { SecondExampleHttpComponent } from './http/second-example-http/second-example-http.component';

// Import INTERCEPTORS
import { httpInterceptorProviders } from './interceptors';
import { MessageService } from '../services/message.service';
import { ViewProductComponent } from './routing-examples/product/view-product/view-product.component';
import { ViewProductDetailComponent } from './routing-examples/product/view-product-detail/view-product-detail.component';
import { ProductsModule } from './routing-examples/product/products.module';
import { SimpleObservableComponent } from './observablesRxJS/simple-observable/simple-observable.component';
import { ViewObsRxjsComponent } from './observablesRxJS/view-obs-rxjs/view-obs-rxjs.component';
import { ViewObsRxjsEg2Component } from './observablesRxJS/view-obs-rxjs-eg2/view-obs-rxjs-eg2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstExampleNgrxComponent } from './ngrx-examples/first-example-ngrx/first-example-ngrx.component';
import { BookExampleNgrxComponent } from './ngrx-examples/book-example-ngrx/book-example-ngrx.component';
import { OperationsExampleNgrxComponent } from './ngrx-examples/operations-example-ngrx/operations-example-ngrx.component';
import { environment } from 'src/environments/environment.prod';

// Import NgRx and DevTools of NgRX
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Module NgRx-Redux to define Effects
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './ngrx-examples/effects/auth.effects';

// Module NgRX-Redux to connect Router with Store
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    FirstFormComponent,
    MenuComponent,
    ViewFormsComponent,
    SecondFormComponent,
    ThirdFormComponent,
    FourthFormComponent,
    BigFormComponent,
    ViewDependencyInjectionComponent,
    UserDiComponent,
    UserDiInjectorComponent,
    AnalyticsDiComponent,
    SimpleExampleHttpComponent,
    ViewRoutingsComponent,
    FirstExampleRoutingComponent,
    LoginComponent,
    DashboardUserComponent,
    SecondExampleHttpComponent,
    SimpleObservableComponent,
    ViewObsRxjsComponent,
    ViewObsRxjsEg2Component,
    PageNotFoundComponent,
    FirstExampleNgrxComponent,
    BookExampleNgrxComponent,
    OperationsExampleNgrxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AnalyticsDIModule, // Module to create a factory
    ProductsModule, // Module for the products
    StoreModule.forRoot(appReducers), // Module of NgRx to manage the reducers in the store
    StoreDevtoolsModule.instrument({ // Module of NgRx to provides tools and instrumentation for store
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([AuthEffects]), // Module of Effects or Epics
    StoreRouterConnectingModule.forRoot() // Connects RouterModule with StoreModule
  ],
  exports: [],
  providers: [ UserService,
    { provide: AuthService, useClass: AuthService },
    LoggedInGuard,
    MessageService,
    // With a token injects multiprovider with an array of values
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
