import { useNavigate } from "react-router-dom";
import { TETabs, TETabsItem } from "tw-elements-react";
import { useDispatches, useSelectors } from "../hooks";

const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useSelectors();
  const { dispatchRemoveUser } = useDispatches();

  return (
    <div className="mb-3 flex justify-end">
      <TETabs>
        <TETabsItem
          active={location.pathname === "/" ? true : false}
          onClick={() => {
            navigate("/");
          }}>
          Products
        </TETabsItem>

        {user && user.isVerified && (
          <>
            <TETabsItem
              active={location.pathname === "/user-profile" ? true : false}
              onClick={() => {
                navigate("/user-profile");
              }}>
              Profile
            </TETabsItem>
            <TETabsItem
              active={location.pathname === "/cart" ? true : false}
              onClick={() => {
                navigate("/cart");
              }}>
              Cart
            </TETabsItem>
          </>
        )}

        {user ? (
          <TETabsItem
            onClick={() => {
              navigate("/auth");
              dispatchRemoveUser();
              localStorage.removeItem("token");
            }}>
            Log out
          </TETabsItem>
        ) : (
          <TETabsItem
            active={location.pathname === "/auth" ? true : false}
            onClick={() => {
              navigate("auth");
            }}>
            Auth
          </TETabsItem>
        )}
      </TETabs>
    </div>
  );
};

export default NavBar;
