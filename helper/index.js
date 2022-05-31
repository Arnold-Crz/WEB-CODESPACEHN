export async function getProjects() {
  const url = 'http://localhost:3000/api/items';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getLastProjects() {
  const items = await getProjects();
  return items.slice(0, 3);
}

export async function getProjectFromTitle() {
  const items = await getProjects();
  return items.map((item) => {
    return {
      params: {
        id: convertToPath(item.titulo),
      },
    };
  });
}

export async function getProject(id) {
  const projects = await getProjects();
  const project = projects.find((item) => convertToPath(item.titulo) === id);
  return {
    project,
  };
}

export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, '-');
}
