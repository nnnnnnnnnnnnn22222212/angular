import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isClassActive = false;

  changeClassName() {
    this.isClassActive = !this.isClassActive;
  }

  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollThreshold = 300; // Define your scroll threshold here

    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.isScrolled = scrollPosition > scrollThreshold;
    console.log();
  }
}
