import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[]=[];
  
  //The addToCart() method appends a product to an array of items
  addToCart(product: Product) {
    this.items.push(product);
  }
  /*The getItems() method collects the items users add to the cart and 
  returns each item with its associated quantity*/
  getItems() {
    return this.items;
  }
  //The clearCart() method returns an empty array of items, which empties the cart
  clearCart() {
    this.items=[];
    return this.items;
  }
}
