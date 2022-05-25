import Layout from '../components/Layout';
import Inicio from '../components/Inicio/Inicio';
import Servicios from '../components/servicios/Servicios';
import Tech from '../components/Tech';
import Planes from '../components/planes/Planes';
import Contacto from '../components/contacto/Contacto';
import Proyectos from '../components/proyectos/Proyectos';
import SectionQuestions from '../components/SectionQuestions';

export default function App() {
  return (
    <Layout title="Principal">
      <Inicio />
      <SectionQuestions />
      <Tech />
      <Proyectos />
      <Planes />
      <Servicios />
      <Contacto />
    </Layout>
  );
}
