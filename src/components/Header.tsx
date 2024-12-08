// import React from "react";
// import { TbVectorBezier } from "react-icons/tb";
// import { PiShoppingCartSimple } from "react-icons/pi";
// import { TbCircleNumber2 } from "react-icons/tb";
// import { FaCheck } from "react-icons/fa";
// import { CiCircleAlert } from "react-icons/ci";
// import { IoChevronDown } from "react-icons/io5";
// import Link from "next/link";
// export default function Header() {
//   return (
//     <div>
//       <header className="border-b font-[sans-serif] tracking-wide relative z-50">
//         <section className="py-3 bg-[#272343] text-white pl-[255px] px-10">
//           <FaCheck className="w-[16px] h-[16px] relative top-4 right-7" />
//           <div className="justify-between flex mr-28">
//             <p className="text-sm "> Free shipping on all orders over $50</p>
//             <div className="flex gap-[24px] opacity-70">
//               <div className="inline-flex gap-2">
//                 <p>Eng</p>
//                 <IoChevronDown className="relative top-1 " />
//               </div>
//               <div>
//                 <p>Faqs</p>
//               </div>
//               <div className="inline-flex gap-2">
//                 <CiCircleAlert className="w-[16px] h-[16px]  relative top-1" />
//                 <p> Need Help</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="bg-[#F0F2F3] relative bottom-5 h-[84px]">
//           <div className="ml-40 ">
//             <TbVectorBezier className=" relative top-4 flex-col mt-5 w-[166px] h-[40px] gap-8" />
//             <p className="relative ml-28 bottom-4 font-semibold text-xl  text-[#272343]">
//               Copforty
//             </p>
//           </div>

//           <div className="bg-white w-[120px] h-[44px] rounded-[8px] inline-flex gap-[12px] relative float-right right-40 text-center bottom-12 justify-center items-center">
//             <PiShoppingCartSimple />
//           <a href="cart"><p>Cart</p></a>
//             <TbCircleNumber2 className="text-[#007580]" />
//           </div>
//         </section>


//         {/* Header */}
        
//         <div className="flex flex-wrap items-center gap-4 px-10 py-4 relative bg-white min-h-[70px]">
//           <div
//             id="collapseMenu"
//             className="w-full max-lg:hidden lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
//           >
//             <div className="pl-44 lg:flex max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
//               <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
//                 <li className="max-lg:border-b max-lg:py-3">
//                   <a
//                     href="/"
//                     className="hover:text-[#007bff] font-semibold text-[#636270] block text-[15px]"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li className="max-lg:border-b max-lg:py-3">
//                   <a
//                     href="/shop"
//                     className="hover:text-[#007bff] font-semibold text-[#333] block text-[15px]"
//                   >
//                     Shop
//                   </a>
//                 </li>
//                 <li className="max-lg:border-b max-lg:py-3">
//                   < a
//                     href="/product"
//                     className="hover:text-[#007bff] font-semibold text-[#333] block text-[15px]">
//                     Product
//                   </a>
//                 </li>
//                 <li className="text-[15px] max-lg:border-b max-lg:py-3">
//                   <a
//                     href="/page"
//                     className="hover:text-[#007bff] font-semibold text-[#333] block text-[15px]"
//                   >
//                     Pages
//                   </a>
//                 </li>
//                 <li className="text-[15px] max-lg:border-b max-lg:py-3">
//                   <a
//                     href="about"
//                     className=" hover:text-[#007bff] font-semibold text-[#333] block text-[15px]"
//                   >
//                     About
//                   </a>
//                 </li>
//                 <div className="flex pl-[390px]"></div>
//                 <span className=" text-[#636270] text-[14px] font-normal">
//                   Contact:
//                   <a className="text-[#272343] font-medium">(808) 555-0111</a>
//                 </span>
//               </ul>
//             </div>
//           </div>
//           <div className="flex ml-auto lg:hidden">
//             <button id="toggleOpen">
//               <svg
//                 className="w-7 h-7"
//                 fill="#000"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }


import React from "react";
import { TbVectorBezier } from "react-icons/tb";
import { PiShoppingCartSimple } from "react-icons/pi";
import { TbCircleNumber2 } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="border-b font-sans tracking-wide relative z-50">
        {/* Top Bar */}
        <section className="py-3 bg-[#272343] text-white px-5 lg:px-10">
          <div className="flex justify-between items-center">
            <p className="text-sm">Free shipping on all orders over $50</p>
            <div className="flex items-center gap-6 text-sm opacity-70">
              <div className="flex items-center gap-2">
                <p>Eng</p>
                <IoChevronDown />
              </div>
              <Link href="/faqs">
                <p>Faqs</p>
              </Link>
              <div className="flex items-center gap-2">
                <CiCircleAlert className="w-4 h-4" />
                <p>Need Help</p>
              </div>
            </div>
          </div>
        </section>

        {/* Logo and Cart Section */}
        <section className="bg-[#F0F2F3] py-4">
          <div className="container mx-auto flex justify-between items-center px-5 lg:px-10">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <TbVectorBezier className="w-10 h-10 text-[#272343]" />
              <p className="text-xl font-semibold text-[#272343]">Copforty</p>
            </div>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center gap-2 bg-white w-28 h-12 rounded-lg shadow-sm justify-center"
            >
              <PiShoppingCartSimple />
              <p>Cart</p>
              <TbCircleNumber2 className="text-[#007580]" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <nav className="bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center px-5 lg:px-10">
            <ul className="hidden lg:flex gap-8 text-sm font-semibold text-[#333]">
              <li>
                <Link href="/" className="hover:text-[#007bff]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#007bff]">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-[#007bff]">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/page" className="hover:text-[#007bff]">
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#007bff]">
                  About
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden" id="menuToggle">
              <svg
                className="w-6 h-6"
                fill="#000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div id="mobileMenu" className="hidden fixed inset-0 bg-white z-50">
          <div className="flex justify-end p-5">
            <button id="menuClose" className="text-2xl">
              &times;
            </button>
          </div>
          <ul className="flex flex-col items-center gap-4 text-lg font-semibold text-[#333]">
            <li>
              <Link href="/" className="hover:text-[#007bff]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-[#007bff]">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-[#007bff]">
                Product
              </Link>
            </li>
            <li>
              <Link href="/pages" className="hover:text-[#007bff]">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#007bff]">
                About
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
