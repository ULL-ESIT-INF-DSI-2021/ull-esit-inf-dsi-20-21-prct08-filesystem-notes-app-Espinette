/**
 * Clase Reduce
 */
export abstract class MapReduce {
  /**
   * Constructor de la clase
   * @param vector Vector que recibe
   */
  constructor(protected vector: number[]) {
    this.vector = [];
  }

  /**
   * Funcion getVector()
   * @returns vector a mapear y reducir
   */
  public getVector() {
    return this.vector;
  }

  /**
   * Funcion setVector()
   * @param array Para asignarle un vector
   */
  public setVector(array :number[]) {
    this.vector = array;
  }


  /**
  * Funcion run para ver los hooks
  */
  public run() {
    this.beforeMap();
    const vectorMapeado = this.vector.map(function(item) {
      return item + 5;
    });
    this.setVector(vectorMapeado);
    this.afterMapBeforeReduce();
    this.reduce();
    this.afterReduce();
  }

  /**
   * Metodo map()
   */
  protected map(funcion: (param: number) => number) {
    const mapeado: number[] = [];
    this.vector.forEach((item) => {
      mapeado.push(funcion(item));
    });
    return mapeado;
  }

  /**
   * Metodo abstracto reduce()
   */
  public abstract reduce(): void;

  // Hook antes del mapeo
  protected beforeMap() {
    console.log("El vector antes de mapear es:" + this.vector);
  }

  // Hook despues del mapeo y antes del reduce
  protected afterMapBeforeReduce() {
    console.log("El vector despues de mapear por la suma de 5 y antes de reducir es:" + this.vector);
  }

  // Hook despues del reduce
  protected afterReduce() {
  }
}
