function Table({ children }) {
  return (
    <div className="flex flex-col bg-gray-100 pb-8">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-80">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b bg-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="px-14 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    Rank
                  </th>
                  <th
                    scope="col"
                    className="px-14 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="px-14 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    Time
                  </th>
                </tr>
              </thead>
              <tbody clas>{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
