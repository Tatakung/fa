import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <header class="header-section text-white text-center animate__animated animate__fadeInDown">
        <div class="container">
          <img
            src="enjoyjune.jpg"
            alt="Your Profile Picture"
            class="rounded-circle profile-picture"
          />
          <h1 class="animate__animated animate__fadeIn animate__delay-1s">
            ศุภเชษฐ ชัยเลิศ
          </h1>
          <p class="lead animate__animated animate__fadeInUp animate__delay-1-5s">
            สร้างสรรค์โซลูชันซอฟต์แวร์ที่ตอบโจทย์ให้คุณ
          </p>
        </div>
      </header>

      <main>
        <section id="about" class="py-5">
          <div class="container" data-aos="fade-up">
            <h2 class="text-center">เกี่ยวกับฉัน</h2>
            <p class="text-center mx-auto">
              สวัสดีครับ! ผมชื่อ ศุภเชษฐ ชัยเลิศ เป็นนักศึกษาจบใหม่ สนใจทางด้าน
              Developer นักพัฒนาซอฟต์แวร์ที่มีประสบการณ์ทำโปรเจคในการสร้าง Web
              Application ทั้งฝั่ง Frontend และ Backend ด้วย Laravel/PHP ,
              React, Node.js, Python/Django ผมหลงใหลในการแก้ปัญหาที่ซับซ้อน
              และมุ่งมั่นที่จะสร้างโค้ดที่มีคุณภาพ และ
              พร้อมเรียนรู้เทคโนโลยีใหม่ๆ เพื่อสร้างสรรค์สิ่งที่ดีที่สุด
            </p>

            <h3 class="mt-5 text-center">ทักษะ</h3>
            <div class="row g-4 justify-content-center">
              <div
                class="col-md-6 col-lg-3 mb-4"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div class="card h-100 items text-center">
                  <div class="card-body d-flex flex-column align-items-center">
                    <i class="fas fa-laptop-code fa-3x text-primary mb-3"></i>
                    <h5 class="card-title">Frontend</h5>
                    <ul class="list-unstyled text-start w-100 ps-4">
                      <li>HTML5 CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-3 mb-4"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div class="card h-100 items text-center">
                  <div class="card-body d-flex flex-column align-items-center">
                    <i class="fas fa-server fa-3x text-primary mb-3"></i>
                    <h5 class="card-title">Backend</h5>
                    <ul class="list-unstyled text-start w-100 ps-4">
                      <li>Node.js (Express)</li>
                      <li>PHP (Laravel)</li>
                      <li>Python (Django)</li>
                      <li>RESTful APIs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-3 mb-4"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <div class="card h-100 items text-center">
                  <div class="card-body d-flex flex-column align-items-center">
                    <i class="fas fa-database fa-3x text-primary mb-3"></i>
                    <h5 class="card-title">Database</h5>
                    <ul class="list-unstyled text-start w-100 ps-4">
                      <li>MySQL</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-3 mb-4"
                data-aos="fade-right"
                data-aos-delay="800"
              >
                <div class="card h-100 items text-center">
                  <div class="card-body d-flex flex-column align-items-center">
                    <i class="fas fa-tools fa-3x text-primary mb-3"></i>
                    <h5 class="card-title">Tools & Others</h5>
                    <ul class="list-unstyled text-start w-100 ps-4">
                      <li>GitHub</li>
                      <li>GIT</li>
                      <li>POSTMAN</li>
                      <li>FIGMA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" class="py-5 bg-light">
          <div class="container">
            <h2 class="text-center">ผลงานของฉัน</h2>
            <div class="row g-4">
              <div class="col-md-12 col-lg-6" data-aos="fade-up">
                <div class="card h-100 project-card">
                  <div
                    id="projectCarousel1"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#projectCarousel1"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel1"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel1"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel1"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel1"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel1"
                        data-bs-slide-to="5"
                        aria-label="Slide 6"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel1"
                        data-bs-slide-to="6"
                        aria-label="Slide 7"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="one1.png"
                          class="d-block w-100"
                          alt="Project Image 1"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="one3.png"
                          class="d-block w-100"
                          alt="Project Image 2"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="one44.png"
                          class="d-block w-100"
                          alt="Project Image 3"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="one55.png"
                          class="d-block w-100"
                          alt="Project Image 3"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="one66.png"
                          class="d-block w-100"
                          alt="Project Image 3"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="one777.png"
                          class="d-block w-100"
                          alt="Project Image 3"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="one878.png"
                          class="d-block w-100"
                          alt="Project Image 3"
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#projectCarousel1"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#projectCarousel1"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">ระบบจัดการภายใน-ร้านชุด</h5>
                    <span class="text-danger">**โปรเจคจบปี4</span>
                    <p class="card-text">
                      <ul>
                        <li>
                          พัฒนาระบบหลังร้าน เพื่อจัดการออเดอร์เช่าชุด-จองชุด ,
                          เช่าเครื่องประดับ , ตัดชุด/เช่าตัดชุด
                          รวมถึงติดตามและอัปเดตสถานะออเดอร์และสร้างใบเสร็จรับเงินในรูปแบบ
                          PDF
                        </li>
                        <li>
                          {" "}
                          ระบบบันทึกรายจ่าย-บัญชี พร้อม Dashboard
                          แสดงรายรับรายจ่ายรายเดือน/ปี และแสดงกราฟสถิติต่างๆ
                          เพื่อช่วยในการตัดสินใจของ ร้านค้า
                        </li>
                        <li>
                          ลดเวลาการจัดการออเดอร์และเพิ่มประสิทธิภาพการทำงานของพนักงาน
                        </li>
                      </ul>
                    </p>
                    <p class="text-muted mt-auto">
                      <strong>เทคโนโลยี:</strong> Laravel , PHP , Bootstrap ,
                      MySQL , Chart.js
                    </p>
                    <div class="mt-3">
                      <a
                        href="https://bitit0367.cpkkuhost.com"
                        class="btn btn-sm btn-primary me-2"
                        target="_blank"
                      >
                        <i class="fas fa-external-link-alt"></i> ดูเว็บไซต์
                      </a>
                      <a
                        href="https://github.com/Tatakung/project_rm/tree/main"
                        class="btn btn-sm btn-dark"
                        target="_blank"
                      >
                        <i class="fab fa-github"></i> ดูโค้ด
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-12 col-lg-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="card h-100 project-card">
                  <div
                    id="projectCarousel2"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#projectCarousel2"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel2"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel2"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="15.png"
                          class="d-block w-100"
                          alt="Project Image 1"
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#projectCarousel2"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#projectCarousel2"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">
                      ระบบยื่นขอรับเงิน สนับสนุนและส่งเสริมสถาบัน
                      เกษตรกรชาวสวนยาง - การยางแห่งประเทศไทย จังหวัดขอนแก่น
                      (Freelance Project)
                    </h5>
                    <span class="text-danger">**ฟรีแลนซ์</span>
                    <p class="card-text">
                      <ul>
                        <li>
                          พัฒนาระบบสำหรับยื่นแบบฟอร์ม/แนบไฟล์เอกสาร
                          และติดตามสถานะคำขอโครงการผ่านระบบ
                        </li>
                        <li>
                          เจ้าหน้าที่ตรวจสอบเอกสารและอนุมัติโครงการได้ผ่านระบบ
                        </li>
                        <li>
                          สามารถส่งออกเอกสารโครงการ ในรูปแบบไฟล์ **PDF** ได้
                        </li>
                        <li>
                          ลดขั้นตอนการจัดการเอกสารสำหรับเจ้าหน้าที่และเกษตรกร
                        </li>
                      </ul>
                    </p>
                    <p class="text-muted mt-auto">
                      <strong>เทคโนโลยี:</strong> Laravel , PHP , Bootstrap ,
                      MySQL
                    </p>
                    <div class="mt-3">
                      <a
                        href="https://khonkaenraot.com/"
                        class="btn btn-sm btn-primary me-2"
                        target="_blank"
                      >
                        <i class="fas fa-external-link-alt"></i> ดูเว็บไซต์
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-6" data-aos="fade-up">
                <div class="card h-100 project-card">
                  <div
                    id="projectCarousel3"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#projectCarousel3"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel3"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel3"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel3"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel3"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel3"
                        data-bs-slide-to="5"
                        aria-label="Slide 6"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="16.png"
                          class="d-block w-100"
                          alt="Project Image 1"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="17.png"
                          class="d-block w-100"
                          alt="Project Image 2"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="18.png"
                          class="d-block w-100"
                          alt="Project Image 3"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="20.png"
                          class="d-block w-100"
                          alt="Project Image 3"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="21.png"
                          class="d-block w-100"
                          alt="Project Image 3"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="22.png"
                          class="d-block w-100"
                          alt="Project Image 3"
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#projectCarousel3"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#projectCarousel3"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">ระบบร้านค้าออนไลน์ (Ecommerce)</h5>
                    <span class="text-danger">**โชว์เคส</span>
                    <p class="card-text">
                      <ul>
                        <li>
                          พัฒนา **RESTful API** เพื่อจัดการหมวดหมู่,
                          เพิ่มสินค้า, ตะกร้าสินค้า, และคำสั่งซื้อ
                        </li>
                        <li>ออกแบบฐานข้อมูล และใช้ Prisma ORM จัดการข้อมูล</li>
                        <li>
                          ใช้ JWT Token และ Middleware
                          เพื่อยืนยันตัวตนและปกป้องกันสิทธิ์การเข้าถึง
                        </li>
                        <li>
                          รองรับการสร้างใบเสร็จรับเงิน PDF อัตโนมัติสำหรับลูกค้า
                        </li>
                      </ul>
                    </p>
                    <p class="text-muted mt-auto">
                      <strong>เทคโนโลยี:</strong> React.js , Node.js ,
                      Express.js , MySQL , Prisma ORM
                    </p>
                    <div class="mt-3">
                      <a
                        href="https://ecom-shop-user.vercel.app/"
                        class="btn btn-sm btn-primary me-2"
                        target="_blank"
                      >
                        <i class="fas fa-external-link-alt"></i> ดูเว็บไซต์
                      </a>
                      <a
                        href="https://github.com/Tatakung/ecom-shop-api/tree/main"
                        class="btn btn-sm btn-dark"
                        target="_blank"
                      >
                        <i class="fab fa-github"></i> ดูโค้ด
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-12 col-lg-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="card h-100 project-card">
                  <div
                    id="projectCarousel4"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#projectCarousel4"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel4"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#projectCarousel4"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="joyta1.png"
                          class="d-block w-100"
                          alt="Project Image 1"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="joyta2.png"
                          class="d-block w-100"
                          alt="Project Image 2"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="joyta3.png"
                          class="d-block w-100"
                          alt="Project Image 3"
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#projectCarousel4"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#projectCarousel4"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">4. ระบบอ่านบล็อค/เขียนบล็อค</h5>
                    <span class="text-danger">**โชว์เคส</span>
                    <p class="card-text">
                      <ul>
                        <li>แยกส่วนผู้อ่านกับผู้เขียน</li>
                        <li>อ่านบล็อค / เขียนบล็อค / คอมเม้นบล็อค</li>
                        <li>แยกหมวดหมู่</li>
                      </ul>
                    </p>
                    <p class="text-muted mt-auto">
                      <strong>เทคโนโลยี:</strong> Python , Django , HTML/CSS/JS
                      , Bootstrap
                    </p>
                    <div class="mt-3">
                      <a
                        href="https://tatakung.pythonanywhere.com/"
                        class="btn btn-sm btn-primary me-2"
                        target="_blank"
                      >
                        <i class="fas fa-external-link-alt"></i> ดูเว็บไซต์
                      </a>
                      <a
                        href="https://github.com/Tatakung/blog-storly-log"
                        class="btn btn-sm btn-dark"
                        target="_blank"
                      >
                        <i class="fab fa-github"></i> ดูโค้ด
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="py-5">
          <div class="container text-center" data-aos="fade-up">
            <h2 class="mb-4">ติดต่อฉันได้ที่</h2>
           
            <p class="mb-5 mx-auto">
              คุณสามารถติดต่อผมได้ผ่านช่องทางด้านล่างนี้ ผมยินดีรับฟังทุกโอกาส
              และพร้อมที่จะร่วมงานกับโปรเจกต์!
            </p>
            <div class="d-flex justify-content-center flex-wrap gap-3 animate__animated animate__fadeInUp animate__delay-1s">
              <a
                href="mailto:your.email@example.com"
                class="btn btn-outline-primary btn-lg"
              >
                <i class="fas fa-envelope me-2"></i>supached.tata@gmail.com
              </a>

              <a
                href="https://github.com/Tatakung"
                class="btn btn-outline-dark btn-lg"
                target="_blank"
              >
                <i class="fab fa-github me-2"></i>GitHub
              </a>
              <a href="tel:+66993984272" class="btn btn-outline-success btn-lg">
                <i class="fas fa-phone me-2"></i>099-398-4272
              </a>
              <a
                href="line://ti/p/@yourlineid"
                class="btn btn-outline-secondary btn-lg"
                target="_blank"
              >
                <i class="fab fa-line me-2"></i>suphachet1111
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer class="bg-dark text-white text-center py-4">
        <div class="container">
          <p class="mb-3">&copy; 2025 sakunthai. สงวนลิขสิทธิ์.</p>
          <div>
            <a
              href="mailto:your.email@example.com"
              class="text-white mx-3 fs-4"
            >
              <i class="fas fa-envelope"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              class="text-white mx-3 fs-4"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/yourusername"
              class="text-white mx-3 fs-4"
            >
              <i class="fab fa-github"></i>
            </a>
            
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
