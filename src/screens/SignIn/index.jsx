import "./style.css"
import { signInWithEmailAndPassword, auth } from "../../config/Firebase/index.js"
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import Spiner from "../../component/Spiner/index.jsx";
import { useState } from "react";

const SignIn = () => {
  const [Loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = (values) => {
    setLoading(true)
    const { email, password } = values;
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        setLoading(false)
        navigate("/admin/dashboard")
      })
      .catch((error) => {
        setLoading(false)
        const errorCode = error.code;
        const errorMessage = error.message;
        messageApi.info(error.message);

      });

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      <div className="loginContainer">
        <div className="loginFormContainer">
          <div className="loginLogo">
            <img src="https://karwan-e-asra.com.pk/static/media/logo.9aa792d569625744d04a.png" />
          </div>

          <div className="loginHeading">
            <h1 >Welcome Admin</h1>
            <h2>Sign in to your account</h2>
          </div>

          <Form
            name="basic"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="labelStyle">
              <p>Email Address</p>
            </div>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please Enter Your Email Address!",
                },
              ]}
            >
              <Input className="inputStyle" />
            </Form.Item>
            <div className="labelStylePassword">
              <p>Password</p>
              <h5 className="forgotPassword">Forgot password?</h5>
            </div>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please Enter Your password!",
                },
              ]}
            >
              <Input.Password className="inputStyle" />
            </Form.Item>
            <Form.Item
            >
              <Button className="btnStyle" htmlType="submit">
                {Loading ?
                  (<Spiner />)
                  :
                  (<p>Login Admin</p>)
                }
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
};
export default SignIn;
