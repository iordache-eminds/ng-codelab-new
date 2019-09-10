import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ngiMovieImageFallback]'
})
export class MovieImageFallbackDirective implements OnInit{

  @Input() ngiMovieImageFallback;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (!this.ngiMovieImageFallback) {
      this.ngiMovieImageFallback = 'assets/noImage1.jpg';
    }
  }

  @HostListener('error')
  setImage() {
    this.el.nativeElement.src = this.ngiMovieImageFallback;
  }
}
