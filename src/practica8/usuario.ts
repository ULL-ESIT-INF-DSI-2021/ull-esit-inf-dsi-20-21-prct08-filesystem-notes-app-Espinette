import {Nota} from "./nota";
import * as fs from 'fs';
import * as chalk from 'chalk';

/**
 * Clase usuario que representa las funciones que debe realizar un usuario para trabajar con sus notas
 */
export class Usuario {
  constructor() {}

  /**
   * Añadir un fichero nota a la carpeta de un usuario
   * @param usuario Usuario que realiza la nota
   * @param titulo Titulo de la nota
   * @param cuerpo Cuerpo de la nota
   * @param color Color de la nota
   */
  addNote(usuario: string, titulo: string, cuerpo: string, color: string) {
    const nota: Nota = new Nota(titulo, cuerpo, color);
    if (fs.existsSync(`./${usuario}`) == false) {
      fs.mkdir(`./${usuario}`, (err) => {});
    }
    if (fs.existsSync(`./${usuario}/${titulo}.json`) == false) {
      fs.writeFile(`./${usuario}/${titulo}.json`, nota.toJSON(), (err) => {
        if (err) {
          console.log(chalk.red('Hubo un error mientras se escribía el fichero'));
        } else {
          console.log(chalk.green('Nota creada correctamente'));
        }
      });
    } else {
      console.log(chalk.red('Ya existe una nota similar'));
    }
  }

  /**
   * Eliminar un fichero nota
   * @param usuario Usuario que tiene dicha nota
   * @param titulo Titulo de la nota
   */
  removeNote(usuario: string, titulo: string): void {
    if (fs.existsSync(`./${usuario}/${titulo}.json`) == true) {
      fs.rm(`./${usuario}/${titulo}.json`, (err) => {
        if (err) {
          console.log(chalk.red('Hubo un error mientras se borraba el fichero'));
        } else {
          console.log(chalk.green('Nota borrada correctamente'));
        }
      });
    } else {
      console.log(chalk.red('La nota a borrar no se encuentra'));
    }
  }
}
