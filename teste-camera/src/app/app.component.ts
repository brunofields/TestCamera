import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-camera';

  capture(event: any) {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (eventLoad: any) => {
      const img = new Image();
      img.onload = () => {
        alert('imagem carregada :)')
      } 
    }
    reader.readAsDataURL(file);
  }

}
