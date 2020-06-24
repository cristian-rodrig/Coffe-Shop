import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss']
})
export class CoffeeCardComponent implements OnInit {

  @Input() product: any;
  @Output() public addListEventEmiter;
  @Output() public quitListEventEmiter;

  constructor() { 
    this.addListEventEmiter = new EventEmitter();
    this.quitListEventEmiter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public addProduct(product: any):void{
    this.addListEventEmiter.emit(product);
  }

  public quitProduct(product: any):void{
    this.quitListEventEmiter.emit(product);
  }

}
