import { DATA_PROYECTOS } from '../../data/dataProyectos';

export default function handler(req, res) {
  res.status(200).json(DATA_PROYECTOS);
}
