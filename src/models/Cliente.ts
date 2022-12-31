export class Cliente{
  public idCliente?: number;
  public nombres?: string;
  public apePaterno?: string;
  public apeMaterno?: string;
  public fechaNac?: string;
  public sexo?: string;
  public correo?: string;
  public direccion?: string;

  constructor(){
    this.idCliente = 0;
    this.nombres = '';
    this.apePaterno = '';
    this.apeMaterno = '';
    this.sexo = '';
    this.correo = '';
    this.fechaNac = '';
    this.direccion = '';
  }
}
