import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-close-offer',
  templateUrl: './close-offer.component.html',
  styleUrls: ['./close-offer.component.css']
})
export class CloseOfferComponent {
  constructor(private itemsService: ItemsService, private activRoute:ActivatedRoute,private route:Router){
    const id = this.activRoute.snapshot.params['id']
    this.itemsService.closeOffer(id).subscribe(
      (data) => {
        this.route.navigate(['/closed'])
      },
      (error) => {
        this.itemsService.getError(error.error)
      }
    )
  }
}
