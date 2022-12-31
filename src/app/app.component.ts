import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/models/Cliente';
import { ClienteService } from 'src/services/Cliente.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  clientes : Cliente [] = [];
  cliente : Cliente = new Cliente();
  estado: boolean = true;
  form :NgForm | any;
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.fnListarTodos();
  }

  fnListarTodos() {
    this.clienteService.ListarTodos().subscribe({
      next: (data) =>{
        this.clientes = data;
      },error: (e) =>{
        console.log(e);
      }
    })
  }

  fnGuardarDatos(form: NgForm){
    this.form = form;

    this.clienteService.GuardarDatos(this.cliente).subscribe({
      next: (data: any) =>{
        if(data){
          alert('Los datos se guardaron de forma correcta.');
          this.fnListarTodos();
          this.fnLimpiarCampos();
        }else{
          alert('No se pudieron guardar datos.');
        }
    },error: (e) =>{
      alert('Ha ocurrido un error al momento de guardar los datos.');
      console.log(e);
      }
    })
  }

  fnLimpiarCampos(){
    this.cliente = new Cliente();
    this.estado = true;
    this.form.reset();
    this.form.resetForm();
  }

  fnCargarDatos(item: Cliente){
    this.cliente = Object.assign({}, item);
    this.estado = false;
  }

  fnConfEliminar(form: NgForm){
    this.form = form;
    const nomCliente = this.cliente.nombres + ' , '+this.cliente.apePaterno + ' '+this.cliente.apeMaterno;
    if(confirm('¿Está seguro que desea eliminar al cliente: '+nomCliente+'?')){
      this.fnEliminar();

      return;
    }else{
      return false;
    }
  }

  fnEliminar(){
    this.clienteService.Eliminar(this.cliente.idCliente).subscribe({
      next: (data: any) =>{
        if(data){
          alert('Los datos se eliminaron de forma correcta.');
          this.fnListarTodos();
          this.fnLimpiarCampos();
        }else{
          alert('No se pudieron eliminar datos.');
        }
    },error: (e) =>{
      alert('Ha ocurrido un error al momento de eliminar datos.');
      console.log(e);
      }
    })
  }
}
