import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import "./assets/font.css";
function App() {
  const dekorasi = [
    {
      type: "Vip1",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
    {
      type: "Vip2",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
    {
      type: "Vip3",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
    {
      type: "Vip4",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
  ];
  const tenda = [
    {
      type: "Vip1",
      img: "./card1.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
    {
      type: "Vip2",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
    {
      type: "Vip3",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
    {
      type: "Vip4",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
  ];
  const hena = [
    {
      type: "Vip1",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
    {
      type: "Vip2",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
    {
      type: "Vip3",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
    {
      type: "Vip4",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
  ];
  const photography = [
    {
      type: "Vip12",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
    {
      type: "Vip2",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
    {
      type: "Vip3",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
    {
      type: "Vip4",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adolorum ipsam cum.",
    },
  ];

  const [togleState, setTotgleState] = useState(1);
  const [gal, setGal] = useState(dekorasi);
  const [menu, setMenu] = useState(1);

  const [galAria, setGalAria] = useState(1);
  const menuSet = (index) => {
    setMenu(index);
  };
  const TgalAria = (index) => {
    setGalAria(index);
  };
  const toggleGalery = (index) => {
    setGal(index);
  };
  const toggleTab = (index) => {
    setTotgleState(index);
  };

  return (
    <div className="bg-gray-500">
      <div className=" scroll-smooth bg-gray-400">
        <div className="navigasi  lg:flex fixed top-0 left-0 right-0 z-20 items-center py-4 opacity-80 mb-12 bg-white  drop-shadow-xl">
          <div className="logo ml-6 mr-22 lg:mr-10 mt-3 flex justify-between items-center lg:mt-0">
            <a
              href=""
              className="mx-5  text-lg  flex font-bold justify-center items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
            >
              <strong className="text-3xl text-blue-900 ">WO Agung</strong>
              {"  "}
              <span className="mx-1 pt-2">MB Sarolangun</span>
            </a>
            <a
              href="#"
              className={
                menu === 1
                  ? "hover:text-blue-600 text-2xl transition ease-in-out delay-150 hover:scale-150 duration-300 mr-4 lg:hidden"
                  : "hidden"
              }
              onClick={() => menuSet(2)}
            >
              <IoIosMenu />
            </a>
            <a
              href="#"
              className={
                menu === 2
                  ? "hover:bg-slate-400 lg:hidden text-2xl mr-4"
                  : "hidden"
              }
              onClick={() => menuSet(1)}
            >
              <IoMdClose />
            </a>
          </div>

          <div
            className={
              menu === 1
                ? "hidden lg:flex"
                : "absolute pb-8 items-center justify-center pt-6 bg-white shadow-lg rounded-lg max-w-[250px] w-[150px] right-4 top-full lg:flex lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            }
          >
            <a
              href="#"
              className={
                togleState === 1
                  ? "ml-[20px] mr-5 text-blue-600 underline underline-offset-8"
                  : "ml-[20px] mr-5 text-slate-600 transition ease-in-out delay-150  hover:-translate-y-1  hover:text-blue-600 lg:hover:scale-150 duration-300"
              }
              onClick={() => toggleTab(1)}
            >
              Home
            </a>
            <a
              className={
                togleState === 2
                  ? "mx-5 py-2 lg:py-0 text-blue-600 block underline underline-offset-8"
                  : "mx-5 py-2 lg:py-0 text-slate-600 block transition ease-in-out delay-150  hover:-translate-y-1  hover:text-blue-600 lg:hover:scale-150 duration-300"
              }
              href="#"
              onClick={() => toggleTab(2)}
            >
              Order
            </a>
            <a
              href="#myGalery"
              className={
                togleState === 3
                  ? "mx-5 text-blue-600 block underline underline-offset-8"
                  : "mx-5 text-slate-600 block transition ease-in-out delay-150  hover:-translate-y-1  hover:text-blue-600 lg:hover:scale-150 duration-300"
              }
              onClick={() => toggleTab(3)}
            >
              Galery
            </a>
            <a
              href="#"
              className={
                togleState === 4
                  ? "mx-5 py-2 lg:py-0 text-blue-600 block underline underline-offset-8"
                  : "mx-5 py-2 lg:py-0 text-slate-600 block transition ease-in-out delay-150   hover:text-blue-600 hover:-translate-y-1 lg:hover:scale-150 duration-300"
              }
              onClick={() => toggleTab(4)}
            >
              Testimoni
            </a>
            <a
              href="#"
              className={
                togleState === 5
                  ? "mx-5 text-blue-600 underline underline-offset-8"
                  : "mx-5 text-slate-600 transition ease-in-out delay-150  hover:-translate-y-1 lg:hover:scale-150 duration-300 hover:text-blue-600  "
              }
              onClick={() => toggleTab(5)}
            >
              Contact
            </a>
          </div>
        </div>

        <div className=" relative mt-[100px] bg-gray-500">
          <div className="relative w-full ">
            <img
              src="./banner.jpg"
              alt=""
              className="absolute background-image   w-full h-60 lg:h-96 object-cover shadow-lg"
            />
            <div className=" absolute  lg:mt-[0px] w-full  lg:h-96 z-10 text-center ">
              <h1 className="lg:text-5xl text-3xl mt-[30px] lg:mt-[100px] justify-center font-bold text-white ">
                {" "}
                Cari Jasa WO?
              </h1>
              <h3 className="lg:text-6xl text-lg text-white font-bold my-3">
                WO Agung MB solusinya
              </h3>
              <p className="lg:text-xl text-slate-200">
                Harga Terjangkau 100% amanah
              </p>
              <button className=" items-center mt-6 font-semibold bg-blue-500 shadow-lg  shadow-blue-500/50 px-7 py-3 rounded-full   text-sm text-white  lg:mt-12 hover:bg-white hover:text-blue-700 ">
                Chose Your Paket
              </button>
            </div>
          </div>
          <div className="relative bg-gradient-to-r from-blue-600 from-50% opacity-95 w-full h-60 lg:h-96 "></div>
        </div>
        <div
          className="absolute w-full mt-[50px] lg:mt-[50px] bg-white drop-shadow"
          id="toggle"
        >
          <h1 className="text-lg font-semibold ml-12 pt-5 text-gray-400">
            {" "}
            My Galery
          </h1>
          <div className="flex text-lg lg:text-xl mt-5 font-semibold text-gray-400">
            <div
              className={
                galAria === 1
                  ? "ml-6 mr-5 text-blue-600 underline underline-offset-8 decoration-4"
                  : "ml-6 mr-5 hover:text-blue-600"
              }
              onClick={() => TgalAria(1)}
            >
              <a
                className={
                  gal === dekorasi
                    ? "ml-6 mr-5 text-blue-600 "
                    : "ml-6 mr-5 hover:text-blue-600 cursor-pointer "
                }
                onClick={() => toggleGalery(dekorasi)}
              >
                Pelaminan
              </a>
            </div>{" "}
            <div
              className={
                galAria === 2
                  ? " text-blue-600 underline underline-offset-8 decoration-4"
                  : " hover:text-blue-600"
              }
              onClick={() => TgalAria(2)}
            >
              <a
                className={
                  gal === tenda
                    ? " text-blue-600"
                    : " hover:text-blue-600 cursor-pointer "
                }
                onClick={() => toggleGalery(tenda)}
              >
                Tenda
              </a>
            </div>
            <div
              className={
                galAria === 3
                  ? " text-blue-600 underline underline-offset-8 decoration-4"
                  : " hover:text-blue-600"
              }
              onClick={() => TgalAria(3)}
            >
              <a
                className={
                  gal === hena
                    ? "ml-6 mr-5 text-blue-600"
                    : "ml-6 mr-5 hover:text-blue-600 cursor-pointer  "
                }
                onClick={() => toggleGalery(hena)}
              >
                Hena{" "}
              </a>
            </div>
            <div
              className={
                galAria === 4
                  ? " text-blue-600 underline underline-offset-8 decoration-4"
                  : " hover:text-blue-600  "
              }
              onClick={() => TgalAria(4)}
            >
              <a
                className={
                  gal === photography
                    ? "ml-6 mr-5 text-blue-600"
                    : "ml-6 mr-5 hover:text-blue-600 cursor-pointer "
                }
                onClick={() => toggleGalery(photography)}
              >
                Photography
              </a>
            </div>
          </div>

          <hr className=" ml-8 mt-2" id="hr" />
          <div className="galerry w-full " id="myGalery">
            <div className="w-full px-4 flex flex-wrap justify-center lg:[80%] lg:mx-auto">
              {gal.map((item) => {
                return (
                  <div
                    key={item.type}
                    className="mt-5 mb-5 p-4 lg:w-4/12 transition ease-in-out delay-150  hover:-translate-y-5 duration-300"
                  >
                    <div className="rounded-md shadow-md overflow-hidden">
                      <img
                        src={item.img}
                        alt=""
                        className="h-[200] lg:h-[300px] bg-cover w-full"
                      />
                      <h3 className="font-semibold text-xl  ml-5 text-dark mt-5 mb-3">
                        {item.type}
                      </h3>
                      <p className="ml-5 font-medium text-base text-secondary pb-4">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-[1900px] lg:mt-[1200px] bg-white">
          <h1 className="text-center text-3xl font-semibold">Tetimoni</h1>
        </div>
        <div className=" relative ">
          <h1 className="text-center font-semibold text-3xl text-white">
            Please enter your question
          </h1>
          <form action="">
            <div className="w-full lg:w-1/3 lg:mx-auto pb-5 mt-6">
              <div className="content-center w-full self-center px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-primary"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                ></input>
              </div>
              <div className="content-center w-full self-center px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-primary"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                ></input>
              </div>
              <div className="content-center w-full self-center px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-primary"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                ></input>
              </div>
              <div className="content-center w-full self-center px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-primary"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                ></input>
              </div>
              <div className="text-center">
                <button className="text-white font-bold text-lg items-center bg-blue-600 py-3 w-1/2 rounded-full">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="footer mt-[10px] bg-white  items-center justify-content-center relative">
          <h1 className="text-center text-lg font-semibold">About us</h1>
          <p>RT. 22 Dusun IV Desa PaSAR Singkut</p>
          <p>RT. 22 Dusun IV Desa PaSAR Singkut</p>
          <p>RT. 22 Dusun IV Desa PaSAR Singkut</p>
        </div>
      </div>
    </div>
  );
}
export default App;
