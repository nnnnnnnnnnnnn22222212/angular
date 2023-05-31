import { Component } from '@angular/core';
import { Products } from 'src/app/common/main';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/serviceproduct.service';
import { Router } from '@angular/router';

// import { producttt } from 'src/app/data/main';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  product: Products | undefined;

  getProductById(id: string): void {
    this.productService.getProduct(id).subscribe(
      (response) => {
        this.product = response.data;
        if (this.product) {
          this.currentImageUrl = this.product.imgUrl[0];
        }
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id);
      if (id) {
        this.getProductById(id);
      }
    });
  }

  currentImageUrl: string | undefined;

  changeBigImage(url: string) {
    this.currentImageUrl = url;
  }
  sizes: string[] = ['M', 'L', 'XL', 'XXL'];
  selectedSize: string = 'M';

  selectSize(size: string): void {
    this.selectedSize = size;
  }
}
