import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('owl') owl: ElementRef;
  customOptions: OwlOptions = {

    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    // nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    // this.owl.nativeElement.owlCarousel({
    //   items: 3,
    //   responsiveClass: true,
    //   autoplay: true,
    //   responsive: {
    //     0: {
    //       items: 1,
    //       nav: true
    //     },
    //     600: {
    //       items: 2,
    //       nav: false
    //     },
    //     1200: {
    //       items: 3,
    //       nav: true,
    //     }
    //   }
    // });
  }

}
