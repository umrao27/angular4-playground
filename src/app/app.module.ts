import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // for template driven form
import { ReactiveFormsModule } from '@angular/forms'; // for module driven form
import { HttpModule } from '@angular/http'; //import for http request to get data from 3rd party 
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { UserDataService } from './user-data.service'; // import service
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { FormPlayComponent } from './components/form-play/form-play.component';
import { ServicePlayComponent } from './components/service-play/service-play.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { SortPipe } from './app.sort';
import { SpaDemoComponent } from './spa-demo/spa-demo.component';



@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    LifecycleComponent,
    FormPlayComponent,
    ServicePlayComponent,
    ParentComponent,
    ChildComponent,

    PipesComponent,

    SpaDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'form-play',
        component: FormPlayComponent
      },
      {
        path: 'service-play',
        component: ServicePlayComponent
      }
    ])
  ],
  providers: [UserDataService], // add service
  bootstrap: [AppComponent]
})
export class AppModule { }
