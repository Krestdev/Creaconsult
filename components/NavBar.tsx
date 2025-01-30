import React from "react";

const NavBar = () => {
  return (
    <section className="pt-5 px-3 fixed top-0 will-change-[background] bg-[#89706100] inset-x-0 bottom-auto z-[2147483647]">
      <div className="relative max-w-[1780px] mx-auto z-[999]">
        <div className="relative flex pb-5 items-center justify-between border-b-[1px] border-solid border-b-[#dcc5b733] z-[2147483647]">
          {/* Nav Logo */}
          <div className="z-[111] gap-4 flex justify-start items-center relative">
            <div className=" will-change-[background] bg-[#dcc5b7] z-[111] cursor-pointer border-[1px] border-solid border-[#ededed] rounded-[50%] flex-col flex-nowrap justify-center items-center w-[56px] h-[56px] flex relative overflow-hidden"></div>
            <a
              href="/"
              className="max-w-full inline-block text-[#dcc5b7] no-underline bg-[#0000]"
            >
              <img
                src="/ui/Logo_01.svg"
                alt="Creacosult logo"
                width="125"
                height="129"
              />
            </a>
          </div>
          <div className="flex items-center justify-start gap-3">
            <a
              href="http://888 123 4567"
              className=" tracking-[0.5px] no-underline landskape-display-off"
            >
              call us (888) 123 4567
            </a>
            <a
              data-w-id="a1f934c7-57db-2cb0-78a1-436ccb3215e0"
              href="mailto:info@example.com"
              className="will-change-['background'] bg-[#dcc5b7] border-[1px] border-solid rounded-[50%] border-[#ededed] justify-center items-center w-[56px] h-[56px] flex relative overflow-hidden max-w-full"
            >
              <img
                width="20"
                height="20"
                alt="Email"
                src="/ui/Email.svg"
                loading="lazy"
                data-w-id="a1f934c7-57db-2cb0-78a1-436ccb3215e1"
                className="nav-email-icon"
              />
              <div className="nav-menu-overlay"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
