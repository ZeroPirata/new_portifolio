import {IProjects} from "./projetos";

export interface IProjectCards extends IProjects {
  open?: (value: boolean) => void;
}
