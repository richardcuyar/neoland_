import { Layout } from "../../components/layaout";
import ProductList from "../../components/product/productList";

function HomePage() {
  return (
    <Layout>
      {/* Todo el contenido de la página Home */}
      <ProductList />
      {/* Más contenido... */}
    </Layout>
  );
}

export default HomePage; // ✅ Exportación por defecto
