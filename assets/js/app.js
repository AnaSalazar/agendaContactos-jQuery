var contadorContactosEnAgenda = 0;

var funcionesAEjecutar = function () {
  $("#guardarContacto").click(crearFichaContacto);
}

var crearFichaContacto = function (e) {
  e.preventDefault();
  $('.modal').modal();
  // agenda = seccion base
  var agenda = $("#agenda");
  // crear div de fichaContacto, crear 3 parrafos (nombre, telefono, email)
  var fichaContacto = $("<div/>", {"class": "fichaContacto col-sm-offset-1 col-sm-4"});
  var espacioNombre = $("<p />", {"text":  "Nombre: "});
  var espacioTelefono = $("<p />", {"text":  "Teléfono: "});
  var espacioEmail = $("<p />", {"text":  "Email : "});
  // boton para borrar el contacto(borrarcontactocreado  contador--)
  var botonBorrarContacto = $("<button />", {"type": "button", "text": "Borrar Contacto"});

  botonBorrarContacto.click(borrarContactoCreado);
  crearNuevoContacto(fichaContacto, espacioNombre, espacioTelefono, espacioEmail, botonBorrarContacto);
}

var crearNuevoContacto = function (fichaContacto, espacioNombre, espacioTelefono, espacioEmail, botonBorrarContacto) {
  var nombre = $("#nombreContacto").val();
  var telefono = $("#telefonoContacto").val();
  var email = $("#emailContacto").val();
  var cantidadContactos = $("#cantidadContactos");

  $(espacioNombre).append(nombre);
  $(espacioTelefono).append(telefono);
  $(espacioEmail).append(email);
  $(fichaContacto).append(espacioNombre);
  $(fichaContacto).append(espacioTelefono);
  $(fichaContacto).append(espacioEmail);
  $(fichaContacto).append(botonBorrarContacto);
  $(agenda).append(fichaContacto);

  contadorContactosEnAgenda ++;
  $(cantidadContactos).text(contadorContactosEnAgenda);
  $("#nombreContacto").val("");
  $("#telefonoContacto").val("");
  $("#emailContacto").val("");
}

var borrarContactoCreado = function () {
  var fichaContacto = this.parentElement;
  fichaContacto.remove();
  $(this).parent().remove();

  var cantidadContactos = $("#cantidadContactos");
  contadorContactosEnAgenda --;
  $(cantidadContactos).text(contadorContactosEnAgenda);
}

$(document).ready(funcionesAEjecutar);
