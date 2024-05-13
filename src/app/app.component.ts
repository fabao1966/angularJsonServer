import { Component, inject } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Music } from './models/music.model';
import { MusicService } from './services/music.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Testes';
  id = '';
  autor = '';
  musica = '';

  private musicService = inject(MusicService);

  musicas$ = new Observable<Music[]>();

  constructor(){
    this. obterMusicasCadastradas();
  }

  obterMusicasCadastradas(){
    this.musicas$ = this.musicService.obterMusicas();
  }

  buttonClick(){
    if (!this.autor || !this.musica) {
      return;
    }

    if (this.id) {//se tem algo no id é feita a atualização
      this.atualizarMusica();
    }

    this.musicService.cadastrarMusica(
      {
        author: this.autor,
        text: this.musica
      })
      .subscribe(() => this.obterMusicasCadastradas());
  }

  atualizarMusica(){
    this.musicService.editarMusica({
      id: parseInt(this.id),
      author: this.autor,
      text: this.musica})
      .subscribe(() => this.obterMusicasCadastradas());
  }

  preencherCampos(musica: Music){

    this.id = musica.id!.toString();
    this.autor = musica.author;
    this.musica = musica.text;

  }


}
