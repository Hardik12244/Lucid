import ProductVerdict from "@/components/result/ProductVerdict";
import RatingAnalytics from "@/components/result/RatingAnalytics";
import RealWorldExperience from "@/components/result/RealWorldExperience";

export default function ResultPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ProductVerdict/>
        <RatingAnalytics/>
        <RealWorldExperience/>
      </div>
    </main>
  );
}