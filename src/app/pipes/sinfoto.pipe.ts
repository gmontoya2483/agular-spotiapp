import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[]): any {
    let no_image = 'assets/img/noimage.png';

    if ( !imagenes ){
      return no_image;
    }
    return (imagenes.length > 0) ? imagenes[1].url : no_image;
  }

}
