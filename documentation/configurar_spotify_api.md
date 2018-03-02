# Configurar Spotify API

## Crear la aplicación

1. Abrir el sitio  [Spotify Developer](https://developer.spotify.com/).
2. Ir a **_My Apps_**
3. Crear una nueva aplicación para obtener el **CLIENT ID** y el **CLIENT SECRET**, necesarios para realizar consultas a la API.

## Obtener el token

Esta aplicacion tiene como finalidad el uso de distintos componenetes de Angular, sin embargo no impluye las peticiones POST.  
Para obtener el token es necesario relizar una peticion **POST** a la siguiente url y con los siguientes parametros en el **_Header_** y en el **_Body_**.

>**POST:** https://accounts.spotify.com/api/token  
>**HEADERS:**   
>>**Key:** Content-Type, **value:** application/x-www-form-urlencoded  

>BODY:  
>>**Key:** grant_type, **value:** client_credentials  
>>**Key:** client_id, **value:** XXXXXXXXXXXXXXXXXXXXXXXXXXXX  
>>**Key:** client_secret, **value:** XXXXXXXXXXXXXXXXXXXXXXXXX  

Una vez que se envía la petición **POST**, la API devuelve un **JSON** con el token. Este token es valido por 1 hora y cada vez que expira se debe obtener uno nuevo.  

```json
{
    "access_token": "BQBfzmA0MBF1EHvVNUYNaxb17LwykXWC0YJr56QLMzOWdV3Q6jjbC6l29qnLDywCOZPQGAsW0ThtZwWiINo",
    "token_type": "Bearer",
    "expires_in": 3600,
    "scope": ""
}
```
## Utilizar el Token de spotify

Una vez obtenido el token, se debe agregar dentro del archivo ```spotify.service.ts``` en la clase ```SpotifyService```

```typescript

...
...

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/'
  token: string = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

  constructor( public http:HttpClient) {
    console.log ('Servicio Spotify Listo');
  }
  
  ...
  ...
}
```

