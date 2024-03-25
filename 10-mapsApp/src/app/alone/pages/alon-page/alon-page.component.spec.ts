import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlonPageComponent } from './alon-page.component';

describe('AlonPageComponent', () => {
  let component: AlonPageComponent;
  let fixture: ComponentFixture<AlonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlonPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
