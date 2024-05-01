import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchesPageComponent } from './switches-page.component';

describe('SwitchesPageComponent', () => {
  let component: SwitchesPageComponent;
  let fixture: ComponentFixture<SwitchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
