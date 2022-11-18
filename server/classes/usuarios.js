

class Usuarios{

  constructor(){
    this.personas = [];
  }

  agregarPersona(id, nombre, sala){
    let persona = { id, nombre, sala };

    this.personas.push(persona);

    return this.personas;
  }

  getPersona(id){
    let persona=this.personas.filter(persona => persona.id === id)[0];  //el [0] es para que solo devuelva un registro

    return persona;
  }

  getPersonas(){
    return this.personas;
  }

  getPersonasPorSala(sala){
    let personasEnSala=this.personas.filter(persona => {
      return persona.sala === sala;
    });
    return personasEnSala;
  }

  borrarPersona(id){
    let personaBorrada = this.getPersona(id);

    this.personas = this.personas.filter(persona => { //reemplazamos el array que tenemos con el nuevo donde no esta la persona que se desconecto
      return persona.id != id;
    });

    return personaBorrada;
  }

}

module.exports = {
  Usuarios
}