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
  * Funcion run para comprobar los hooks
  */
  public run() {
    // Hook inicial
    this.beforeReduce();
    // Reducir
    this.reduce();
    // Hook final
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
  }

  /**
   * Metodo abstracto reduce()
   */
  public abstract reduce(): void;

  // Hooks (opcionales)
  protected beforeReduce() {
    console.log("El vector antes de reducir es:" + this.vector);
  }
  protected afterReduce() {
  }
}
