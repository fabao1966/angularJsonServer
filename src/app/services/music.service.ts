import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Music } from "../models/music.model";

@Injectable({
  providedIn: "root"
})
export class MusicService{
  private htthClient = inject(HttpClient);
  private url = `${environment.urlApi}musics`;

  obterMusicas(){
    return this.htthClient.get<Music[]>(this.url);
  }

  cadastrarMusica(musica: Music){
    return this.htthClient.post<Music>(this.url, musica);
  }

  editarMusica(musica: Music){
    return this.htthClient.put<Music>(`${this.url}/${musica.id}`, musica);
  }
}
