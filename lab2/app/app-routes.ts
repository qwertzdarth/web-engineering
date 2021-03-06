import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview.component';
import { LoginComponent } from './components/login.component';
import { OptionsComponent } from './components/options.component';
import {DetailsComponent} from "./components/details.components";
import {DeviceResolver} from "./services/device-resolver.service";
import {NgModule} from "@angular/core";
import {DeviceService} from "./services/device.service";

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'overview', component: OverviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'overview/:id',
    component: DetailsComponent,
    resolve: {
      device: DeviceResolver
    }
  },
];