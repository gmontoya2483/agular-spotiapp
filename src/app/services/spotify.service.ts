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
      'authorization':'Bearer BQAKEndf0pj-63E2hZUqIjpak4RiCfca4Tm0qijH46UjQzSoY8dajhcJi7-H3_OrhRwWpTJSX9_tObrTuyY'
    });

    return this.http.get(url,{ headers })
      .map((resp:any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      });
  }

}
