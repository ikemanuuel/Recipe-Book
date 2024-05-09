// dropdown-manage.component.ts
import { Component, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
 selector: 'app-dropdown-manage',
 templateUrl: './dropdown-manage.component.html',
 styleUrls: ['./dropdown-manage.component.scss']
})
export class DropdownManageComponent {
 isOpen = false;

 @Output() deleteRecipe = new EventEmitter<void>();
 @Output() editRecipe = new EventEmitter<void>();

 toggleDropdown() {
    this.isOpen = !this.isOpen;
 }

 onDocumentClick(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
 }


 onDelete() {
    this.deleteRecipe.emit();
    window.location.reload();
 }

 onEdit() {
    this.editRecipe.emit();
    this.isOpen = false; 
 }
 
 constructor(private eRef: ElementRef) {}
}
 