import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import TradingViewTicker from "./components/TradingViewTicker";

export default function App() {
  return (
    <main className="w-full relative">
      <Nav />
      <HeroSection />
      <TradingViewTicker />
    </main>
  );
}
