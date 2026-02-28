import React from "react";
import Container from "../../components/Shared/Container/Container";

import errorAnimation from "../../assets/animation/Error-404.json";
import Lottie from "lottie-react";
import Button from "../../components/Shared/Button/Button";
import { useNavigate } from "react-router";

const Error404 = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Container>
        <div className="relative">
          <Lottie
            className="md:w-1/2 mx-auto"
            animationData={errorAnimation}
          ></Lottie>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 md:translate-y-40">
            <Button onClick={()=>navigate(-1)}>Go Back</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Error404;
