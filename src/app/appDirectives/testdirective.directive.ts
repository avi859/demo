import { AfterViewInit, Directive, ElementRef, Renderer2, ViewChild, viewChild } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective implements AfterViewInit{


  constructor(private el:ElementRef , private renderer:Renderer2) { 
   
  }
  ngAfterViewInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor' , 'yellow')
    console.log(this.el)
  }
  changeColor(color:string){
    this.renderer.setStyle(this.el.nativeElement , 'backgroundColor' , color)
  }

}
