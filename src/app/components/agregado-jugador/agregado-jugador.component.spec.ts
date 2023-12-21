import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregadoJugadorComponent } from './agregado-jugador.component';

describe('AgregadoJugadorComponent', () => {
  let component: AgregadoJugadorComponent;
  let fixture: ComponentFixture<AgregadoJugadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregadoJugadorComponent]
    });
    fixture = TestBed.createComponent(AgregadoJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
