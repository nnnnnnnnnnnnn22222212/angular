import {
  Component,
  HostListener,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isClassActive = false;
  username: string | null = null;
  id: number | null = null;

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
  userName: string | undefined;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    // Retrieve the user's name from the shared service
    this.sharedService.username$.subscribe((username) => {
      this.username = username;
    });
  console.log(this.sharedService.getId());
  }
  logout() {
    // Delete the username from local storage
    this.sharedService.setUserName(null);
    this.sharedService.clearAll();
  }
}
