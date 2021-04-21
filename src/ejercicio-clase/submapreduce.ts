import {MapReduce} from '../../src/ejercicio-clase/mapreduce';
/**
 * Clase SubMapReduce
 */
export class SubMapReduce extends MapReduce {
  constructor(protected vector: number[]) {
    super(vector);
  }

  /**
  * Funcion reducir: reduce por resta (resta valor a valor del vector)
  */
  public reduce() {
    let solucion: number = 0;
    this.vector.forEach((item) => {
      solucion = solucion - item;
    });
    return solucion;
  }

  /**
  * Funcion afterReduce: sirve de hook
  */
  protected afterReduce() {
    console.log(`El vector fue reducido con resta y la solucion es ${this.reduce()}`);
  }
}
