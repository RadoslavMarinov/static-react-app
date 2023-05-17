function SmallCards() {
  return (
    <div className=" gap-6 justify-center grid lg:grid-cols-auto-fit">
      <div
        aria-label="small-card"
        className="rounded-lg p-6 shadow-menu-item grid grid-cols-1 gap-5 bg-white"
      >
        <div className="text-xl">Payarc Terminals</div>
        <div className="text-sm text-[#737376]">
          Ever wondered about those mysterious NABU fees on your statement?
        </div>
        <button className="rounded px-5 py-1 max-w-[6em] text-white text-sm bg-blue-300 hover:bg-blue-500">
          Enter
        </button>
      </div>

      <div
        aria-label="small-card"
        className="rounded-lg p-6 shadow-menu-item grid grid-cols-1 gap-5 bg-white"
      >
        <div className="text-xl">Payarc + Curv</div>
        <div className="text-sm text-[#737376]">
          Ever wondered about those mysterious NABU fees on your statement?
        </div>
        <button className="rounded px-5 py-1 max-w-[6em] text-white text-sm bg-blue-300 hover:bg-blue-500">
          Enter
        </button>
      </div>

      <div
        data-testid="small-card"
        className="rounded-lg p-6 shadow-menu-item grid grid-cols-1 gap-5 bg-white"
      >
        <div className="text-xl">Payarc Banks</div>
        <div className="text-sm text-[#737376]">
          Ever wondered about those mysterious NABU fees on your statement?
        </div>
        <button className="rounded px-5 py-1 max-w-[6em] text-white text-sm bg-blue-300 hover:bg-blue-500">
          Enter
        </button>
      </div>
    </div>
  );
}

export default SmallCards;
