import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { itemI } from '../../shared/interfaces/itemInterfaces';
import { ErrorService } from 'src/app/services/error.service';
import { IItemsModuleState } from '../+store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userClosedOffersLength } from '../+store/actions';

@Component({
  selector: 'app-user-closed-offers',
  templateUrl: './user-closed-offers.component.html',
  styleUrls: ['./user-closed-offers.component.css']
})
export class UserClosedOffersComponent {
  items: itemI[] = []
  hasLenght: Observable<boolean> = this.store.select(state => state.items.closed.hasClosed)

  constructor(
    private itemsService: ItemsService,
    private errorService: ErrorService,
    private store:Store<IItemsModuleState>
    ) {
    this.itemsService.userClosedOffers().subscribe(
      (data) => {
        this.items = data.items;
        if (this.items.length > 0) {
          this.store.dispatch(userClosedOffersLength())
        }

      },
      (error) => {
        this.errorService.getError(error.error)
      }
    )
  }
}
