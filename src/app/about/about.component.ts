import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private viewPortScroller: ViewportScroller) {}

  scrollToSection($element: string): void {
    this.viewPortScroller.scrollToAnchor($element);
  }
}
