import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent} from './dashboard/dashboard.component';
import { HomeComponent} from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { FornecedorComponent } from './fornecedores/fornecedor/fornecedor.component';


const appRoutes: Routes =  [
    {path:'dashboard', component: DashboardComponent},
    {path: 'home', component: HomeComponent},
    { path: 'usuario', component: UsuariosComponent },
    { path: 'novousuario', component: UsuarioComponent },
    { path: '', component:LoginComponent},
    {path: 'fornecedor', component: FornecedorComponent} 


];
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

