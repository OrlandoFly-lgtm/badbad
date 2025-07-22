
import React from "react";
import backgroundImage from "../assets/bg.jpg";

export default function Welcome() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-75 shadow-inner"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1
          className="text-[128px] font-normal font-['Spectral_SC'] text-black text-center"
          style={{
            textShadow: "0px 4px 4px #2A2831",
            WebkitTextStroke: "1px #000"
          }}
        >
          МЕССЬЕР
        </h1>
        <p
          className="max-w-[886px] mt-6 text-[24px] font-normal font-[Spectral] text-white text-center"
          style={{
            opacity: 0.99,
            WebkitTextStroke: "1px rgba(0, 0, 0, 0.08)",
            lineHeight: "36.5px"
          }}
        >
          B2B‑платформа с ручным отбором исполнителей и решением задач бизнеса
        </p>
        <div className="mt-12 flex flex-col md:flex-row items-center gap-6">
          <a
            href="/register/performer"
            className="flex justify-center items-center w-[380px] px-[6px] pt-[7px] border border-[#594558] bg-white/15"
          >
            <span className="w-[369px] text-white text-[32px] font-[Sexsmith]">
              Зарегистрироваться как специалист
            </span>
          </a>
          <a
            href="/login"
            className="flex justify-center items-center w-[62px] px-[6px] border border-[#594558] bg-white/15"
          >
            <span className="w-[51px] text-white text-[32px] font-[Sexsmith]">
              ВХОД
            </span>
          </a>
          <a
            href="/register/client"
            className="flex justify-center items-center px-[25px] pt-[7px] pb-0 border border-[#594558] bg-white/15"
          >
            <span className="w-[322px] text-white text-[32px] font-[Sexsmith]">
              Зарегистрироваться как клиент
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
