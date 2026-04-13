const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: "hsl(35 40% 95%)" }}>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold" style={{ color: "hsl(150 25% 22%)" }}>404</h1>
        <p className="mb-4 text-xl" style={{ color: "hsl(30 10% 45%)" }}>Page not found</p>
        <a href="/" className="underline" style={{ color: "hsl(150 25% 22%)" }}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export { NotFound as Component };
export default NotFound;
