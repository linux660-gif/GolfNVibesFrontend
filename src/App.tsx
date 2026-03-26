import AboutCard from "./assets/components/GolfResorts";
import CarouselComponent from "./assets/components/Carousel";
import HistoryCard from "./assets/components/History";
import Footer from "./assets/components/Footer";
import NavBar from "./assets/components/NavBar";
//import SignUpModal from './assets/components/SignUp';

import PastEventsCards from "./assets/components/PastEventsCards";
import StatisticsCard from "./assets/components/Statistics";
import TestmonialCard from "./assets/components/Testimonials";
import UpcomingEventCards from "./assets/components/UpcomingEventsCards";
import WhyChooseUs from "./assets/components/WhyChooseUs";
import TripRequestForm from "./assets/components/TripRequestForm";


function App() {


  return (
    <>
    <NavBar />
    <CarouselComponent />
    <HistoryCard />
    <PastEventsCards />
    <StatisticsCard />
    <AboutCard />
    <WhyChooseUs />
    <UpcomingEventCards />
    <TestmonialCard />
    <TripRequestForm />
    <Footer />

    </>
  )
}

export default App
