import { Component,Input ,HostListener  } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() imgUrl: string | undefined;
  @Input() heading: string | undefined;
  @Input() text1: string | undefined;

}
