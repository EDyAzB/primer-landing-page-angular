import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/products.models';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products-datail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products-datail.component.html',
  styleUrl: './products-datail.component.css'
})
export class ProductsDatailComponent implements OnInit{

looding:boolean = true;
public product?: Product;


private _route = inject(ActivatedRoute); 
private _apiServisis = inject(ApiService)

ngOnInit(): void{
this._route.params.subscribe(params => {
 this._apiServisis.getProduct(params['id']).subscribe((data: any) =>{
this.product = data
 this.looding = false;
 })



})
}



}
 