import Navbar from "./components/Navbar";
import ButtonBar from "./components/ButtonBar";
import Footers from "./components/Footer";
import EtikaEtiket from "./pages/EtikaEtiket";
import KodeEtik from "./pages/KodeEtikProfesi";
import PublicSpeaking from "./pages/PublicSpeaking";
import PersiapanPidato from "./pages/PersiapanPidato";
import BrandingGrooming from "./pages/Branding_Grooming";
import TableManner from "./pages/TableManner";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white  transition duration-500">
      <Navbar />
      <div className="pt-16">
        <ButtonBar />
        <div className="container mx-auto p-4">
          <EtikaEtiket />
          <TableManner />
          <KodeEtik />
          <PublicSpeaking />
          <PersiapanPidato />
          <BrandingGrooming />
          <Footers />
        </div>
      </div>
    </div>
  );
}
