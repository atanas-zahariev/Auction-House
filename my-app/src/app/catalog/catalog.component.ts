import { Component } from '@angular/core';
import { ItemsService } from '../items.service';
import {  itemI } from '../interfaces/itemInterfaces';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  items:itemI[] = []
  hasLenght:boolean = false
  constructor(private itemService : ItemsService) { 

    this.itemService.cleanErrors();

    this.itemService.catalog().subscribe(
      (data) => {
        this.items = data.items;
        if(this.items.length > 0 ){
          this.hasLenght = true;
        }
      },
      (error) => {
        this.itemService.getError(error.error) ;
      }
    )
  };

}
