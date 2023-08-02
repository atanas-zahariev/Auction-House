import { Component,  } from '@angular/core';
import { ItemsService } from '../items.service';
import { ActivatedRoute } from '@angular/router';
import { itemI } from '../shared/interfaces/itemInterfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {
  isOwner: boolean = false

  user: boolean = false

  item: itemI | null = null;

  currentHigherOffer: boolean = false

  userFirstName:string | null = null

  offerForm = new FormGroup({
    price: new FormControl('')
  })

  constructor(private itemService: ItemsService, private route: ActivatedRoute, private authService: AuthService) {
    const id = this.route.snapshot.params['id']

    this.itemService.details(id).subscribe(
      (data) => {
        if (data.user) {
          this.userFirstName = data.user.username;
          this.isOwner = data.item.owner == data.user._id
          this.user = true
        }
        this.currentHigherOffer = data.item.bider?._id == data.user?._id
        this.item = data.item
      },
      (error) => {
        this.authService.getError(error.error)
      }
    )
  };

  onSubmit() {
    const id = this.route.snapshot.params['id']
    const {price} = this.offerForm.value

    if (Number(price) <= 0) {
      this.authService.Error = ['Price must be greather than zero']
      return;
    }

    if(this.item?.price){
      if(Number(price) < this.item?.price){
        this.authService.Error = ['You bid must be higher, see the existing one.']
        return
      }
    }
  
    this.itemService.offer(id, this.offerForm.value).subscribe(
      (data) => {        
        this.currentHigherOffer = data.updatedItem.bider?._id == data.user?._id
        this.item = data.updatedItem
        this.authService.cleanErrors()
      },
      (error) => {
      this.authService.getError(error.error)
      }
    )

  }
}
