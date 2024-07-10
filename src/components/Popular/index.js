import Image from "next/image";
import React from "react";
import {
  Cover1,
  Cover2,
  Cover3,
  Cover4,
  StarOn,
  StarOff,
  Author1,
  Author2,
  Author3,
  Author4,
} from "../../../public";

const Popular = () => {
  return (
    <section className="popular">
      <div className="flex justify-between items-center p-10">
        <h2>Popular Now</h2>
        <a href="#">View All</a>
      </div>
      <div className="pl-10 pr-10 grid grid-cols-4 gap-4">
        {/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image className="rounded-2xl" src={Cover1} alt="cover1" />
            <h3 className="mt-3">Music Festival</h3>
            <ul className="flex">
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOff} alt="starOff" />
              </li>
            </ul>
            <h4 className="mt-5 mb-5">Yogyakarta</h4>
            <div className="flex items-center">
              <Image src={Author1} alt="author1" />
              <p className="ml-2">
                <span className="font-semibold">rizkyrachman</span> - 1 week ago
              </p>
            </div>
          </div>
        </div>
        {/* col */}
        {/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image className="rounded-2xl" src={Cover2} alt="cover2" />
            <h3 className="mt-3">Electro Music Festival</h3>
            <ul className="flex">
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
            </ul>
            <h4 className="mt-5 mb-5">Bali</h4>
            <div className="flex items-center">
              <Image src={Author2} alt="author2" />
              <p className="ml-2">
                <span className="font-semibold">Ivano Perlita</span> - 1 day ago
              </p>
            </div>
          </div>
        </div>
        {/* col */}
        {/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image className="rounded-2xl" src={Cover3} alt="cover3" />
            <h3 className="mt-3">Freedom Of Gambleh</h3>
            <ul className="flex">
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOff} alt="starOff" />
              </li>
              <li>
                <Image src={StarOff} alt="starOff" />
              </li>
            </ul>
            <h4 className="mt-5 mb-5">Jawa Tengah</h4>
            <div className="flex items-center">
              <Image src={Author3} alt="author3" />
              <p className="ml-2">
                <span className="font-semibold">Dodi Purnomo</span> - 2 week ago
              </p>
            </div>
          </div>
        </div>
        {/* col */}
        {/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image className="rounded-2xl" src={Cover4} alt="cover4" />
            <h3 className="mt-3">Indonesia Keren</h3>
            <ul className="flex">
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOff} alt="StarOff" />
              </li>
              <li>
                <Image src={StarOff} alt="StarOff" />
              </li>
              <li>
                <Image src={StarOff} alt="starOff" />
              </li>
            </ul>
            <h4 className="mt-5 mb-5">Jakarta</h4>
            <div className="flex items-center">
              <Image src={Author4} alt="author4" />
              <p className="ml-2">
                <span className="font-semibold">Surya Adi</span> - 3 day ago
              </p>
            </div>
          </div>
        </div>
        {/* col */}
      </div>
    </section>
  );
};

export default Popular;
