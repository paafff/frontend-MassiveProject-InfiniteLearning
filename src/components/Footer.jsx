import React from 'react';
import { useState } from 'react';
import Logo from '../assets/images/logo/logo2.webp';
import { Link } from 'react-router-dom';
import { FaXTwitter } from 'react-icons/fa6';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="min-h-full h-fit bg-zinc-900 flex flex-col py-10 px-4 md:px-10 lg:px-40 gap-8">
      <Brand />

      <Sosmed />

      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        <LinksFooter />

        <div className="flex gap-6">
          <Kebijakan /> <ContactUs />
        </div>
      </div>
    </div>
  );
};

const Brand = () => {
  return (
    <div className="flex gap-3 items-center">
      <Link to="/" aria-label="beranda">
        <img src={Logo} className="w-24" alt="" />
      </Link>
      <Link
        to="/"
        className="text-white text-lg font-semibold"
        aria-label="beranda"
      >
        HairHub
      </Link>
    </div>
  );
};

const Sosmed = () => {
  const linkSosmed = (e) => {
    window.open(e);
  };
  return (
    <div className="flex gap-3">
      <div className="bg-white hover:cursor-pointer w-fit p-4 rounded-md hover:scale-[1.2] transition-all">
        <FaXTwitter
          onClick={() =>
            linkSosmed('https://www.youtube.com/watch?v=JcGyLgVDoOo')
          }
          className="scale-150 "
        />
      </div>
      <div className="bg-white hover:cursor-pointer w-fit p-4 rounded-md hover:scale-[1.2] transition-all">
        <FaLinkedin
          onClick={() =>
            linkSosmed('https://www.youtube.com/watch?v=JcGyLgVDoOo')
          }
          className="scale-150"
        />
      </div>
      <div className="bg-white hover:cursor-pointer w-fit p-4 rounded-md hover:scale-[1.2] transition-all">
        <FaInstagram
          onClick={() =>
            linkSosmed('https://www.youtube.com/watch?v=JcGyLgVDoOo')
          }
          className="scale-150"
        />
      </div>
      <div className="bg-white hover:cursor-pointer w-fit p-4 rounded-md hover:scale-[1.2] transition-all">
        <FaFacebook
          onClick={() =>
            linkSosmed('https://www.youtube.com/watch?v=JcGyLgVDoOo')
          }
          className="scale-150"
        />
      </div>
    </div>
  );
};

const LinksFooter = () => {
  return (
    <div className="flex flex-col gap-2 text-white text-sm">
      <Link to="/" aria-label="beranda">
        Beranda
      </Link>
      <Link to="/barbershop" aria-label="barbershop">
        Barbershop
      </Link>
      <Link to="/salon" aria-label="salon">
        Salon
      </Link>
    </div>
  );
};

const Kebijakan = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white font-bold text-lg">KEBIJAKAN</p>
      <div className="flex flex-col gap-3">
        <Link to="/help-category" className="text-white text-sm">
          Pusat Bantuan
        </Link>
        <Link to="/term" className="text-white text-sm">
          Syarat dan Ketentuan
        </Link>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white font-bold text-lg">Contact Us</p>
      <div className="flex flex-col gap-3">
        <Link to="#" className="text-white text-sm">
          <FaPhoneAlt className="inline-block mr-3" />
          +62 341-71730328
        </Link>
        <Link to="#" className="text-white text-sm">
          <FaEnvelope className="inline-block mr-3" />
          il.undefined2023@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default Footer;
