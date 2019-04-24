import { Component } from '@angular/core';
import { IProduct } from './producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Empresa ACME';
  products: IProduct [] = [
    {
      "productId": 1,
      "productName": "Zapatillas de lona",
      "productCode": "GND-0011",
      "releaseDate": "March 19, 2016",
      "description": "Zapatillas de lona con caña alta verde",
      "price": 19.25,
      "starRating": 3.2,
      "imageUrl": "https://cdn.pixabay.com/photo/2013/07/12/18/20/chucks-153310_960_720.png",
    },
    {
      "productId": 2,
      "productName": "Zapatillas de Runing ",
      "productCode": "GND-0032",
      "releaseDate": "May 19, 2017",
      "description": "Zapatillas Runing azul",
      "price": 23.2,
      "starRating": 3.2,
      "imageUrl": "https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_960_720.jpg",
    },
    {
      "productId": 5,
      "productName": "Reloj antiguo",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Reloj blanco de dos campanillas tipo retro.",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "https://cdn.pixabay.com/photo/2017/06/09/00/56/books-2385398_960_720.jpg"
    },
    {
      "productId": 8,
      "productName": "Cámara fotográfica",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "Cámara fotográfica digital con Zoom óptico y 16 GB de RAM interna",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "https://cdn.pixabay.com/photo/2015/06/24/13/32/camera-820018_960_720.jpg"
    },
    {
      "productId": 10,
      "productName": "Taladro de percusión",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Taladro eléctrico de percusión, 200 RPM, marca DrillBill",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "https://cdn.pixabay.com/photo/2013/07/12/19/30/power-drill-154903_960_720.png"
    }
  ]
}
