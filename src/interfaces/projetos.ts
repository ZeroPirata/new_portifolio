export interface IProjects {
  equipe: string;
  empresa: string;
  nome: string;
  desafio: string;
  metodologia: string;
  imagens: string[];
  tecnologia: {
    nome: string;
    img: string;
  }[];
  papel: {
    equipe: string;
    feitos: string;
  };
  dataInicio: number;
  dataFinal: number;
  referencia: string;
}
