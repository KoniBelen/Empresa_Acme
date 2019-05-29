import { Component } from '@angular/core';
import { IProduct } from './producto';
import {OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'Empresa ACME';
  _listFilter: string;
  filteredProducts: IProduct[];
  today: number = Date.now();

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts=
        this._listFilter ? this.performFilter(this.listFilter) :
                          this.products;
  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase(); //convierte todos los caracteres de filtraje en minusculas
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);// función flecha anonima que recibe como parametro el arreglo productos
  }

  ngOnInit(): void {
     this.filteredProducts = this.products;
  }
  products: IProduct [] = [
    {
      "productId": 1,
      "productName": "Zapatillas de lona",
      "productCode": "GND-0011",
      "releaseDate": "March 19, 2016",
      "description": "Zapatillas de lona con caña alta verde",
      "price": 19.25,
      "starRating": 200,
      "imageUrl": "https://cdn.pixabay.com/photo/2013/07/12/18/20/chucks-153310_960_720.png",
    },
    {
      "productId": 2,
      "productName": "Zapatillas de Runing ",
      "productCode": "GND-0032",
      "releaseDate": "May 19, 2017",
      "description": "Zapatillas Runing azul",
      "price": 23.2,
      "starRating": 38,
      "imageUrl": "https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_960_720.jpg",
    },
    {
      "productId": 5,
      "productName": "Reloj antiguo",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Reloj blanco de dos campanillas tipo retro.",
      "price": 8.9,
      "starRating": 130,
      "imageUrl": "https://cdn.pixabay.com/photo/2017/06/09/00/56/books-2385398_960_720.jpg"
    },
    {
      "productId": 8,
      "productName": "Cámara fotográfica",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "Cámara fotográfica digital con Zoom óptico y 16 GB de RAM interna",
      "price": 11.55,
      "starRating": 85,
      "imageUrl": "https://www.alca.cl/media/2017/11/1068c001_big.jpg"
    },
    {
      "productId": 10,
      "productName": "Taladro de percusión",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Taladro eléctrico de percusión, 200 RPM, marca DrillBill",
      "price": 35.95,
      "starRating": 45,
      "imageUrl": "https://www.pinahermanos.cl/pinahermanos-cl/2012-large_default/taladro-percusion-1-2-600w-stdh6013-stanley.jpg"
    }
  ]
}
