import Header from "@/components/Header/header";
import { ServicesSlider } from "./components/ServicesSlider/ServicesSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header/>
      <ServicesSlider />
    </main>
  );
}