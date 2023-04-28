function Menu({ x, y, menuX, menuY }) {
  const handleClick = () => {
    if (x > 2130 && x < 2175 && y > 533 && y < 631) {
      console.log('Waldo Found!');
    }
  };

  return (
    <div
      className="fixed z-50 cursor-pointer rounded bg-white bg-opacity-80 px-4 py-2 shadow-lg hover:scale-105 hover:bg-opacity-100"
      style={{ top: menuY + 10, left: menuX + 5 }}
      onClick={handleClick}
    >
      Waldo
    </div>
  );
}

export default Menu;
