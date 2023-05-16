
type Props = {
}

export default function MyPayarcSubmeny({}:Props) {
  return  <div
  className="pt-5 border border-l-blue-400 text-main-blue"
  data-testid="submenu"
>
  <div className="flex flex-col text-sm">
    <div>
      <span className="hover:bg-blue-200  p-1 m-1 rounded">
        Overview
      </span>
    </div>
    <div>
      <span className="hover:bg-blue-200  p-1 m-1 rounded ">
        Apply App
      </span>
    </div>
    <div>
      <span className="hover:bg-blue-200  p-1 m-1 rounded ">
        My Residuals
      </span>
    </div>
    <div>
      <span className="hover:bg-blue-200  p-1 m-1 rounded ">
        My Merchants
      </span>
    </div>
    <div>
      <span className="hover:bg-blue-200  p-1 m-1 rounded ">
        Resources
      </span>
    </div>
  </div>
</div>
}
