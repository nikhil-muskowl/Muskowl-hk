import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLeadComponent } from './service-lead.component';

describe('ServiceLeadComponent', () => {
  let component: ServiceLeadComponent;
  let fixture: ComponentFixture<ServiceLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
