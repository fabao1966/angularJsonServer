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

  private musicService = inject(MusicService);

  musicas$ = new Observable<Music[]>();

  constructor(){
    this. obterMusicasCadastradas();
  }

  obterMusicasCadastradas(){
    this.musicas$ = this.musicService.obterMusicas();
  }
}
