import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/producto';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
  //providers: [ProductService]
})

export class ProductListComponent implements OnInit {

  @Input('datos')public products:IProduct[];
  imageWidth: number = 100;
  imageMargin: number = 20;
  showImage: boolean = false;

  toggleImage(): void{
    this.showImage=!this.showImage;
  }

  constructor(private productService: ProductService) { 
    this.productService.getProducts().subscribe((res: any[]) => {
      this.productService.products = res;
      this.productService.filteredProducts = res;
      console.log(this.productService.products);
    },
      err => console.log(err)
    )
  }

  ngOnInit() {
  }

  deleteProduct(id: number){
    console.log(id);
    this.productService.deleteProduct(id).subscribe(()=>{
      return this.productService.getProducts().subscribe((res:any[]) => {
        this.productService.products = res;
        //this.filteredProducts = res;
      },
      err => console.log(err));
    })
  }

  updateProduct(id:number, producto:IProduct){
    let datos:any= {
      productName: 'Producto' + Math.round(Math.random() * (100 - 1) + 1),
      productCode: this.productService.generarCodigo(),
      releaseDate: '2019-05-29',
      price: Math.round(Math.random() * (130 - 20) + 20),
      description: 'Producto de prueba 2',
      starRating: Math.round(Math.random() * (200 - 1) + 1),
      imageURL: ''
    }

    this.productService.updateProduct(id, datos).subscribe(()=>{
      return this.productService.getProducts().subscribe((res:any[])=>{
        this.productService.products = res;
        //this.filteredProducts = res;
      },
      err => console.log(err));
    })
  }

}
