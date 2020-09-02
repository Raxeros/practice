import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes } from '@angular/router'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { WebservicesComponent } from './webservices/webservices.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';





const routes:Routes =[{ path: '', redirectTo: '/home', pathMatch: 'full'},
{path:'home', component:HomeComponent},
{path:'projects', component:ProjectsComponent},
{path:'services', component:WebservicesComponent},
{path:'about',component:AboutComponent},
{path:'contact', component:ContactComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    WebservicesComponent,
    AboutComponent,
    ContactComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation:false} ),
    ReactiveFormsModule,
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
