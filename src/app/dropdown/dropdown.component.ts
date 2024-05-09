import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
 selector: 'app-dropdown',
 templateUrl: './dropdown.component.html',
 styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
 isOpen = false;

 toggleDropdown() {
    this.isOpen = !this.isOpen;
 }

 @HostListener('document:click', ['$event'])
 onDocumentClick(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
 }

 constructor(private eRef: ElementRef) {}
}
