import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Advantages from "@/components/Advantages";
import Care from "@/components/Care";
import Products from "@/components/Products";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <Hero />
      <Description />
      <Advantages />
      <Care />
      <Products />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;