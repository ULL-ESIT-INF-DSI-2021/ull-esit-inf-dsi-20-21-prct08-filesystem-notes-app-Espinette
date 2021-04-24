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
      fs.mkdir(`./${usuario}`, (err) => {
        if (err) {
          console.log(chalk.red('Hubo un error mientras se creaba la carpeta'));
        }
      });
    }
    if (fs.existsSync(`./${usuario}/${titulo}.json`) == false) {
      fs.writeFile(`./${usuario}/${titulo}.json`, nota.toJSON(), (err) => {
        if (err) {
          console.log(chalk.red('Hubo un error mientras se escribía el fichero'));
        } else {
          console.log(chalk.green('New note added!'));
        }
      });
    } else {
      console.log(chalk.red('Note title taken!'));
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
          console.log(chalk.green('Nota removed!'));
        }
      });
    } else {
      console.log(chalk.red('Note not found'));
    }
  }

  listNote(usuario: string) {
    if (fs.existsSync(`./${usuario}`) == true) {
      console.log('Your notes:\n');
      fs.readdirSync(`./${usuario}`).forEach((item) => {
        const note = fs.readFileSync(`./${usuario}/${item}`);
        const noteJSON = JSON.parse(note.toString());
        switch (noteJSON.color) {
          case "red":
          case "Red":
            console.log(chalk.red.inverse(`- ${noteJSON.titulo}`));
            break;
          case "blue":
          case "Blue":
            console.log(chalk.blue.inverse(`- ${noteJSON.titulo}`));
            break;
          case "green":
          case "Green":
            console.log(chalk.green.inverse(`- ${noteJSON.titulo}`));
            break;
          case "yellow":
          case "Yellow":
            console.log(chalk.yellow.inverse(`- ${noteJSON.titulo}`));
            break;
          default:
            break;
        }
      });
    } else {
      console.log(chalk.red('User not found!'));
    }
  }
}
