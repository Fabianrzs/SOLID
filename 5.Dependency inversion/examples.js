class GmailProveedor {
  constructor() {
    this.provider = gmail.api.createService();
  }
  enviar(mensaje) {
    this.provider.sendAsText(mensaje);
  }
}
class Correo {
  constructor(proveedor) {
    this.proveedor = proveedor;
  }
  enviar(mensaje) {
    this.proveedor.send(mensaje);
  }
}
var gmail = new GmailProveedor();
var correo = new Correo(gmail);
correo.enviar("hola!");
