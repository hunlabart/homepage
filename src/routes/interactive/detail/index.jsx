import { useParams } from 'react-router-dom';
import Layout from "../../../components/Layout";
import WorkDetail from "../../../components/WorkDetail";
import totalData from '../../../assets/ArtistArtworksInfo.json'

export default function InteractiveDetailPage() {
  let { interactiveId } = useParams();
  const detail = totalData.find(it => it.id === interactiveId)
  return (
    <Layout title="Interactive">
      <WorkDetail detail={detail} />
    </Layout>
  );
}
