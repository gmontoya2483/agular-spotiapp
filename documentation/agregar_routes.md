## 01 - Agregar las rutas

### 1. Crear el archivo ```src/app/app.routes.ts```
### 2. Agregar las rutas al archivo ```src/app/app.routes.ts```

```typescript
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
```

> Sepuede utilizar en Atom el Snipper -> ng2-routes + tab

 ### 3. Importar las rutas al archivo ```app.modules.ts```
 
 ```typescript
   import {app_routing} from './app.routes';
   
   ....
   
   @NgModule({
     ...
     
     imports: [
    BrowserModule,
    app_routing
  ],
  
  ...
  
  })
 ```
 
 ```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {app_routing} from './app.routes';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 ```
 
### 4. indicar donde se van a renderizar las rutas (generalmente dentro de ```app.component.html```)

```html
  <app-navbar></app-navbar>

  <div class="container">
    <router-outlet></router-outlet>
  </div>

```
 
### 5. Navegar a los diferentes routes

```html
<!-- Image and text -->
<nav class="navbar navbar-dark bg-dark navbar-expand-lg">
  <a class="navbar-brand" >
    <img src="assets/img/banner-ico.png" width="30" height="30" class="d-inline-block align-top" alt="SpotiApp">
    SpotiApp
  </a>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" routerLink="home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" [routerLink]="['search']">Search</a>
      </li>
    </ul>
  </div>
</nav>
```

> **_routerLink="home_** Navega a la ruta home  
> **_[routerLink]="['search']"_** Navega a la ruta search  y permite construir el route.  Por ejemplo: _[routerLink]="['search',1]"_ contruye la ruta _#/search/1_  
> **_routerLinkActive="active"_** Le agrega la la clase active al elemento que esta activo.  Se le puede colocar cualquier clase.