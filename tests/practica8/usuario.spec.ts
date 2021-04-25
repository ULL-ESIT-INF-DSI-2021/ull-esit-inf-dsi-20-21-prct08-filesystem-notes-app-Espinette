import "mocha";
import {expect} from 'chai';
import {Usuario} from "../../src/practica8/usuario";
import * as fs from 'fs';

const note1 = new Usuario();

describe('Usuario tests', () => {
  note1.addNote("edusegre", "Yellow note", "This is a yellow note", "yellow");

  it('Se debe poder añadir una nueva nota', () => {
    note1.addNote("edusegre", "Red note", "This is a red note", "red");
    expect(fs.existsSync(`src/practica8/usuarios/edusegre/Red note.json`));
  });

  it('Se debe poder leer una nota', () => {
    note1.readNote(`edusegre`, `Yellow note`);
  });

  it(('Mostrando listas de notas'), () => {
    note1.listNote('edusegre');
  });

  it(('Eliminar nota'), () => {
    note1.removeNote('edusegre', `Red note`);
  });

  it(('Buscar notas que no existen'), () => {
    note1.readNote(`edusegre`, `Blue note`);
  });

  it(('Listar notas de un usuario que no existe'), () => {
    note1.listNote('alberto');
  });

  it(('Eliminar nota que no existe'), () => {
    note1.removeNote('edusegre', `Blue note`);
  });

  it(('Modificar nota'), () => {
    note1.modifyNote('edusegre', `Yellow note`, 'Green note', `This is a green note`, `green`);
  });
});
