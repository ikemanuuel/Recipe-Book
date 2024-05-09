import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownManageComponent } from './dropdown-manage.component';

describe('DropdownManageComponent', () => {
  let component: DropdownManageComponent;
  let fixture: ComponentFixture<DropdownManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
