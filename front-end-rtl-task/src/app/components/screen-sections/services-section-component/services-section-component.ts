import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Router, RouterModule, Routes } from '@angular/router';

export interface ServiceCard {
  title: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-services-section-component',
  imports: [CarouselModule],
  templateUrl: './services-section-component.html',
  styleUrl: './services-section-component.css',
})

export class ServicesSectionComponent {
  services: ServiceCard[] = [
    { title: 'عنوان البطاقة', description: 'نص إضافي لمحتوى البطاقة', tags: ['وسم', 'وسم', 'وسم'] },
    { title: 'عنوان البطاقة', description: 'نص إضافي لمحتوى البطاقة', tags: ['وسم', 'وسم', 'وسم'] },
    { title: 'عنوان البطاقة', description: 'نص إضافي لمحتوى البطاقة', tags: ['وسم', 'وسم', 'وسم'] },
    { title: 'عنوان البطاقة', description: 'نص إضافي لمحتوى البطاقة', tags: ['وسم', 'وسم', 'وسم'] },
    { title: 'عنوان البطاقة', description: 'نص إضافي لمحتوى البطاقة', tags: ['وسم', 'وسم', 'وسم'] },
  ];

  /** Number of cards visible at each breakpoint */
  responsiveOptions = [
    { breakpoint: '1200px', numVisible: 4, numScroll: 1 },
    { breakpoint: '900px',  numVisible: 3, numScroll: 1 },
    { breakpoint: '600px',  numVisible: 2, numScroll: 1 },
    { breakpoint: '400px',  numVisible: 1, numScroll: 1 },
  ];

  constructor(private router: Router) {}

  navigateToService(): void {
    this.router.navigate(['/service']);
  }
}
