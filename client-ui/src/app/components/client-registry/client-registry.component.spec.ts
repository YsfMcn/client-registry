import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegistryComponent } from './client-registry.component';

describe('ClientRegistryComponent', () => {
  let component: ClientRegistryComponent;
  let fixture: ComponentFixture<ClientRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRegistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
