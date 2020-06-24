import { Component, OnInit } from '@angular/core';
import { LocalStorageService as ls } from '../../services/local-storage.service';
import { preserveWhitespacesDefault } from '@angular/compiler';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private cartList: Array<any>;

  constructor(private ls:ls,private router:Router) { 
    this.cartList=[];
  }

  ngOnInit(): void {}

  ngOnChanges():void {}

  updateCarList():void{
    this.ls.getItem('cart-list').subscribe(e => {
      if (e) this.cartList=e;
    });
  }

  public getCartList():Array<any>{
    return this.cartList;
  }


  public verifyMainProduct():boolean{
    let isMainProduct = false;
    this.cartList.forEach(element => {
      if (element.type == 'principal'){
        isMainProduct = true;
      }
    });
    return isMainProduct;
  }


  public showBuyModal():void{
    if (this.verifyMainProduct()){
      this.showBuyConfirmation();
    }else{
      this.showMainError();
    }
  }

  public showMainError():void{
    Swal.fire({
      icon: 'error',
      title: 'No se puede efectuar la compra',
      text: 'Debe elegir al menos un producto principal'
    })
  }

  public showBuyConfirmation():void{
    let text='Usted está a punto de comprar:<br>';
    let total = 0;
    this.cartList.forEach(element => {
      text = text + element.name.toString() + ': '  
      + element.price.toString() + '$ ' 
      + "(" + element.type.toString() + ")" + '<br>';
      total = total + element.price;
      console.log(text);
    });
    text = text + '<br>total: ' + total + '$';

    Swal.fire({
      title: 'Confirmación de compra',
      html: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, confirmar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Realizado!',
          'Se ha efectuado la compra',
          'success'
        );
        setTimeout(()=> {  
          location.reload();
        }, 1000);
      }
    })
  }

  public emptyList():void{
    location.reload();
  }
}
