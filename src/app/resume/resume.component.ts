import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { SkillComponent } from './skill/skill.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  constructor(private viewPortScroller: ViewportScroller) {}

  scrollToSection($element: string): void {
    this.viewPortScroller.scrollToAnchor($element);
  }
}
