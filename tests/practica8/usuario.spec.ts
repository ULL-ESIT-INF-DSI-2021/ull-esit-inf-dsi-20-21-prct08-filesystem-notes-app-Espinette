import "mocha";
import {Usuario} from "../../src/practica8/usuario";


describe('Usuario tests', () => {
  const note1 = new Usuario();

  it('Se debe poder añadir una nueva nota', () => {
    note1.addNote("Alberto", "Red note", "This is a red note", "red");
  });
  it('Si la nota que se quiere crear ya existe muestra mensaje de erorr', () =>{
    note1.addNote("Alberto", "Red note", "This is a red note", "red");
  });
  it('Se debe poder eliminar una nota', () => {
    note1.addNote("Alberto", "Red note", "This is a red note", "red");
    note1.removeNote("Alberto", "Red note");
  });
  it('Si la nota a eliminar no existe se muestra un mensaje de error', () => {
    note1.removeNote("Alberto", "Red note");
  });
  /* it('Se debe poder modificar una nota', () =>{
    note1.add("helloworld", "HELLO WORLD!", "blue", "user");
    note1.modify("user", "helloworld", 'hello-world', 'hello world!', 'yellow');
    expect(fs.existsSync("./user/helloworld.json")).to.be.true;
    const buffer = fs.readFileSync(`./user/helloworld.json`);
    expect(buffer.toString()).to.be.equal('{\n\"title\": \"hello-world\",\n\"body\": \"hello world!\",\n\"color\": \"yellow\"\n}');
    note1.remove("user", "helloworld");
  });
  it('Si la nota no existe se muestra un mensaje de error', () =>{
    expect(note1.modify("user", "helloworld", '', "HELLO WORLD!", '')).to.be.undefined;
  });
  it('Se debe poder leer una nota', () =>{
    note1.add("helloworld", "HELLO WORLD!", "blue", "user");
    note1.add("helloworld2", "HELLO WORLD!", "yellow", "user");
    note1.add("helloworld3", "HELLO WORLD!", "red", "user");
    note1.add("helloworld4", "HELLO WORLD!", "green", "user");
    note1.add("helloworld5", "HELLO WORLD!", "cyan", "user");
    expect(note1.read("user", "helloworld")).to.be.undefined;
    expect(note1.read("user", "helloworld2")).to.be.undefined;
    expect(note1.read("user", "helloworld3")).to.be.undefined;
    expect(note1.read("user", "helloworld4")).to.be.undefined;
    expect(note1.read("user", "helloworld5")).to.be.undefined;
    expect(note1.read("user", "helloworld6")).to.be.undefined;
    note1.remove("user", "helloworld");
    note1.remove("user", "helloworld2");
    note1.remove("user", "helloworld3");
    note1.remove("user", "helloworld4");
    note1.remove("user", "helloworld5");
  });
  it('Se deben poder listar las notas correspondientes a un usuario', () =>{
    note1.add("helloworld", "HELLO WORLD!", "blue", "user");
    note1.add("helloworld2", "HELLO WORLD!", "yellow", "user");
    note1.add("helloworld3", "HELLO WORLD!", "red", "user");
    note1.add("helloworld4", "HELLO WORLD!", "green", "user");
    note1.add("helloworld5", "HELLO WORLD!", "cyan", "user");
    expect(note1.list('user')).to.be.eql(["helloworld.json", "helloworld2.json", "helloworld3.json", "helloworld4.json", "helloworld5.json"]);
    note1.remove("user", "helloworld");
    note1.remove("user", "helloworld2");
    note1.remove("user", "helloworld3");
    note1.remove("user", "helloworld4");
    note1.remove("user", "helloworld5");
    fs.rmdirSync('./user');
  });*/
});
