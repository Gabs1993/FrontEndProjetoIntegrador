import { User } from './User';

export class Postagem {
  public idPost!: number;
  public categoriaEstabelecimento!: string;
  public tipoEstabelecimento!: string;
  public comentario!: string;
  public usuario!: User;
}
