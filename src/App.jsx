import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Overview from "./components/Overview";
import ImportantDates from "./components/ImportantDates";
import Submissions from "./components/Submissions";
import KeynoteSpeakers from "./components/KeynoteSpeakers";
import Venue from "./components/Venue";
import RegistrationFees from "./components/RegistrationFees";
import Sponsors from "./components/Sponsors";
import ConferenceChairs from "./components/ConferenceChairs";
import ConferenceInfo from "./components/ConferenceInfo";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">  
      <Navbar />
        <Banner />
        {/* <ConferenceInfo/> */}
        <Overview />
        <ImportantDates />
        <Submissions />
        <KeynoteSpeakers />
        <Venue />
        <RegistrationFees />
        <Sponsors />
        <ConferenceChairs />
        <Footer/>
    </div>
  );
};

export default App;