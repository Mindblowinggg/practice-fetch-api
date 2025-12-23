import React, { useState } from "react";

const UserDataUi = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [nonDeletedUsers, setNonDeletedUsers] = useState(users);

  const handleDelete = (id) => {
    const remaining = nonDeletedUsers.filter((user) => user.id !== id);
    setNonDeletedUsers(remaining);
  };

  const FilteredUsers = nonDeletedUsers.filter((user) => {
    if (searchTerm.trim() === "") return true;
    return user.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="flex justify-center gap-3 md:gap-10">
        <input
          type="text"
          placeholder="Search user by name..."
          className="px-5 py-2 border-2 border-blue-500 rounded-3xl outline-none w-120 md:w-150"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="bg-green-500 text-white cursor-pointer px-2 py-1 rounded-xl">
          Add New User +
        </button>
      </div>

      {FilteredUsers.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-400">No User Found 😕</h2>
          <p className="text-gray-500 mt-2">Try searching for another name.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
          {FilteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              {/* --- 1. Header Section --- */}
              <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-6 relative">
                <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                <p className="text-blue-100 font-medium">@{user.username}</p>
                <span className="inline-block mt-2 bg-white/20 text-white text-xs px-2 py-1 rounded">
                  ID: {user.id}
                </span>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-white bg-red-500 cursor-pointer hover:bg-red-600 py-1 px-2.5 rounded-lg absolute right-6"
                >
                  Delete
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* --- 2. Contact Info --- */}
                <div className="space-y-2">
                  <InfoRow label="Email" value={user.email} />
                  <InfoRow label="Phone" value={user.phone} />
                  <div className="flex justify-between items-start text-sm">
                    <span className="font-semibold text-gray-500 w-24">
                      Website:
                    </span>
                    <a
                      href={`http://${user.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 font-medium hover:underline flex-1 text-right"
                    >
                      {user.website}
                    </a>
                  </div>
                </div>

                {/* --- 3. Address Section --- */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                      Address
                    </h3>
                    {/* Geo Location Link */}
                    <a
                      href={`https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-blue-500 hover:text-blue-700 font-bold flex items-center gap-1"
                    >
                      View on Map ↗
                    </a>
                  </div>
                  <p className="text-gray-700 font-medium">
                    {user.address.street}, {user.address.suite}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {user.address.city} - {user.address.zipcode}
                  </p>
                </div>

                {/* --- 4. Company Section --- */}
                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                  <h3 className="text-xs uppercase font-bold text-indigo-400 tracking-wider mb-2">
                    Company
                  </h3>
                  <p className="font-bold text-gray-800">{user.company.name}</p>
                  <p className="text-sm text-gray-600 italic mt-1">
                    "{user.company.catchPhrase}"
                  </p>
                  <div className="mt-3 pt-3 border-t border-indigo-200">
                    <span className="text-xs font-semibold text-indigo-500 bg-indigo-100 px-2 py-1 rounded-full">
                      BS: {user.company.bs}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Ek chhota helper component code clean rakhne ke liye
const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-start text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
    <span className="font-semibold text-gray-500 w-24">{label}:</span>
    <span className="text-gray-800 font-medium flex-1 text-right">{value}</span>
  </div>
);

export default UserDataUi;
