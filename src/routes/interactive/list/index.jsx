import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";

export default function InteractiveListPage() {
  return (
    <Layout title="Interactive">
      <div>
        interactiveListPage
        <Link to={`/interactive/detail/1`}>interactive/detail/1</Link>
        <Link to={`/interactive/detail/2`}>interactive/detail/2</Link>
      </div>
    </Layout>
  );
}
