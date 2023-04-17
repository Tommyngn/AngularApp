import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ProductInfo {
  productIndex: number,
  productName: string,
  productPrice: number,
  productTax: number,
  edit: boolean
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  taxPercentage: number = 0;
  taxName: string = "";
  productCount = 1;
  productList: Array<ProductInfo> = [
    {productIndex: 0, productName: 'Example1', productPrice: 123, productTax: -1, edit: false}
  ];


  constructor(route: ActivatedRoute) {
    this.taxPercentage = Number(route.snapshot.paramMap.get('taxP'))
    this.taxName = String(route.snapshot.paramMap.get('taxN'))
  }

  addProduct(event: any) {
    event.preventDefault()
    let newName: string = event.target.form[0].value;
    let newPrice: number = Number(event.target.form[1].value);
    console.log(newName);
    console.log(newPrice);
    this.productList.push({
      productIndex: this.productCount,
      productName: newName,
      productPrice: newPrice,
      productTax: -1,
      edit: false

    })
    this.productCount += 1;
  }

  switchToEdit(index: number) {
    this.productList.forEach(element => {
      if (element.productIndex === index) {
        element.edit = true;
      }
      
    });
  }

  addTax(index: number) {
    this.productList.forEach(element => {
      if (element.productIndex === index){
        element.productTax = this.taxPercentage;
      }
      
    });
  }

  removeTax(index: number) {
    this.productList.forEach(element => {
      if (element.productIndex === index) {
        element.productTax = -1;
      }
    })
  }

  editProduct(event: any, index: number) {
    event.preventDefault();
    let newName = event.target.form[0].value;
    let newPrice = event.target.form[1].value;

    this.productList.forEach(element => {
      if (element.productIndex === index) {
        if (newName !== '' && newPrice !== '') {
          element.productName = newName;
          element.productPrice = Number(newPrice);
        } else if (newName !== '') {
          element.productName = newName
        } else if (newPrice !== '') {
          element.productPrice = newPrice;
        }
        element.edit = false
      }
      
    });
  }

}
