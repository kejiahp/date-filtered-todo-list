import React from "react";

type Props = {
  PrimaryComponent: React.JSX.Element;
  SecondaryComponent: React.JSX.Element;
};

function SplitPage({ PrimaryComponent, SecondaryComponent }: Props) {
  return (
    <div className="flex h-full gap-5">
      <div className="w-full sm:w-[65%] min-h-screen ">{PrimaryComponent}</div>

      <div className="w-[35%] min-h-screen hidden sm:block">
        {SecondaryComponent}
      </div>
    </div>
  );
}

export default SplitPage;
