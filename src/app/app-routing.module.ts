import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio1',
    pathMatch: 'full'
  },
  {
    path: 'inicio1',
    loadChildren: () => import('./pages/inicio1/inicio1.module').then( m => m.Inicio1PageModule)
  },
  {
    path: 'inicio2',
    loadChildren: () => import('./pages/inicio2/inicio2.module').then( m => m.Inicio2PageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registro2',
    loadChildren: () => import('./pages/registro2/registro2.module').then( m => m.Registro2PageModule)
  },
  {
    path: 'viajes',
    loadChildren: () => import('./pages/viajes/viajes.module').then( m => m.ViajesPageModule)
  },
  {
    path: 'ingreso-c',
    loadChildren: () => import('./pages/ingreso-c/ingreso-c.module').then( m => m.IngresoCPageModule)
  },
  {
    path: 'ingreso-p',
    loadChildren: () => import('./pages/ingreso-p/ingreso-p.module').then( m => m.IngresoPPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'mail',
    loadChildren: () => import('./pages/mail/mail.module').then( m => m.MailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
