import { Component, OnInit } from '@angular/core';
import { LocalStorageService as ls } from '../services/local-storage.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private ls:ls
  ) { }

  ngOnInit(): void {
    this.ls.removeItem('cart-list');
    this.ls.setItem('cart-list',[]).subscribe(e => {});
  }

}
