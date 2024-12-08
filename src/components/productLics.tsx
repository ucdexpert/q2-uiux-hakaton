// import React from "react";
// import { LuShoppingCart } from "react-icons/lu";
// export default function ProductLics() {
//   return (
//     <div className="flex-col flex-wrap justify-center items-center w-[1214px] pl-[135px] ">
//       <div className="font-[sans-serif] bg-gray-100">
//         <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
//           <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
//             Featured Products
//           </h2>

//           <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
//             <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
//               <div className=" h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
//                 <img
//                   src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRysg13kKD_3Im-NpqXbauEWnYBaZZaJWHbLhOfWriwWYE0ax7U"
//                   alt="Product 1"
//                   className="h-full w-full object-contain"
//                 />
//               </div>

//               <div>
//                 <h3 className="text-lg font-extrabold text-gray-800">
//                   Library Stool Chaire
//                 </h3>
//                 <h4 className="text-lg text-gray-800 font-bold mt-4">$20</h4>

//                 <div className="bg-[#F0F2F3] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
//                   <LuShoppingCart className=" inline-block" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
//               <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
//                 <img
//                   src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBr9dl99tXYHrMECkwpmQCKR9GdRkZVS0_eD5jsHTK1f-xYKqf"
//                   alt="Product 2"
//                   className="h-full w-full object-contain"
//                 />
//               </div>

//               <div>
//                 <h3 className="text-lg font-extrabold text-gray-800">
//                   Library Stool Chair
//                 </h3>
//                 <h4 className="text-lg text-gray-800 font-bold mt-4">$20</h4>
//                 <div className="bg-[#F0F2F3] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
//                   <LuShoppingCart className=" inline-block" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
//               <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScctB0BUXmojUyrVXuyewgIEuSTshHWdRQTUff0gfyhSA5vqaw"
//                   alt="Product 3"
//                   className="h-full w-full object-contain"
//                 />
//               </div>

//               <div>
//                 <h3 className="text-lg font-extrabold text-gray-800">
//                   Library Stool Chair
//                 </h3>
//                 <h4 className="text-lg text-gray-800 font-bold mt-4">$20</h4>
//                 <div className="bg-[#F0F2F3] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
//                   <LuShoppingCart className=" inline-block" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
//               <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
//                 <img
//                   src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwT9oKXUEa00bTvSBpA2--R7nI0heAl5yTRTa2qX9L34Oea0WR"
//                   alt="Product 3"
//                   className="h-full w-full object-contain"
//                 />
//               </div>

//               <div>
//                 <h3 className="text-lg font-extrabold text-gray-800">
//                   Library Stool Chair
//                 </h3>
//                 <h4 className="text-lg text-gray-800 font-bold mt-4">$20</h4>
//                 <div className=" bg-[#F0F2F3] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
//                   <LuShoppingCart className="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div>
//           <div className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
//             <p className="text-[32px] font-extrabold text-[#272343] mb-12">
//               Top Categories
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
//                 <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
//                   <img
//                     src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRnValaAso3JIzMNSQSplKF7yl441XsJkzOpfrcV--yK-W270R"
//                     alt="Product 1"
//                     className="h-full w-full object-cover object-top"
//                   />
//                 </div>

//                 <div className="p-4 bg-[#000000B2]">
//                   <h3 className="text-[20px] font-normal text-white">
//                     {" "}
//                     Wing Chair
//                   </h3>
//                   <div className="mt-4 flex items-center flex-wrap gap-2">
//                     <h4 className="text-[14px]font-bold text-white">
//                       3,558 Products
//                     </h4>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
//                 <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
//                   <img
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSz8T1TwjxuNNyf7oq34zEB21tpXj0fgwQSvD3MvFV5tfGop_v"
//                     alt="Product 2"
//                     className="h-full w-full object-cover object-top"
//                   />
//                 </div>

//                 <div className="p-4 bg-[#000000B2]">
//                   <h3 className="text-[20px] font-normal text-white">
//                     Wooden Chair
//                   </h3>
//                   <div className="mt-4 flex items-center flex-wrap gap-2">
//                     <h4 className="text-[14px]font-bold text-white">
//                       157 Products
//                     </h4>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
//                 <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
//                   <img
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5T0g6Eh-16yxymh9vV9pgEaBoePq8sCex6EM_RnMcMvbbwKGN"
//                     alt="Product 3"
//                     className="h-full w-full object-cover object-top"
//                   />
//                 </div>

//                 <div className="p-4 bg-[#000000B2]">
//                   <h3 className="text-[20px] font-normal text-white">
//                     Desk Chair
//                   </h3>
//                   <div className=" mt-4 flex items-center flex-wrap gap-2">
//                     <h4 className="text-[14px] font-bold text-white">
//                       154 Products
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { LuShoppingCart } from "react-icons/lu";

export default function ProductLics() {
  return (
    <div className="flex flex-col items-center w-full px-4 lg:px-16">
      <div className="font-[sans-serif] bg-gray-100 w-full">
        <div className="p-4 mx-auto max-w-[1200px]">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-6 md:mb-12 text-center">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                image:
                  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRysg13kKD_3Im-NpqXbauEWnYBaZZaJWHbLhOfWriwWYE0ax7U",
                title: "Library Stool Chair",
                price: "$20",
              },
              {
                image:
                  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBr9dl99tXYHrMECkwpmQCKR9GdRkZVS0_eD5jsHTK1f-xYKqf",
                title: "Library Stool Chair",
                price: "$20",
              },
              {
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScctB0BUXmojUyrVXuyewgIEuSTshHWdRQTUff0gfyhSA5vqaw",
                title: "Library Stool Chair",
                price: "$20",
              },
              {
                image:
                  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwT9oKXUEa00bTvSBpA2--R7nI0heAl5yTRTa2qX9L34Oea0WR",
                title: "Library Stool Chair",
                price: "$20",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all shadow-md"
              >
                <div className="h-[180px] overflow-hidden mx-auto mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-gray-800">
                    {product.title}
                  </h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-2">
                    {product.price}
                  </h4>
                  <div className="bg-[#F0F2F3] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto mt-4">
                    <LuShoppingCart className="inline-block" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mt-12">
        <div className="font-sans p-4 mx-auto max-w-[1200px]">
          <p className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#272343] mb-6 md:mb-12 text-center">
            Top Categories
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image:
                  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRnValaAso3JIzMNSQSplKF7yl441XsJkzOpfrcV--yK-W270R",
                title: "Wing Chair",
                count: "3,558 Products",
              },
              {
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSz8T1TwjxuNNyf7oq34zEB21tpXj0fgwQSvD3MvFV5tfGop_v",
                title: "Wooden Chair",
                count: "157 Products",
              },
              {
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5T0g6Eh-16yxymh9vV9pgEaBoePq8sCex6EM_RnMcMvbbwKGN",
                title: "Desk Chair",
                count: "154 Products",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="w-full h-[200px] sm:h-[250px] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="p-4 bg-[#000000B2] text-white">
                  <h3 className="text-lg font-bold">{category.title}</h3>
                  <p className="mt-2 text-sm">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
