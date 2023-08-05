import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
   constructor(
    private itemsService: ItemsService,
    private router: Router,
    private activRoute: ActivatedRoute
    ){
      const id = this.activRoute.snapshot.params['id']

      this.itemsService.delete(id).subscribe(
        () => {
          this.itemsService.cleanErrors()
          this.router.navigate(['/catalog'])
        },
        (error) => {
          this.itemsService.getError(error.error);
        }
      )
    }
}
