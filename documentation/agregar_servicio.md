# Servicios (Providers)

### ¿Qué es un servicio?
Es donde debería estar colocado el trabajo duro de la aplicación. Los componentes deberían ser lo mas simple posibles. Dentro de los componentes debe haber la menor cantidad de lógica posible y debe ser relativa al componente actual. En caso que la lógica afecte a mas de un componente se debe crear un servicio.  
Los servicios pueden tener un alcance de toda la aplicación cuando se lo referencia en el archivo ```app.module.ts``` ó para algunos componentes particulares cuando se lo referencia en los componentes, por ejemplo:

```typescript
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "./services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
  provider: [SpotifyService]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

## 01 - Agregar servicio

### 1. Ejecutar el siguiente comando en Angular CLI ```ng g s services/spotify --spec=false```  
Este comando genera el archivo ```app/services/spotify.service.ts```con el siguiente contenido:  
```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {

  constructor() { }

}
```

### 2. Agregar las referencias al servicio dentro del archivo  ```app/app.modules.ts```  

```typescript

...

//Services
import { SpotifyService } from "./services/spotify.service";

...

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


