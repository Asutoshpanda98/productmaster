import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  products:any[]=[
    {
      "productId":"qwe",
      "productName":"fan",
      "Price":123
    },
    {
      "productId":"err",
      "productName":"tin",
      "Price":345
    },
    {
      "productId":"sdx",
      "productName":"tin",
      "Price":6787
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
