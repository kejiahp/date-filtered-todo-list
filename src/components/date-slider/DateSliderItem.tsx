type Props = {
  selected: number | string;
  setSelected: React.Dispatch<React.SetStateAction<number | string>>;
  item: {
    id: string | number;
    day: string;
    dateNumber: number;
  };
};

function DateSliderItem({ selected, setSelected, item }: Props) {
  return (
    <div
      onClick={() => setSelected(item.id)}
      className={`transform transition-all duration-300 ease-in-out cursor-pointer border border-gray-300 overflow-hidden w-[80px] h-[90px] flex flex-col justify-evenly items-center gap- rounded-lg ${
        selected === item.id ? "bg-blue-600" : "bg-transparent"
      } font-semibold  ${
        selected === item.id ? "text-white" : "text-gray-700"
      }`}
    >
      <p>{item.day.slice(0, 3)}</p>
      <p>{item.dateNumber}</p>
    </div>
  );
}

export default DateSliderItem;
