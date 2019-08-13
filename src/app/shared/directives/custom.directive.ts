import { Directive,ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { GlobalserviceService } from '../services/globalservice.service';

@Directive({
  selector: '[menuButton]',
  providers:[
    {provide: MenuDirective,useClass:MenuDirective}
  ]
})

export class MenuDirective {

  @HostBinding('class.active')
  isOpen = false;

  @HostListener('document:click',['$event']) toggleOpen() {
    this.isOpen = this.eleRef.nativeElement.contains(event.target)?!this.isOpen:false;
    this.globalService.isActive = this.eleRef.nativeElement.contains(event.target)?!this.globalService.isActive:false;
  }

  constructor(private eleRef:ElementRef,private globalService:GlobalserviceService) {}
}

@Directive({
  selector: '[numberOnly]',
  providers:[
    {provide: NumberDirective,useClass: NumberDirective}
  ]
})


export class NumberDirective {
  @HostListener('keydown',['$event']) onkeydown(event) {
    let e = <KeyboardEvent> event;
    let ch = String.fromCharCode(e.keyCode);
    let regex = new RegExp('^[0-9]*$');
    if(e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      return;
    }
    if(regex.test(ch)) {
      return;
    }else {
      e.preventDefault();
    }
  }

  constructor() {}
}

@Directive({
  selector: '[characterOnly]',
  providers:[
    {provide: CharacterDirective,useClass:CharacterDirective}
  ]
})

export class CharacterDirective {
  @HostListener('keydown',['$event']) onkeydown(event) {
    let e = <KeyboardEvent> event;
    let ch = String.fromCharCode(e.keyCode);
    let regex = new RegExp(/^[a-zA-Z\s]+$/);
    if(e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      return;
    }
    if(regex.test(ch)) {
      return;
    }else {
      e.preventDefault();
    }
  }
}


export class CustomDirective {

  constructor() { }

}
