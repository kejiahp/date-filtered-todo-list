type Props = {
  showText?: boolean;
  showIcon: boolean;
};

function Logo({ showIcon, showText = true }: Props) {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      {showIcon && (
        <div className="block sm:hidden">
          <span className="sr-only">Schoolinka Todo Logo</span>
          <img
            src={"./Logo.png"}
            alt="logo"
            className="w-[40px] h-[40px] rounded-full"
          />
        </div>
      )}
      {showText && <h1 className="font-bold text-xl font-[inter]">ToDo</h1>}
    </div>
  );
}

export default Logo;
