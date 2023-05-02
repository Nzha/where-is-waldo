import { storage } from '../utilities/firebase';

function Header({ className }) {
  return (
    <header className="sticky top-0 flex justify-around bg-[#5a5a5a] py-4 text-white">
      <div>Logo</div>
      <div className="flex items-center">
        {/* <div className={className} style={{color: 'red'}}>Waldo</div> */}
        <div className="flex flex-col items-center py-3 pr-6">
          <img
            className="h-10 w-10 object-contain"
            src="/images/avatars/waldo.png"
            alt="waldo"
          />
          <p className="text-sm font-bold">Waldo</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
