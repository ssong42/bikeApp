import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides: any;
  @Input() whiteArrows: boolean = false;
  @Input() classes: string = "";
  @Output()
  onImgClick = new EventEmitter();

  ngOnInit(): void {
  }

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  imgClick(image: any) {
    this.onImgClick.emit(image);
  }

  subImgClick(index: number) {
    this.currentSlide = index;
  }
}
