import { Directive, ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HightlightDirective {

  constructor(private el : ElementRef) { }

  @HostListener('mouseenter')onMouseEnter(){
    this.hightlight('yellow');

  }

  @HostListener('mouseleave')onMouseLeave(){
    this.hightlight('');
  }


  private hightlight(color:string){
    this.el.nativeElement.style.backgroundColor=color;
  }

}