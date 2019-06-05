import { Component, OnInit } from '@angular/core';
import { IProduct } from './producto';
import { ProductListComponent} from './product/product-list/product-list.component';
import {ProductService} from './product/product.service';
import { ModalAddService } from './services/modal-add.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})

export class AppComponent implements OnInit{
  
  title = 'Empresa ACME';
  _listFilter: string;
  //filteredProducts: IProduct[];
  //products: IProduct[];

  constructor(private productService: ProductService,
              private modalAddService: ModalAddService){}
  today: number = Date.now();

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.productService.filteredProducts=
        this._listFilter ? this.performFilter(this.listFilter) :
                          this.productService.products;
  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase(); //convierte todos los caracteres de filtraje en minusculas
    return this.productService.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);// función flecha anonima que recibe como parametro el arreglo productos
  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((res: any[]) => {
      this.productService.products = res;
      this.productService.filteredProducts = res;
      console.log(this.productService.products);
    },
      err => console.log(err)
    )
    this.productService.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) :this.productService.products;
  }

  crearProducto(){
    let datos: any = {
      name: 'Producto'+ Math.round(Math.random()* (100 -1)+1),
      code: this.productService.generarCodigo(),
      date: '2019-05-29',
      price: Math.round(Math.random() * (130-20)+20),
      description: 'Producto de prueba',
      rating: Math.round(Math.random()* (200-1)+1),
      image:''
    };
    this.guardarProducto(datos);
  }

  /*rand_code(chars,lon): string{
    let code = "";
    for(let x =0; x < lon; x++){
      let rand = Math.floor(Math.random()* chars.length);
      code += chars.substr(rand,1);
    }
    console.log(code);
    return code;    
  }

  generarCodigo(): string{
    return this.rand_code('ABCDEFGHIJKLMNOPQRSTUVYZ', 3)+ '-' + this.rand_code('0123456789',4);
  }  */

  guardarProducto(producto: IProduct){
    this.productService.saveProduct(producto).subscribe(()=>{
      return this.productService.getProducts().subscribe((res:any[]) =>{
        this.productService.products= res;
        this.productService.filteredProducts = res;
      },
      err => console.log(err));
    })
  }

  abrirModal(){
    this.modalAddService.mostrarModal();
  }

}
