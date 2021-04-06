import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RvfHtmlComponent } from './pages/rvf-html/rvf-html.component';

const routes: Routes = [
  { path: '', redirectTo: '/rvf-html', pathMatch: 'full' },
  {path: "rvf-html", component: RvfHtmlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
