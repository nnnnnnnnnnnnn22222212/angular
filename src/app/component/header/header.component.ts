import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menu = [
    {id: 1, name: 'Home'},
    {id: 1, name: 'Detail'},
    {id: 1, name: 'Projects'},
    {id: 1, name: 'Contacts'},
  ]
}
