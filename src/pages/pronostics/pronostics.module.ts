import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PronosticsPage } from './pronostics';

@NgModule({
  declarations: [
    PronosticsPage,
  ],
  imports: [
    IonicPageModule.forChild(PronosticsPage),
  ],
})
export class PronosticsPageModule {}
