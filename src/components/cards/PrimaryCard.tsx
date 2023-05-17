function PrimaryCard() {
  return (
    <div
      className="bg-white shadow-menu-item rounded-xl p-10 gap-10  lg:gap-0 grid lg:grid-cols-primary-card grid-cols-1 flex-wrap items-center"
      aria-label="main-card"
    >
      <div aria-label="logo-area" className="flex flex-col items-center">
        <div
          className="relative w-[180px] h-[180px]
          bg-[url('/public/p-logo.png')] bg-contain bg-no-repeat"
        ></div>
      </div>

      <div className="grid grid-cols-1 gap-4 " aria-label="text-area">
        <div className="text-center lg:text-left text-3xl" aria-label="heading">
          <h1>Payarc Overview</h1>
        </div>

        <div className="text-sm text-[#737376]" aria-label="main-content">
          <p>
            We are a technology-driven company built for businesses. We know the
            challenges of starting and managing a business, so we embarked on a
            journey to provide smart and simple payment processing tools and
            products. Backed by a team of world-class experts and innovative
            technology, we are committed to helping businesses of all sizes get
            started, optimize revenue streams, and bridge the gap between online
            merchants and payment solutions.
          </p>
        </div>

        <div className="text-sm text-[#737376]" aria-label="footer">
          We are dedicated to empowering businesses to improve their
          organization - one payment at a time. For more information, visit{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
            href="https://payarc.com/"
          >
            https://payarc.com/
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default PrimaryCard;
