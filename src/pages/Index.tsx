import { Hero } from "@/components/Hero";
import { FoundedByAlumni } from "@/components/FoundedByAlumni";
import { ProgramOverview } from "@/components/ProgramOverview";
import { Testimonials } from "@/components/Testimonials";
import { CareerStreams } from "@/components/CareerStreams";
import { ProgramStructure } from "@/components/ProgramStructure";
import { StudentExperiences } from "@/components/StudentExperiences";
import { ProgramDeliverables } from "@/components/ProgramDeliverables";
import { FoundingTeam } from "@/components/FoundingTeam";
import { RealStories } from "@/components/RealStories";
import { SampleProjects } from "@/components/SampleProjects";
import { TrustedSchools } from "@/components/TrustedSchools";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <FoundedByAlumni />
      <ProgramOverview />
      <Testimonials />
      <CareerStreams />
      <ProgramStructure />
      <StudentExperiences />
      <ProgramDeliverables />
      <FoundingTeam />
      <RealStories />
      <SampleProjects />
      <TrustedSchools />
      <Footer />
    </div>
  );
};

export default Index;
