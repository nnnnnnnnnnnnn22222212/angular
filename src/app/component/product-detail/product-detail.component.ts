import { Component } from '@angular/core';
import { Products } from 'src/app/common/main';
import { ActivatedRoute } from '@angular/router';
import { producttt } from 'src/app/data/main';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  constructor(private route: ActivatedRoute) {}
  product: Products | undefined;
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      this.product = producttt.find((item) => item.id === id);
      // Fetch product details based on the ID and update the component's properties
    });
    if (this.product) {
      this.currentImageUrl = this.product.imgUrl[0];
    }
  }
  currentImageUrl: string | undefined;

  changeBigImage(url: string) {
    this.currentImageUrl = url;
  }
}
