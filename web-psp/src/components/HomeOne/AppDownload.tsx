"use client";

import React from "react";

const AppDownload: React.FC = () => {
  return (
    <>
      <section id="app-download" className="app-download-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h2>GET NOW !!!</h2>
            <h4 className="text-white">
              Temukan era baru pendidikan dengan aplikasi yang memudahkan dan
              menginspirasi.
            </h4>
            <p>
              Bersiaplah untuk transisi yang mulus menuju masa depan pendidikan
              yang lebih canggih, lebih cerdas, dan lebih terkoneksi!
            </p>
          </div>
          <div className="col-lg-12 d-flex justify-content-center">
            <div
              className="app-download-content"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <a
                href="https://api.whatsapp.com/send/?phone=6281542553779&text&type=phone_number&app_absent=0"
                className="purchase-btn"
                target="_blank"
              >
                <span className="large-text">Hubungi Kami</span>
              </a>
            </div>
            &nbsp; &nbsp;
            <div
              className="app-download-content"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <a
                href="https://www.canva.com/design/DAF6Gx0mMfo/aUoIsjAgYjtdgSkcouWoJw/view?success=true&continue_in_browser=true"
                className="purchase-btn"
                target="_blank"
              >
                <span className="large-text">Materi PPT</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDownload;
