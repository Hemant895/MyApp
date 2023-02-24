import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { APIComponent } from './api/api.component';
import {HttpClientModule} from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphsComponent } from './graphs/graphs.component';
import { ChartModule } from 'angular2-chartjs';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { PostapiComponent } from './postapi/postapi.component';
import { LeavesComponent } from './leaves/leaves.component';
import { Page404Component } from './page404/page404.component';
// import { ApplyComponent } from './leaves/apply/apply.component';
// import { BalanceComponent } from './leaves/balance/balance.component';
// import { Page404leavesComponent } from './leaves/page404leaves/page404leaves.component';
// import { CasualComponent } from './leaves/balance/casual/casual.component';
// import { EarnedComponent } from './leaves/balance/earned/earned.component';
// import { Page404balanceComponent } from './leaves/balance/page404balance/page404balance.component';
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    APIComponent,
    TableComponent,
    GraphsComponent,
    NavigationComponent,
    DashComponent,
    CardComponent,
    PostapiComponent,
    LeavesComponent,
    Page404Component,
    // ApplyComponent,
    // BalanceComponent,
    // Page404leavesComponent,
    // CasualComponent,
    // EarnedComponent,
    // Page404balanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
    ChartModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
