"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Pricing: React.FC = () => {
  return (
    <>
      <section id="pricing" className="pricing-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 style={{ color: "blue" }}>Pricing </h2>
            <h3 className="text-muted">Penawaran Menarik Dari Kami</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div
                className="single-price-package"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="price-header">
                  <h3>Paket A</h3>
                  <Image
                    src="/images/cardd.png"
                    alt="App Mockup image"
                    width={400}
                    height={500}
                  />
                  <div className=" mt-4">
                    <h5 className="text-muted">Rp 10.000</h5>
                    <h5 className="text-muted">/ Registrasi User</h5>
                    <h5 className="text-muted">Rp 20.000</h5>
                    <h5 className="text-muted">/ Kartu Digital</h5>
                    <h5 className="text-muted">Rp 0,-</h5>
                    <h5 className="text-muted">/ Bulan</h5>
                  </div>
                  <hr></hr>
                  <h4>Platform yang Didapat</h4>
                </div>
                <ul className="price-list">
                  <li>Tagihan Digital</li>
                  <li>Absensi</li>
                  <li>Kalender Akademik</li>
                  <li>Donasi</li>
                  <li>Jadwal Pelajaran</li>
                  <li>Berita Informasi</li>
                  <li>PPDB</li>
                  <br></br>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="single-price-package"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="price-header">
                  <h3>PAKET B</h3>
                  <Image
                    src="/images/laptop.png"
                    alt="App Mockup image"
                    width={400}
                    height={500}
                  />
                  <div className=" mt-4">
                    <h5 className="text-muted">Rp 0</h5>
                    <h5 className="text-muted">/ Registrasi User</h5>
                    <h5 className="text-muted">Rp 20.000</h5>
                    <h5 className="text-muted">/ Cetak Kartu</h5>
                    <h5 className="text-muted">Rp 1000.000,-</h5>
                    <h5 className="text-muted">/ Bulan</h5>
                  </div>
                  <hr></hr>
                  <h4>Platform yang Didapat</h4>
                </div>
                <ul className="price-list">
                  <li>Transaksi Cashless</li>
                  <li>Manajemen Kantin</li>
                  <li>Transfer Bank</li>
                  <li>Transaksi Cashless</li>
                  <li>Manajemen Kantin</li>
                  <li>Transfer Bank</li>
                  <li>Transaksi Cashless</li>
                  <li>Manajemen Kantin</li>
                  <li>Transfer Bank</li>
                  <li>Transaksi Cashless</li>
                  <li>Manajemen Kantin</li>
                  <li>Transfer Bank</li>
                  <br></br>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="single-price-package"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <div className="price-header">
                  <h3>PAKET C</h3>
                  <Image
                    src="/images/aaaa.png"
                    alt="App Mockup image"
                    width={400}
                    height={500}
                  />
                  <div className=" mt-4">
                    <h5 className="text-muted">Rp 2.500.000</h5>
                    <h5 className="text-muted">/ Android POS</h5>
                    <h5 className="text-muted">Rp 1.500.000</h5>
                    <h5 className="text-muted">/ Mesin Absensi</h5>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                  <hr></hr>
                  <h4>Hardware Pendukung</h4>
                  <ul className="price-list">
                    <li>Parkir</li>
                    <li>Akses Pintu</li>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </ul>

                  <div className="price-footer"></div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h4 className="text-center">
                Informasi produk dan harga lebih detail
              </h4>
              <center>
                <div className="price-footer col-sm-3 text-center">
                  <Link href="https://api.whatsapp.com/send/?phone=6281542553779&text&type=phone_number&app_absent=0" target="_blank" className="purchase-btn">
                    Hubungi Kami
                  </Link>
                </div>
              </center>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
