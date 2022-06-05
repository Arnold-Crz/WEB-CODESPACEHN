import { DATA_PROYECTOS } from '../data/dataProyectos';

export function getProjects() {
  const data = DATA_PROYECTOS;
  return data;
}

export function getProjectFromTypeDesings() {
  const data = getProjects();
  const desings = data.filter((item) => item.tipoContenido === 'diseño');
  return desings;
}
export function getProjectFromTypeDesarrollo() {
  const data = getProjects();
  const desarrollo = data.filter((item) => item.tipoContenido === 'desarrollo');
  return desarrollo;
}

export function getLastProjects() {
  const items = getProjects();
  return items.slice(0, 3);
}

export function getProjectFromTitle() {
  const items = getProjects();
  return items.map((item) => {
    return {
      params: {
        id: convertToPath(item.titulo),
      },
    };
  });
}

export function getProject(id) {
  const projects = getProjects();
  const project = projects.find((item) => convertToPath(item.titulo) === id);
  return {
    project,
  };
}

export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, '-');
}
