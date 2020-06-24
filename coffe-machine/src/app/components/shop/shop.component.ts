import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { environment as env } from '../../../environments/environment';
import { LocalStorageService as ls } from '../../services/local-storage.service'; 

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  private productsData: Array<any>;
  private extrasData: Array<any>;
  private selectedProduct: Array<any>;
  
  constructor(private service: ApiService, private ls:ls) {}

  ngOnInit(): void {
    this.selectedProduct = [];
    this.fetchProducts();
    this.fetchExtras();
  }

  public fetchProducts(): void{
    this.service.getUrl(env.endpoint._get.getProducts).then(response => {
          this.productsData = response;
          this.setInitialSelectedValues(this.productsData);
    }).catch( error => {
          console.log("error obteniendo los productos");
    });
  }

  public fetchExtras(): void {
    this.service.getUrl(env.endpoint._get.getExtras).then(response => {
          this.extrasData = response;
          this.setInitialSelectedValues(this.extrasData);
    }).catch( error => {
          console.log("error obteniendo los extras");
    });
  }


  public setInitialSelectedValues(array: any): void{
      array.forEach(element => {
        element['selected'] = false;
      });
  }

  public addOrQuitProduct(product: any): void{
    if(this.selectedProduct.indexOf(product)==-1){
        this.selectedProduct.push(product);
        product['selected'] = true;
    }else{
        this.selectedProduct = this.selectedProduct.filter(function(item) {
        return item !== product;
      });
        product['selected']=false;
    }
    this.updateCartList();
  }

  
  public updateCartList():void{
    this.ls.removeItem('cart-list');
    this.ls.setItem('cart-list',  this.selectedProduct).subscribe(data =>{});
  }

  public getproductsData(){
    return this.productsData;
  }

  public getextrasData(){
    return this.extrasData;
  }

}
