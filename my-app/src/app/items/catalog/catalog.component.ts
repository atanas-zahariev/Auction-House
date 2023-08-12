import { Component } from '@angular/core';
import { itemI } from '../../shared/interfaces/itemInterfaces';
import { ItemsService } from 'src/app/services/items.service';
import { ErrorService } from 'src/app/services/error.service';
import { Store } from '@ngrx/store';
import { IItemsModuleState } from '../+store';
import { Observable } from 'rxjs';
import { verifyLength } from '../+store/actions';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  items: itemI[] = []

  hasLenght: Observable<boolean> = this.store.select(state => state.items.catalog.isLengt)
  
  constructor(
    private itemService: ItemsService,
    private errorService: ErrorService,
    private store: Store<IItemsModuleState>
  ) {

    this.errorService.cleanErrors();

    this.itemService.catalog().subscribe(
      (data) => {
        this.items = data.items;
        if (this.items.length > 0) {
          this.store.dispatch(verifyLength())
        }
      },
      (error) => {
        this.errorService.getError(error.error);
      }
    )
  };

}
