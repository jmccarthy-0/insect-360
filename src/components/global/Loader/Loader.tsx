const Loader = () => {
  return (
    <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black">
      <span className="pointer-events-none h-12 w-12 animate-spin rounded-full border-4 border-primary-dark border-r-accent-dark"></span>
    </div>
  );
};

export default Loader;
