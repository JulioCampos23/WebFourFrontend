import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTarifaComponent } from './crear-tarifa.component';

describe('CrearTarifaComponent', () => {
  let component: CrearTarifaComponent;
  let fixture: ComponentFixture<CrearTarifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTarifaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
