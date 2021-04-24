import * as yargs from 'yargs';
import {Usuario} from './usuario';

const nota: Usuario = new Usuario();

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'Username',
      demandOption: true,
      type: 'string',
    },
    tittle: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Color',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.tittle === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string') {
      nota.addNote(argv.user, argv.tittle, argv.body, argv.color);
    } else {
      console.log("Hubo un eror al introducir los comandos");
    }
  },
});

yargs.argv;
