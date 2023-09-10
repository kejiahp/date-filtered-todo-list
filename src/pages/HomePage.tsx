import BottomInput from "../components/bottom-input/BottomInput";
import DateSlider from "../components/date-slider/DateSlider";
import GreetingBanner from "../components/greeting-banner/GreetingBanner";
import NavBar from "../components/navbar/NavBar";
import SplitPage from "../components/split-page/SplitPage";
import Alltasks from "../components/tasks/Alltasks";
import Container from "../components/ui/Container";
import { dateSliderDates } from "../constants/static_data";
import MobileModalsProvider from "../providers/MobileModalsProvider";
import DesktopModalsProvider from "../providers/DesktopModalsProvider";

function HomePage() {
  return (
    <>
      <Container className="border-b border-gray-200">
        <NavBar />
      </Container>

      <Container>
        <GreetingBanner />

        <SplitPage
          PrimaryComponent={
            <div className="pr-3 border-none sm:border-r sm:border-gray-300">
              <DateSlider header="January 2023" dates={dateSliderDates} />
              <Alltasks header="My Tasks" />

              <div className="mb-[74px] block sm:hidden"></div>
              <BottomInput />
            </div>
          }
          SecondaryComponent={<DesktopModalsProvider />}
        />
      </Container>

      <MobileModalsProvider />
    </>
  );
}

export default HomePage;
