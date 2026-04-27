import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

function Profile() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <p className="text-center mt-10">Please login</p>;

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">

        {/* Profile */}
        <div className="text-center">
          <img src={user.image} className="h-24 w-24 rounded-full mx-auto" />
          <h2 className="text-2xl font-bold mt-3">{user.name}</h2>
          <p>{user.email}</p>
        </div>

        {/* Details */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>City:</b> {user.city}</p>
          <p><b>State:</b> {user.state}</p>
          <p><b>Pincode:</b> {user.pincode}</p>
          <p><b>Country:</b> {user.country}</p>
          <p className="col-span-2"><b>Address:</b> {user.address}</p>
        </div>

        <button
          onClick={logout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;