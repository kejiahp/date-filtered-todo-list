type Props = {
  image?: string;
};

function Avatar({ image = "./Avatar.png" }: Props) {
  return (
    <img
      src={image}
      alt="avatar"
      className="w-[40px] h-[40px] cursor-pointer rounded-full"
    />
  );
}

export default Avatar;
