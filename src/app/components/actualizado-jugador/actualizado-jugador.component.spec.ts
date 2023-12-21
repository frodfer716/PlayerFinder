import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizadoJugadorComponent } from './actualizado-jugador.component';

describe('ActualizadoJugadorComponent', () => {
  let component: ActualizadoJugadorComponent;
  let fixture: ComponentFixture<ActualizadoJugadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizadoJugadorComponent]
    });
    fixture = TestBed.createComponent(ActualizadoJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
