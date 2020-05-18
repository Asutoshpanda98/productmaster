import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { NavServiceService } from '../_services/nav-service.service';

@Component({
  selector: 'app-product-master-home',
  templateUrl: './product-master-home.component.html',
  styleUrls: ['./product-master-home.component.css']
})
export class ProductMasterHomeComponent implements OnInit {

  content = '';

  constructor(private userService: UserService ,  public nav:NavServiceService) { }

  ngOnInit(): void {
    this.userService.getProductMasterBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
