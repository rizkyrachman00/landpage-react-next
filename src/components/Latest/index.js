import Image from "next/image";
import React from "react";
import {
  Cover5,
  Cover6,
  Cover7,
  Cover8,
  StarOn,
  StarOff,
  Author1,
  Author2,
  Author3,
  Author4,
} from "../../../public";

const Latest = () => {
  return (
    <section className="popular">
      <div className="flex justify-between items-center p-10">
        <h2>Latest Books</h2>
        <a href="#">View All</a>
      </div>
      <div className="pl-10 pr-10 grid grid-cols-4 gap-4">
        {/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image className="rounded-2xl" src={Cover5} alt="cover5" />
            <h3 className="mt-3">Hellocalize Festival</h3>
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
                <Image src={StarOn} alt="StarOn" />
              </li>
            </ul>
            <h4 className="mt-5 mb-5">Bandung</h4>
            <div className="flex items-center">
              <Image src={Author1} alt="author1" />
              <p className="ml-2">
                <span className="font-semibold">rizkyrachman</span> - 3 week ago
              </p>
            </div>
          </div>
        </div>
        {/* col */}
        {/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image className="rounded-2xl" src={Cover6} alt="cover6" />
            <h3 className="mt-3">Indonesia Unlimited</h3>
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
                <Image src={StarOff} alt="StarOff" />
              </li>
            </ul>
            <h4 className="mt-5 mb-5">Tangerang</h4>
            <div className="flex items-center">
              <Image src={Author2} alt="author2" />
              <p className="ml-2">
                <span className="font-semibold">Ivano Perlita</span> - 5 day ago
              </p>
            </div>
          </div>
        </div>
        {/* col */}
        {/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image className="rounded-2xl" src={Cover7} alt="cover7" />
            <h3 className="mt-3">Musik Indonesia</h3>
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
                <Image src={StarOn} alt="StarOn" />
              </li>
              <li>
                <Image src={StarOn} alt="StarOn" />
              </li>
            </ul>
            <h4 className="mt-5 mb-5">Jawa Barat</h4>
            <div className="flex items-center">
              <Image src={Author2} alt="author3" />
              <p className="ml-2">
                <span className="font-semibold">Ivano Perlita</span> - 1 month
                ago
              </p>
            </div>
          </div>
        </div>
        {/* col */}
        {/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image className="rounded-2xl" src={Cover8} alt="cover8" />
            <h3 className="mt-3">Degega Phoria</h3>
            <ul className="flex">
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOn} alt="starOn" />
              </li>
              <li>
                <Image src={StarOn} alt="StarOn" />
              </li>
              <li>
                <Image src={StarOff} alt="StarOff" />
              </li>
              <li>
                <Image src={StarOff} alt="starOff" />
              </li>
            </ul>
            <h4 className="mt-5 mb-5">Yogyakarta</h4>
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

export default Latest;
