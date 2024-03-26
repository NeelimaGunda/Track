import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appLongPress]'
})
export class LongPressDirective {
  @Output() longPress = new EventEmitter();

  private longPressTimeout: any;

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  onMouseDown(event: MouseEvent | TouchEvent) {
    this.longPressTimeout = setTimeout(() => {
      this.longPress.emit(event);
    }, 500); // Adjust the delay as per your requirements
  }

  @HostListener('mouseup')
  @HostListener('touchend')
  @HostListener('touchcancel')
  onMouseUp() {
    clearTimeout(this.longPressTimeout);
  }
}
