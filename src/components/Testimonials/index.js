import Image from "next/image";
import React from "react";
import { Client1, Client2, Client3, Kutip } from "../../../public";

const Testimonials = () => {
  return (
    <section>
      <div className="p-10 mt-20">
        <div className="grid grid-cols-3 gap-3">
          {/* col */}
          <div className="testimoni text-center border-2">
            <div>
              <div className="flex justify-center items-center text-center">
                <Image
                  src={Client1}
                  alt="Client1"
                  className="gambar ml-2 mr-20"
                />
                <Image src={Kutip} alt="Kutip" className="gambar" />
              </div>
              <h5>Aurel Dinda Salsabila</h5>
              <p>
                Tiket konsernya mudah didapatkan dan proses pembelian sangat
                lancar. Konsernya sendiri luar biasa, performa musisinya sangat
                mengesankan dan suasana penonton sangat hidup. Ini adalah
                pengalaman yang tak terlupakan. Saya pasti akan membeli tiket
                lagi untuk acara berikutnya!
              </p>
            </div>
          </div>
          {/* col */}
          {/* col */}
          <div className="testimoni text-center border-2">
            <div>
              <div className="flex justify-center items-center text-center">
                <Image
                  src={Client2}
                  alt="Client2"
                  className="gambar ml-2 mr-20 rounded-full"
                />
                <Image src={Kutip} alt="Kutip" className="gambar" />
              </div>
              <h5>Ivano Perlita Hafid R</h5>
              <p>
                Saat konser, atmosfernya sangat memikat dan musiknya
                menggelegar. Saya sangat senang telah menghadiri acara ini dan
                pasti akan mencari kesempatan untuk menghadiri konser mereka
                lagi di masa depan!
              </p>
            </div>
          </div>
          {/* col */}
          {/* col */}
          <div className="testimoni text-center border-2">
            <div>
              <div className="flex justify-center items-center text-center">
                <Image
                  src={Client3}
                  alt="Client3"
                  className="gambar ml-2 mr-20 rounded-full"
                />
                <Image src={Kutip} alt="Kutip" className="gambar" />
              </div>
              <h5>Muhammad Rizky Rachman</h5>
              <p>
                Konser ini benar-benar memukau dari awal hingga akhir. Tiketnya
                mudah dipesan dan prosesnya cepat. Penampilan artisnya sangat
                menginspirasi dan energinya luar biasa. Suasananya begitu
                mempesona, membuat saya betah dan terkesan dalam setiap
                detiknya. Saya sangat merekomendasikan pengalaman ini kepada
                semua penggemar musik!
              </p>
            </div>
          </div>
          {/* col */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
