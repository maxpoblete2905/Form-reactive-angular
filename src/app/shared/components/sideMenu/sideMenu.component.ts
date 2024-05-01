import { Component } from '@angular/core';

interface MenuItem {
 title: string,
 router: string
}

@Component({
    selector: 'shared-side-menu',
    templateUrl: './sideMenu.component.html',
    styleUrl: './sideMenu.component.css',
})
export class SideMenuComponent {

  public reactiveMenu: MenuItem[] = [
    {title: 'Básicos', router: './reactive/basic'},
    {title: 'Dinamicos', router: './reactive/dynamic'},
    {title: 'Switches', router: './reactive/switches'},
  ];

  public authMenu: MenuItem[] = [
    {title: 'registro', router: './auth'},
  ];}
