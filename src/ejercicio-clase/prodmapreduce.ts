import {MapReduce} from '../../src/ejercicio-clase/mapreduce';
/**
 * Clase ProdMapReduce
 */
export class ProdMapReduce extends MapReduce {
  constructor(protected vector: number[]) {
    super(vector);
  }

  /**
  * Funcion reducir: reduce por producto (multiplica valor a valor del vector)
  */
  public reduce() {
    let solucion: number = 1;
    this.vector.forEach((item) => {
      solucion = solucion * item;
    });
    return solucion;
  }

  /**
  * Funcion afterReduce: sirve de hook
  */
  protected afterReduce() {
    console.log(`El vector fue reducido con la multiplicacion y la solucion es ${this.reduce()}`);
  }
}
