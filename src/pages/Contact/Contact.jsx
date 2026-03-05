import React from "react";
import Container from "../../components/Shared/Container/Container";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="my-16">
      <Container>
        <div>
          <h3>
            অর্ডারের জন্য আমাদের{" "}
            <a
              href={`https://wa.me/8801306507274`}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline font-medium"
            >
              Whatsapp
            </a>{" "}
            নাম্বার অথবা{" "}
            <a
              href={`https://m.me/khatakunjobd`}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline font-medium"
            >
              Facebook
            </a>{" "}
            পেজে ম্যাসেজ দিন।
          </h3>
          <div className="flex gap-4 mt-4">
            <a
              href={`https://m.me/khatakunjobd`}
              target="_blank"
              rel="noreferrer"
              className="order-2 flex items-center gap-2 border rounded-md px-4 py-2 bg-blue-500 text-white font-medium w-fit transition-all duration-300 ease-linear hover:bg-white hover:text-blue-500"
            >
              <FaFacebookF /> Facebook
            </a>
            <a
              href={`https://wa.me/8801306507274`}
              target="_blank"
              rel="noreferrer"
              className="order-1 flex items-center gap-2 border rounded-md px-4 py-2 bg-green-400 text-white font-medium w-fit transition-all duration-300 ease-linear hover:bg-white hover:text-green-500"
            >
              <FaWhatsapp /> Whatsapp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
