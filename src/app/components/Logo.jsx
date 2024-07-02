const Logo = () => {
  return (
    <div className="group relative ml-5 flex items-center justify-center">
      <div className="text-xl font-bold text-primary">E</div>

      <div className="absolute h-[28px] w-[50px]">
        <div className="relative h-full w-full">
          <span className="absolute left-0 h-full w-1 bg-primary"></span>
          <span className="absolute right-0 h-full w-1 bg-primary"></span>
        </div>
      </div>

      <div className="rotate-60 absolute h-[28px] w-[50px] transform">
        <div className="relative h-full w-full">
          <span className="absolute left-0 h-full w-1 bg-primary"></span>
          <span className="absolute right-0 h-full w-1 bg-primary"></span>
        </div>
      </div>

      <div className="absolute h-[28px] w-[50px]">
        <div className="-rotate-60 relative h-full w-full transform">
          <span className="absolute left-0 h-full w-1 bg-primary"></span>
          <span className="absolute right-0 h-full w-1 bg-primary"></span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
