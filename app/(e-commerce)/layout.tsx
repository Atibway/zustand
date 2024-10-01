import { Footer } from "@/components/e-commerce/Footer";
import { Header } from "@/components/e-commerce/Header";

interface EcomerceLayoutProps {
    children: React.ReactNode;
}

const EcomerceLayout = ({
    children
}: EcomerceLayoutProps) => {
  return (
    <>
    <Header/>
    <div className="min-h-[40rem]">
{children}
    </div>
    <Footer/>
    </>
    
  )
}

export default EcomerceLayout