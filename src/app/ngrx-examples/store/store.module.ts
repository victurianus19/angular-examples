import { NgModule } from '@angular/core';
import { Store } from '@ngrx/store';


@NgModule({
    declarations: [],
    imports: [
    ],
    providers: [
    //   {
    //     provide: HAMMER_GESTURE_CONFIG,
    //     useClass: CustomHammerConfig
    //   }
    ],
    exports: [
    ]
  })
  export class StoreModule {
      constructor(public store: Store<any>) {
      }
  }
