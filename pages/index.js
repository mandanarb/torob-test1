import Head from "next/head";
import Image from "next/image";
import MyApp from "./_app";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [modalStatus, setModalStatus] = useState(false);
  const handleModalStatus = () => {
    setModalStatus((prevState) => !prevState);
  };

  const items = [
    "موبایل و تبلت",
    "لپ‌تاپ، کامپیوتر، اداری",
    "هایپر مارکت",
    "لوازم خانگی",
    "مد و پوشاک",
    "زیبایی و بهداشت",
    "صوتی و تصویری",
    "خودرو و سایر وسایل نقلیه",
    "سایر دسته‌ها",
  ];
  const handleonBlur = () => {
    setModalStatus(false);
  };

  const footerItemsRight = [
    "راهنمای خرید امن ",
    "پیگیری سفارش",
    " تماس با ما",
    " درباره ترب ",
    " تخفیف‌ها ",
  ];

  const footerItemsLeft = [
    " لیست فروشگاه‌ها ",
    " ثبت‌نام‌ فروشگاه‌ها",
    "پنل فروشگاه‌ها",
    " فرصت‌های شغلی ",
  ];

  const [menuModalStatus, setMenuModalStatus] = useState(false);
  const handleSetMenuModalStatus = () => {
    setMenuModalStatus((prevState) => !prevState);
  };

  const handleonBlur1 = () => {
    setMenuModalStatus(false);
  };

  return (
    <main
      tabIndex={0}
      onBlur={handleonBlur}
      onBlur={handleonBlur1}
      className="flex flex-col w-full min-h-[100vh]"
    >
      <Head>
        <title>ترب</title>
      </Head>
      <header className="bg-[#f9fafb] h-[48px] flex justify-between pl-[40px] pr-[40px] items-center">
        <nav className="hidden md:flex ">
          {items.map((item, index) => (
            <button
              onClick={handleSetMenuModalStatus}
              key={index}
              className="flex ml-[24px] text-[14px] text-[#808080] hover:text-[#d73948] "
            >
              {item}
            </button>
          ))}
        </nav>
        <button
          onClick={handleModalStatus}
          className="flex text-[#808080] border rounded  
              border-[#cccccc] bg-white w-[107.84px] h-[28px] text-[12px] justify-center items-center"
        >
          ورود / ثبت نام
        </button>
      </header>

      <section className="bg-[#f2f3f5] flex flex-1 flex-col justify-center">
        <div className="h-[94px] flex justify-center mb-[24px]">
          <img
            src="https://torob.com/static/images/torob_logo.svg"
            className="w-[90px] h-[90px] pl-[10px] "
          />
          <div>
            <h1 className="text-[40px] font-semibold text-[#d73948]">ترب</h1>
            <span className="text-[#808080] text-[14px]">
              موتور جستجوی هوشمند خرید
            </span>
          </div>
        </div>

        <form className="flex justify-center h-[48px]">
          <div
            className="flex w-[480px] h-[48px] border rounded  
              border-[#cccccc] bg-white p-[13px]"
          >
            <img
              src="https://torob.com/static/images/search.svg"
              className="w-[20px]"
            />
            <input
              type="text"
              value="نام کالا را وارد کنید"
              className="text-[#6e6e6e] pr-[13px]"
            />
          </div>
        </form>
        {/* <div className="text-center mt-[30px] text-[#707070]">
          بیشترین جستجوی کاربران
        </div> */}
      </section>

      <footer className="flex items-center xl:justify-between h-[190px] bg-[#f2f3f5] sm:h-[76px] xl:h-[40px] sm:bg-[#f9fafb]">
        <div className="hidden sm:block xl:block">
          {footerItemsRight.map((footerItem, index) => (
            <span
              key={index}
              className="mr-[24px] text-[14px] text-[#808080] hover:text-black"
            >
              {footerItem}
            </span>
          ))}
        </div>
        <div className="hidden sm:block xl:block">
          {footerItemsLeft.map((footerItem, index) => (
            <span
              key={index}
              className="ml-[24px] text-[14px] text-[#808080] hover:text-black"
            >
              {footerItem}
            </span>
          ))}
        </div>
      </footer>

      {modalStatus && (
        <div className=" flex justify-center fixed w-full h-full right-0 bg-black bg-opacity-80">
          <div className="w-[400px] h-[300px] bg-white mt-[40px] rounded">
            <span>ورود یا ثبت نام</span>
            <form>
              <label for="phone_number">شماره موبایل</label>
              <input
                type="text"
                name="phone_number"
                className="bg-slate-600"
              ></input>
              <button type="submit" className="">
                دریافت کد تایید
              </button>
            </form>
            <p>
              ثبت نام در ترب به معنی موافقت با
              <a href=""> شرایط استفاده از ترب</a> است.
            </p>
            <p>قبلاً در ترب حساب کاربری داشتم.</p>
          </div>
        </div>
      )}

      {menuModalStatus && (
        <div className="fixed mt-[60px] w-[95%] min-h-[600px] self-center bg-white rounded ">
          <div className="py-[16px] px-[24px]  ">موبایل و تبلت</div>
          <hr />
          <div>گوشی موبایل</div>
        </div>
      )}
    </main>
  );
}
