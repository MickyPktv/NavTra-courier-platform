import React, { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';

const Profile = () => {

const [user, setUser] = useState({});

useEffect(() => {
  const storedToken = localStorage.getItem('jwt');
  const decoded = jwt_decode(storedToken);
  if (decoded.user) {
   setUser(decoded.user);
  }
}, []);


  return (
    <div>
      <header>
        <h3>
          <strong>{user.name}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {user._id}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};
export default Profile;



