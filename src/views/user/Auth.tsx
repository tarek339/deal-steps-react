import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  ContentHolder,
  Form,
  FormImage,
  FormText,
  FormTitle,
  FramerMotion,
  Input,
  Span,
} from "../../components";
import { useDispatches } from "../../hooks";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const navigate = useNavigate();
  const { dispatchUser } = useDispatches();

  const register = "customer/sign-up";
  const signIn = "customer/sign-in";
  const resetPass = "customer/reset-password";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}${
          isRegister ? register : forgotPassword ? resetPass : signIn
        }`,
        {
          email,
          password,
        }
      );
      if (!forgotPassword) {
        dispatchUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContentHolder mt={24}>
      <FramerMotion>
        <FormImage
          image={
            "https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          }>
          <Form onSubmit={onSubmit}>
            <FormTitle
              title={
                isRegister
                  ? "Register"
                  : forgotPassword
                  ? "Submit your email to reset the password"
                  : "Sign in"
              }
            />

            <Input
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <>
              {!forgotPassword && (
                <Input
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              )}
            </>

            <div className="mb-6 flex items-center justify-between">
              {!forgotPassword && <Checkbox title={"Remember me"} />}

              {!forgotPassword && (
                <Span
                  text={"Forgot password?"}
                  onClick={() => {
                    setForgotPassword(true);
                    setIsRegister(false);
                  }}
                  cursor
                />
              )}
            </div>

            <div className="text-center lg:text-left">
              <Button
                title={isRegister || forgotPassword ? "Submit" : "Login"}
                type={"submit"}
                rippleColor={"light"}
                bgColor={"primary"}
              />

              <FormText
                text={
                  <>
                    {isRegister
                      ? "Allready have an account? "
                      : "Don't have an account? "}
                    <Span
                      className="cursor-pointer text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                      onClick={() => {
                        isRegister ? setIsRegister(false) : setIsRegister(true);
                        setForgotPassword(false);
                      }}
                      cursor
                      text={isRegister ? "Sign in" : "Register"}
                    />
                  </>
                }
              />
            </div>
          </Form>
        </FormImage>
      </FramerMotion>
    </ContentHolder>
  );
};

export default Auth;
