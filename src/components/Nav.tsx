import { RiShoppingBag4Line } from "react-icons/ri";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center pt-16 px-32 absolute top-0 left-0 z-100 w-full text-white/80">
      <div>
        <span className="text-3xl font-bold">Bontazi</span>
      </div>
      <div className="hidden lg:flex items-center justify-center text-center font-heading text-lg">
        <ul className="flex gap-8">
          <li>
            <a href="/produkter" className="underline underline-offset-4">
              PRODUKTER
            </a>
          </li>
          <li>
            <a href="/om-oss" className="underline underline-offset-4">
              OM OSS
            </a>
          </li>
          <li>
            <button>
              <RiShoppingBag4Line className="mt-1" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
