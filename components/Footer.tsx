import DateTime from "./DateTime";

const Footer = () => {
  return (
    <div className="max-w-5xl my-16 m-auto flex gap-4 justify-between">
      <DateTime />
      <div className="flex gap-4">
        <span>.gh</span>
        <span>.ln</span>
      </div>
    </div>
  );
};

export default Footer;
