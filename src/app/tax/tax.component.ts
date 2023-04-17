import { Component } from '@angular/core';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent {
  taxName: String = "";
  taxNumber: number = -1;

  getName(event: any) {
    this.taxName = event.target.value;
    console.log(this.taxName);
  }

  getNumber(event: any) {
    this.taxNumber = Number(event.target.value);
    console.log(this.taxNumber);
  }

}
