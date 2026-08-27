import AppNavbar from "@/components/app/AppNavbar";
import Footer from "@/components/Footer";
import AskLucid from "@/components/result/AskLucid";
import HistoryAnalytics from "@/components/result/HistoryAnalytics";
import ProductVerdict from "@/components/result/ProductVerdict";
import RatingAnalytics from "@/components/result/RatingAnalytics";
import RealWorldExperience from "@/components/result/RealWorldExperience";
import SourcesAndEvidence from "@/components/result/SourcesAndEvidence";

export default function ResultPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AppNavbar/>
        <ProductVerdict/>
        <RatingAnalytics/>
        <RealWorldExperience/>
        <HistoryAnalytics/>
        <SourcesAndEvidence/>
        <AskLucid/>
        <Footer/>
      </div>
    </main>
  );
}