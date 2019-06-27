import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navegar(){
    this.router.navigate(['product/product-list']);
     //this.router.navigate(['product/product-list'],list); para pasar parámetros
  }
}
