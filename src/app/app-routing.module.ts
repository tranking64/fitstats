import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
     pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgot-pw',
    loadChildren: () => import('./pages/forgot-pw/forgot-pw.module').then( m => m.ForgotPwPageModule)
  },
  {
    path: 'reset-pw',
    loadChildren: () => import('./pages/reset-pw/reset-pw.module').then( m => m.ResetPwPageModule)
  },
  {
    path: 'change-acc-details',
    loadChildren: () => import('./pages/change-acc-details/change-acc-details.module').then( m => m.ChangeAccDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
