import React from "react";
import bg from "../assets/image.png";
import { FaEyeSlash, FaEye, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPass, setshowPass] = React.useState(false);
  const handleShowPass = () => {
    setshowPass(!showPass);
  };

  return (
    <>
      <div
        className="w-full h-100% "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="w-full h-screen bg-[rgba(17,17,17,0.25)]  filter backdrop:blur-[.8] flex items-center justify-center ">
          <div className=" w-[795px] h-auto bg-[#FFFFFF] rounded-[24px]  ">
            <form action="" className=" w-[528px] mx-auto my-[25px] ">
              <div className=" flex flex-col items-center justify-center">
                <div className=" w-[48px] h-[48px] bg-[#C4C4C4] rounded-full  "></div>
                <h2 className=" font-Poppins font-medium text-[32px] text-[#333333] mt-[24px] mb-[2px] ">
                  Log in
                </h2>
                <p className=" font-Poppins font-normal text-[16px] text-[#666666] ">
                  Don’t have an ccount?
                  <span className=" text-[#333333] font-medium cursor-pointer "> Sign up</span>
                </p>
              </div>
              <div className=" flex flex-col items-center justify-center my-[40px] gap-[16px] ">
                <button className=" w-full h-[72px] rounded-[40px] border-[2px] broder-[#333333] flex items-center justify-center font-Poppins font-normal text-[22px] text-[#333333] ">
                  <FaFacebook className=" text-[#0C82EE] mr-[15px]  h-8 w-8 " />
                  Log in with Facebook
                </button>
                <button className=" w-full h-[72px] rounded-[40px] border-[2px] broder-[#333333] flex items-center justify-center font-Poppins font-normal text-[22px] text-[#333333] ">
                  <FcGoogle className=" text-[#0C82EE] mr-[15px]  h-8 w-8 " />
                  Log in with Google
                </button>
              </div>
              <div>
                <p
                  className=" flex items-center justify-center   relative before:absolute before:left-0 before:top-[50%] before:bg-[rgba(102,102,102,0.25)] before:w-[223.5px] before:h-[2px] 
                after:absolute after:right-0 after:top-[50%] after:bg-[rgba(102,102,102,0.25)] after:w-[223.5px] after:h-[2px] "
                >
                  OR
                </p>
              </div>
              <div className=" mt-[40px]  flex flex-col gap-[24px] ">
                <div>
                  <label
                    className="font-Poppins font-normal text-[16px] text-[#666666]  "
                    htmlFor="email"
                  >
                    Your email
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    id="email"
                    name="name"
                    className=" h-[56px] border-[1px] border-[rgba(102,102,102,0.35)] rounded-[12px] w-full outline-none "
                  />
                </div>
                <div>
                  <div className=" flex items-center justify-between ">
                    <label
                      htmlFor="password"
                      className="font-Poppins font-normal text-[16px] text-[#666666]  "
                    >
                      Your password
                    </label>
                    <div className="flex min-w-[75px] items-center justify-between font-Poppins font-normal text-[18px] text-[rgba(102,102,102,0.8)] ">
                      {showPass ? (
                        <FaEye
                          onClick={handleShowPass}
                          className="  cursor-pointer"
                        />
                      ) : (
                        <FaEyeSlash
                          onClick={handleShowPass}
                          className="  cursor-pointer"
                        />
                      )}
                      {showPass ? (
                        <p onClick={handleShowPass} className=" cursor-pointer">
                          Hide
                        </p>
                      ) : (
                        <p
                          className="  cursor-pointer"
                          onClick={handleShowPass}
                        >
                          Show
                        </p>
                      )}
                    </div>
                  </div>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder=""
                    id="password"
                    name="name"
                    className=" h-[56px] border-[1px] border-[rgba(102,102,102,0.35)] rounded-[12px] w-full outline-none "
                  />
                  <div className="flex justify-end mt-[8px] mb-[24px] ">
                    <a href="#">Forget your password</a>
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-[#111111] text-white w-full h-[64px] rounded-[40px] filter mix-blend-multiply opacity-[.25]  font-Poppins font-medium text-[22px] transition-all duration-300 hover:opacity-[.4] ">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
