import 'mocha';
import {expect} from 'chai';
import {Nota} from '../../src/practica8/nota';

const nota1 = new Nota("Red note", "This is a red note", "red");

describe('Pruebas clase Nota', ()=> {
  it('expect(nota1).to.not.be.equal(null);', ()=>{
    expect(nota1).to.not.be.equal(null);
  });
  it('expect(nota1.getTitulo()).to.be.equal("Red note");', ()=>{
    expect(nota1.getTitulo()).to.be.equal("Red note");
  });
  it('nota1.setTitulo("Yellow note");', ()=>{
    nota1.setTitulo("Yellow note");
    expect(nota1.getTitulo()).to.be.equal("Yellow note");
    nota1.setTitulo("Red note");
  });
  it('expect(nota1.getCuerpo()).to.be.equal("This is a red note");', ()=>{
    expect(nota1.getCuerpo()).to.be.equal("This is a red note");
  });
  it('nota1.setCuerpo("This is a Yellow note");', ()=>{
    nota1.setCuerpo("This is a Yellow note");
    expect(nota1.getCuerpo()).to.be.equal("This is a Yellow note");
    nota1.setCuerpo("This is a red note");
  });
  it('expect(nota1.getColor()).to.be.equal("red");', ()=>{
    expect(nota1.getColor()).to.be.equal("red");
  });
  it('nota1.setColor("Yellow");', ()=>{
    nota1.setColor("Yellow");
    expect(nota1.getColor()).to.be.equal("Yellow");
    nota1.setColor("red");
  });
  it('nota1.toJSON("{\n\"titulo\": \"Red note\",\n\"cuerpo\": \"This is a red note\",\n\"color\": \"red\"\n}");', ()=>{
    expect(nota1.toJSON()).to.be.equal('{\n\"titulo\": \"Red note\",\n\"cuerpo\": \"This is a red note\",\n\"color\": \"red\"\n}');
  });
});

