import { useRef } from "react";
import Sheet, { SheetRef } from "react-modal-sheet";
import { HiMiniXMark } from "react-icons/hi2";
// import { useScreenSize } from "../../hooks/useScreenSize";

type Props = {
  isOpen: boolean;
  header?: string;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
  isScrollable: boolean;
  initialSnap?: 0 | 1 | 2 | 3 | 4 | 5;
};

/**
 * This is a wrapper around the "react-modal-sheet" package to provide a custom reusable bottom sheet
 * for an enhanced mobile experience
 */
function BottomSheet({
  isOpen,
  header,
  setIsOpen,
  isScrollable,
  children,
  initialSnap = 0,
}: Props) {
  const ref = useRef<SheetRef>();

  /**
   * A component to dynamically specify if the bottom sheet be scrollable or not.
   */
  const SheetComponent = ({ children }: { children: React.ReactNode }) => {
    if (isScrollable) {
      return <Sheet.Scroller>{children}</Sheet.Scroller>;
    } else {
      return <Sheet.Content>{children}</Sheet.Content>;
    }
  };

  return (
    <>
      <Sheet
        className="sm:hidden" //ensure it only display's on mobile
        ref={ref}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        snapPoints={[550, 450, 400, 300, 150, 0]}
        initialSnap={initialSnap}
      >
        <Sheet.Container className="!rounded-tl-[28px] !rounded-tr-[28px]">
          <Sheet.Header>
            <div
              className={`py-2 px-3 flex ${
                header ? "justify-between px-6 pt-6" : "justify-end"
              }`}
            >
              <h1 className="font-bold text-gray-800">{header}</h1>
              <HiMiniXMark
                size={30}
                className="text-gray-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </Sheet.Header>

          <SheetComponent>{children}</SheetComponent>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}

export default BottomSheet;
