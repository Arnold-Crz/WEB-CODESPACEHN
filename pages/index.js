import Layout from '../components/Layout';
import Inicio from '../components/Inicio/Inicio';
import Servicios from '../components/servicios/Servicios';
import Tech from '../components/Tech';
import Planes from '../components/planes/Planes';
import Contacto from '../components/contacto/Contacto';
import Proyectos from '../components/proyectos/Proyectos';
import SectionQuestions from '../components/SectionQuestions';
import { getUltimeItems } from '../helper/getItems';

export default function App({ data }) {
  return (
    <Layout title="Principal">
      <Inicio />
      <SectionQuestions />
      <Tech />
      <Proyectos data={data} />
      <Planes />
      <Servicios />
      <Contacto />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getUltimeItems();
  return {
    props: {
      data,
    },
  };
}
