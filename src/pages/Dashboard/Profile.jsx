import React, { useContext } from "react";
import AuthContext from "../../provider/AuthContext";
import { Link, useNavigate } from "react-router";
import Container from "../../components/Shared/Container/Container";

const Profile = () => {
  const { user, logOutUser, role } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOutUser()
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="my-16">
      <Container>
        <div>
          <div>
            {role === "admin" && (
              <Link to="/admin/add-products" className="mb-8 btn btn-accent ">
                Add Products
              </Link>
            )}
            <h3 className="mb-6">Email: {user?.email}</h3>
            <button
              className="btn btn-primary text-white"
              onClick={handleLogOut}
            >
              LogOut
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Profile;
