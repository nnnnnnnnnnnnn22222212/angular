import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private userService: UserService
  ) {}

  signup(): void {
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.userService.signup(userData).subscribe(
      (response) => {
        // Handle successful signup
        console.log('Signup successful:', response);
      },
      (error) => {
        // Handle signup error
        console.error('Signup error:', error);
      }
    );
  }

  login(): void {
    // Perform login logic here, e.g., validate inputs, make API call

    if (this.username && this.password) {
      this.userService.login(this.username, this.password).subscribe(
        (response) => {
          // Handle successful login, e.g., redirect to home page
          const user = response.find(
            (user: any) =>
              user.username === this.username && user.password === this.password
          );

          if (user) {
            // User found, perform the necessary actions
            this.router.navigate(['/']);
            const username = user.username;
            this.sharedService.setUserName(username);
            const id = user.id;
            this.sharedService.setId(id);

            this.sharedService.setCart(user.cart); // Store the user's cart in the shared service
            console.log(user.cart);
          } else {
            // User not found or invalid credentials
            console.log('Invalid username or password');
          }
        },
        (error) => {
          // Handle login error, e.g., display error message
          console.log(error);
        }
      );
    }
  }
}
