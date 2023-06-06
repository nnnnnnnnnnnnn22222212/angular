import { Component } from '@angular/core';
import { Products } from 'src/app/common/main';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/serviceproduct.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { SharedService } from 'src/app/shared.service';

// import { producttt } from 'src/app/data/main';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  username: string | null | undefined;
  id: string | undefined;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private sharedService: SharedService
  ) {}
  product: Products | undefined;
  cart: any[] = []; // Array to store cart items
  quantity: number = 1; // Default quantity value
  getProductById(id: string): void {
    this.productService.getProduct(id).subscribe(
      (response) => {
        this.product = response;
        if (this.product) {
          this.currentImageUrl = this.product.imgUrl[0];
        }
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
  addCart(): void {
    if (this.product && this.selectedSize && this.quantity) {
      const item = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        size: this.selectedSize,
        quantity: this.quantity,
      };
      // Call the appropriate method to add the item to the cart
      const id = this.sharedService.getId();
      if (id) {
        this.sharedService.addToCart(item);
        console.log(item);
        this.sharedService.cartUpdated.emit();
      }
      console.log(id, item);
    }
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
