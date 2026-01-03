import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  @Input() delay = 0;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      this.el.nativeElement.classList.add('reveal-active');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.el.nativeElement.classList.add('reveal-active');
          }, this.delay);
          observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.15 }
    );

    this.el.nativeElement.classList.add('reveal');
    observer.observe(this.el.nativeElement);
  }
}
