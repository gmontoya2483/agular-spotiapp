import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/'
  token: string = 'BQD_VA8O9o8azJeex-HZ7o6Gjt8opDt8oq-BkuVSJICzLZR78UvTg5f_cX7WBsC7yJPxv3ErWMLMesQHCXo'

  constructor( public http:HttpClient) {
    console.log ('Servicio Spotify Listo');
  }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'authorization':'Bearer ' + this.token
    });

    return headers;
  }

  getTop(id: string){

    let url:string = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;
    let headers = this.getHeaders();

    return this.http.get(url,{ headers })
          .map((resp:any) => {return resp.tracks});
  }

  getArtista(id: string){
    let url:string = `${ this.urlSpotify }artists/${ id }`;
    let headers = this.getHeaders();

    return this.http.get(url,{ headers });
      //.map((resp:any) => {
      //  this.artistas = resp.artists.items;
      //  return this.artistas;
      //});

  }

  getArtistas(termino: string){

    let url:string = `${ this.urlSpotify }search?query=${ termino }&type=artist&offset=0&limit=20`;
    let headers = this.getHeaders();

    return this.http.get(url,{ headers })
      .map((resp:any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      });
  }

}
