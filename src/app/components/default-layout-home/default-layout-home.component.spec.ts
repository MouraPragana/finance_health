import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutHomeComponent } from './default-layout-home.component';

describe('DefaultLayoutHomeComponent', () => {
  let component: DefaultLayoutHomeComponent;
  let fixture: ComponentFixture<DefaultLayoutHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLayoutHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
