import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Inicio from '../components/Inicio/Inicio';
import Servicios from '../components/servicios/Servicios';
import Tech from '../components/Tech';
import Planes from '../components/planes/Planes';
import Proyectos from '../components/proyectos/Proyectos';
import SectionQuestions from '../components/SectionQuestions';

import { getUltimeItems } from '../helper/getItems';

export default function App({ data }) {
  return (
    <Layout title="Principal">
      <Navbar />
      <Inicio />
      <SectionQuestions />
      <Tech />
      <Proyectos data={data} />
      <Planes />
      <Servicios />
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
