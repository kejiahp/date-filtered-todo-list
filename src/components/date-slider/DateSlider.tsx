import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import DateSliderItem from "./DateSliderItem";
import { dateSliderBreakPoints } from "../../constants/static_data";

type Props = {
  header: string;
  dates: {
    id: string | number;
    day: string;
    dateNumber: number;
  }[];
};

function DateSlider({ header, dates }: Props) {
  const [selected, setSelected] = useState<number | string>(2);

  return (
    <section className="my-6">
      <h2 className="font-bold mb-4 text-gray-800">{header}</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        className="mySwiper"
        grabCursor
        breakpoints={dateSliderBreakPoints}
      >
        {dates.map((item) => (
          <SwiperSlide key={item.id}>
            <DateSliderItem
              item={item}
              selected={selected}
              setSelected={setSelected}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default DateSlider;
