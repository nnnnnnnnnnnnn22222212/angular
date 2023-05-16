import { Component,NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule ({
  imports: [
    MatSlideToggleModule,
  ]
})
class AppModule {}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
