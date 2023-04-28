function Header({ className }) {
  return (
    <header className="sticky top-0 flex justify-around bg-[#5a5a5a] py-4 text-white">
      <div>Logo</div>
      <div className={className}>Waldo</div>
    </header>
  );
}

export default Header;
