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

  navbarHidden = false;
  private lastScrollOffset = 0;

  @HostListener('window:scroll')
  onScroll() {
    const currentScrollOffset = window.pageYOffset;

    if (currentScrollOffset > this.lastScrollOffset) {
      // Scrolling down
      this.navbarHidden = true;
    } else {
      // Scrolling up
      this.navbarHidden = false;
    }

    this.lastScrollOffset = currentScrollOffset;
  }
}
