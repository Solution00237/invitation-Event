import HeroSection from "@/components/HeroSection";
import InvitedSection from "@/components/InvitedSection";
import EventDetails from "@/components/EventDetails";
import MapSection from "@/components/MapSection";
import FloatingParticles from "@/components/FloatingParticles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuestMarquee from "@/components/GuestMarquee";
import EmptyProject from "@/components/EmptyProject";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080808] overflow-x-hidden">
      <Navbar />
      {/* <FloatingParticles /> */}
      {/* <HeroSection /> */}
      {/* <EventDetails /> */}
      <EmptyProject />
      {/* <GuestMarquee /> */}
      {/* <MapSection /> */}
      <Footer />
    </main>
  );
}
