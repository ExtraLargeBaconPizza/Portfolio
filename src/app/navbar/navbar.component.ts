import { Component, HostListener } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  constructor(private viewPortScroller: ViewportScroller) {}

  @HostListener('window:scroll', ['$event']) onScrollEvent(){
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;

    const navbar = document.getElementById("pb-navbar");

      if (verticalOffset > 200) {
        navbar!.classList.add('scrolled');
      } else {
        navbar!.classList.remove('scrolled');
      }
  } 

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }

  scrollToSection($element: string): void {
    this.navbarCollapsed = true;
    this.viewPortScroller.scrollToAnchor($element);
  }
}
