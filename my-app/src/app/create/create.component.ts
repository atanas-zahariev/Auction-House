import { Component } from '@angular/core';
import { ItemsService } from '../items.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(
    private itemsService: ItemsService,
    private route: Router,
    private fb: FormBuilder
  ) { }

  createForm = this.fb.group({
    title: [''],
    category: [''],
    imgUrl: [''],
    price: [''],
    description: ['']
  })

  onSubmit() {
    const { title, category, imgUrl, price, description } = this.createForm.value;

    const arrOfCategories = ['vehicles', ' real', 'estate', 'electronics', 'furniture', 'other']

    const IMAGE_URL = /^https?:\/\/.*/i

    if (Object.values(this.createForm.value).some(x => !x)) {
      this.itemsService.Error = ['All fields are required']
      return;
    }

    if (title?.length) {
      if (title.length < 4) {
        this.itemsService.Error = ['Title must be at least 4 characters.']
        return;
      }
    }

    if (category) {
      if (!arrOfCategories.includes(category)) {
        this.itemsService.Error = ['It is not in the list of categories.']
        return;
      }
    }

    if (imgUrl) {
      if (!IMAGE_URL.test(imgUrl)) {
        this.itemsService.Error = ['Invalid Url.']
        return
      }
    }

    if (price) {
      console.log(price)
      if (Number(price) <= 0) {
        this.itemsService.Error = ['This price cannot be real.']
        return;
      }
    }

    if (description) {
      if (description.length > 200) {
        this.itemsService.Error = ['Description must be at most 200 characters.']
        return;
      }
    }


    this.itemsService.create(this.createForm.value).subscribe(
      (data) => {
        this.itemsService.cleanErrors()
        this.route.navigate(['/catalog'])
      },
      (error) => {
        this.itemsService.getError(error.error)
      }
    )
  }
}
