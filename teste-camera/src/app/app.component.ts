import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-camera';


  fileInfo: string = '';

  capture(event: any) {
    const file = event.target.files[0];
    this.fileInfo = 'imagem carregada com os dados: '+ '</br>nome: ' + file.name + '</br>tipo: ' + file.type + '</br>tamanho: ' + file.size;

    const reader = new FileReader();

    reader.onload = (eventLoad: any) => {
      const img = new Image();
      img.onload = () => {
      } 
    }
    reader.readAsDataURL(file);
    alert('imagem carregada com sucesso =D')
  }
  
}
