import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor( public http:HttpClient) {
    console.log ('Servicio Spotify Listo');
  }

  getArtistas(termino: string){

    let url:string = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=20`;
    let headers = new HttpHeaders({
      'authorization':'Bearer BQBl8nZCtKGSBjOlKUfVnXV7N5UnJKUcFgNVdP5oz0pC0DYvWAEZN3Gg7vQ4jv-zNmLWDMXm9gzQWnPllVY'
    });

    return this.http.get(url,{ headers })
      .map((resp:any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      });
  }

}
