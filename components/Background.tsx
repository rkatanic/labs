const Background = (): JSX.Element => {
  return (
    <div className="background">
      <div className="grid"></div>
      <div className="sun">
        <div className="sun-ray"></div>
      </div>
      <div className="planets">
        <div className="orbit"></div>
        <div className="orbit"></div>
        <div className="orbit">
          <div className="earth"></div>
        </div>
        <div className="orbit"></div>
        <div className="orbit">
          <div className="jupiter"></div>
        </div>
        <div className="orbit">
          <div className="saturn"></div>
        </div>
        <div className="orbit"></div>
        <div className="orbit"></div>
        <div className="orbit"></div>
      </div>
    </div>
  );
};

export default Background;
