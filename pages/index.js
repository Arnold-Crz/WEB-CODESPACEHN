import Layout from '../components/Layout';
import Inicio from '../components/Inicio/Inicio';
import Servicios from '../components/servicios/Servicios';
import Tech from '../components/Tech';

export default function App() {
  return (
    <Layout title="Principal">
      <Inicio />
      <Tech />
      <Servicios />
    </Layout>
  );
}
