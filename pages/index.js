import Layout from '../components/Layout';
import Inicio from '../components/Inicio/Inicio';
import Servicios from '../components/servicios/Servicios';
import Tech from '../components/Tech';
import Planes from '../components/planes/Planes';
import Contacto from '../components/contacto/Contacto';

export default function App() {
  return (
    <Layout title="Principal">
      <Inicio />
      <Tech />
      <Servicios />
      <Planes />
      <Contacto />
    </Layout>
  );
}
