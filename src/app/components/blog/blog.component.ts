import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Notinueva } from 'src/app/interfaces/notinueva.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  titulo: string = "";
  imagen: string = "";
  texto: string ="";
  fecha: any = "";
  noticias: any[]=[];
  ArrNoticias: any[] = [];
  newNoti: Notinueva [] = [];

  @Output() tituloEnviado: EventEmitter<string>;/* Esta propiedad debe estar decorada con @output */
  @Output() imagenEnviada: EventEmitter<string>;
  @Input() arraynoticias: any[] = [];

  constructor(){
    this.tituloEnviado = new EventEmitter();
    this.imagenEnviada = new EventEmitter();
    this.ArrNoticias = new Array(
      { titulo: "Grupo USAR El Salvador rescata con vida a un niño y una mujer entre los escombros en Turquía", imagen:"https://diarioelsalvador.com/wp-content/uploads/2023/02/CC-1.png", texto: "Una labor heroica ejecuta en Turquía el Grupo de Búsqueda y Rescate Urbano El Salvador (USAR, por sus siglas en inglés), que ayer pudo experimentar el milagro de la vida tras rescatar a una mujer y un niño que habían permanecido más de 150 horas entre los escombros de un edificio que se derrumbó por los potentes sismos que han asolado Turquía. Los rescatistas salvadoreños, con apoyo de los equipos turcos, sacaron a un niño de cinco años, Meli Efe Ozcan, y a una mujer de 30 años, Deniz Dal, quienes fueron trasladados hacia el hospital Necip Fazil Tip Fakültesi.", fecha: "12/02/2023"}, {titulo: "ISTU realizará «Noche bajo las estrellas» en Parque Natural Cerro Verde", imagen:"https://diarioelsalvador.com/wp-content/uploads/2023/02/web-1-4.jpg",texto: "El Instituto Salvadoreño de Turismo (ISTU), en el marco de la celebración del «Día del Amor y la Amistad», realizará este próximo fin de semana la actividad: «Noche bajo las estrellas», en el Parque Natural Cerro Verde, ubicado en el departamento de Santa Ana. Con este evento, se arranca este 2023, cargado de muchas aventuras y diversión para todas las familias salvadoreñas. Con «Noche bajo las estrellas», buscamos brindar sana recreación a los participantes. El evento, dará inicio a las 4 de la tarde con una variada agenda de actividades pensadas especialmente para ser realizadas y compartidas en familia. Los turistas que asistan, podrán hacer uso de una cabina de fotos completamente gratis para que puedan llevarse un bonito recuerdo impreso de su participación en esta actividad.", fecha: "11/02/2023"}, );
  }

  ngOnInit(): void{

  }

  cargarDatos(): string{
    let resultado = "";

    this.ArrNoticias.forEach(noti=>{
      resultado+= `<article class="articleWrapper"><h3 class="titulonoti">${noti.titulo}</h3><div class='imagenwrapper' ><img class='imagennoti' src='${noti.imagen}'></div><div class='contNoti'><p class="textonoti">${noti.texto}</p><p class="fechanoti">${noti.fecha}</p></div></article>`
    })
    
    return resultado;

  }
 
  recogerDatos(){
    let lenArray = this.ArrNoticias.length;
    if(this.titulo != "" && this.imagen != "" && this.texto != "" && this.fecha != ""){
      console.log(this.titulo);
      console.log(this.imagen);
      console.log(this.texto);
      console.log(this.fecha);
      this.tituloEnviado.emit(this.titulo);
      this.imagenEnviada.emit(this.imagen);
      console.log(lenArray);

      let newNoti: Notinueva = {
        titulo: this.titulo,
        imagen: this.imagen,
        texto: this.texto,
        fecha: this.fecha
      }
 
      
      this.ArrNoticias.push(newNoti);
      console.log(this.ArrNoticias);
      this.titulo = "";
      this.imagen = "";
      this.texto = "";
      this.fecha = "";
    } else{
        alert('Los campos no pueden ser vacios, favor rellenarlos correctamente.')
      }

  }

}
