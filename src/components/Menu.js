function Menu({ x, y }) {
  return (
    <div
      className="fixed z-50 cursor-pointer rounded bg-white bg-opacity-80 px-4 py-2 shadow-lg hover:scale-105 hover:bg-opacity-100"
      style={{ top: y + 10, left: x + 5 }}
    >
      Waldo
    </div>
  );
}

export default Menu;
