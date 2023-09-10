type Props = {
  className?: string;
};

function Container({ className, children }: React.PropsWithChildren<Props>) {
  return (
    <div
      className={`max-w-[2520px] mx-auto xl:px-20 md:px-9 sm:px-2 px-4 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
