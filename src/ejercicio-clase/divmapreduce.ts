import {MapReduce} from '../../src/ejercicio-clase/mapreduce';
/**
 * Clase DivMapReduce
 */
export class DivMapReduce extends MapReduce {
  constructor(protected vector: number[]) {
    super(vector);
  }

  /**
  * Funcion reducir: reduce por division (divide valor a valor del vector)
  */
  public reduce() {
    let solucion: number = 1;
    this.vector.forEach((item) => {
      solucion = item / solucion;
    });
    return solucion;
  }

  /**
  * Funcion afterReduce: sirve de hook
  */
  protected afterReduce() {
    console.log(`El vector fue reducido con la division y la solucion es ${this.reduce()}`);
  }
}
