import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ReaderComponent } from './reader/reader.component';
import { WriterComponent } from './writer/writer.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'writer', component: WriterComponent},
  {path: 'reader', component: ReaderComponent},

  {path: '**', component: WriterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
