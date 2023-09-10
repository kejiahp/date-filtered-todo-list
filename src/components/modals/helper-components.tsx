import { forwardRef } from "react";

/**
 * check if the selected date is today
 */
function isToday(value: string): boolean {
  const newDate = new Date(value);
  const today = new Date();

  return newDate.toDateString() === today.toDateString();
}

type Props = {
  icon: any;
  value?: any;
  onClick?: () => void;
};

/**
 *
 * To use a custom component with "react-datepicker" package the custom component needs to ba capable of accepting refs
 * so i used the forwardRef api to give my component that functionality.
 */
export const DateTimeSelectorButton = forwardRef<HTMLButtonElement, Props>(
  ({ icon: Icon, value, onClick }, ref) => (
    <button
      onClick={onClick!}
      ref={ref}
      className="flex gap-2 items-center border border-gray-300 p-1 rounded-md bg-white"
    >
      <Icon size={15} className="text-gray-800 font-extrabold" />
      <p className="text-sm font-semibold text-gray-500">
        {isToday(value) ? "Today" : value}
      </p>
    </button>
  )
);
