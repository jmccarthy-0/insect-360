const Error404 = () => {
  return (
    <div className="mx-auto grid min-h-dvh w-[95%] grid-rows-max-1fr">
      <main className="grid h-dvh w-full place-content-center bg-primary-light text-center">
        <h1 className="mb-4 text-5xl text-primary-dark md:text-6xl lg:text-8xl">
          404
        </h1>
        <p className="text-primary-dark">Page not found.</p>
      </main>
    </div>
  );
};

export default Error404;
