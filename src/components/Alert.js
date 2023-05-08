function Alert({ message, type }) {
  const tailwindClasses = {
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
  };

  return (
    <div
      className={`fixed left-1/2 top-24 -translate-x-1/2 transform rounded-lg px-10 py-2 ${tailwindClasses[type]} `}
    >
      <p>{message}</p>
    </div>
  );
}

export default Alert;
