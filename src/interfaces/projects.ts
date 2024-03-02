export interface IProjects {
  equipe: string
  empresa: string
  nome: string
  desafio: string
  metodologia: string
  imagens: string[]
  tecnologia: ITecnologia[]
  papel: IPapel
  dataInicio: number
  dataFinal: number
  referencia: string
}

interface ITecnologia {
  nome: string
  img: string
}

interface IPapel {
  equipe: string
  feitos: string
}
