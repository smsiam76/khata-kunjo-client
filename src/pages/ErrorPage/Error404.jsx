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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 md:translate-y-24 text-center">
            <h5 className="text-2xl font-bold text-accent mb-4">
              The page you are looking for does not exist or has been moved.
            </h5>
            <div className="flex justify-center gap-4">
              <Button onClick={() => navigate(-1)}>Go Back</Button>
              <Button variant="outline" onClick={() => navigate("/contact")}>Contact Us</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Error404;
