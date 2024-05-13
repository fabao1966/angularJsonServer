export type Music = {
  id: number,
  author: string,
  text: string
}

//extende Music, menos a pripriedade id
export type MusicCadastrar = Omit<Music, 'id'>;
