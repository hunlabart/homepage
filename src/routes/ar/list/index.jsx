import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";

export default function ARListPage() {
  return (
    <Layout title="AR">
      <div>
        ARListPage
        <Link to={`/ar/detail/1`}>ar/detail/1</Link>
        <Link to={`/ar/detail/2`}>ar/detail/2</Link>
      </div>
    </Layout>
  );
}
