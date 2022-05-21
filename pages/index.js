import Layout from '../components/Layout';
import Inicio from '../components/Inicio/Inicio';
import Servicios from '../components/servicios/Servicios';

export default function App() {
  return (
    <Layout title="Principal">
      <Inicio />
      <Servicios />
    </Layout>
  );
}
