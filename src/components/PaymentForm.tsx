"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function DonationForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,d,s,n,a){
        if(!w[n]){
          var l='call,catch,on,once,set,then,track'.split(','),i,
          o=function(n){return'function'==typeof n?o.l.push([arguments])&&o
          :function(){return o.l.push([n,arguments])&&o}},
          t=d.getElementsByTagName(s)[0],j=d.createElement(s);
          j.async=!0;j.src='https://cdn.fundraiseup.com/widget/'+a;
          t.parentNode.insertBefore(j,t);o.s=Date.now();o.v=4;o.h=w.location.href;o.l=[];
          for(i=0;i<7;i++)o[l[i]]=o(l[i]);w[n]=o
        }
      })(window,document,'script','FundraiseUp','AZFTEEUK');
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#fdf6ec] p-6 space-y-6 md:space-y-0 md:space-x-22 mt-10">
      {/* Donate from India */}
      <motion.div
        className="bg-white p-6 md:p-8 rounded-[30px] md:rounded-[50px] shadow-lg w-full max-w-[584px] h-auto md:h-[700px] border border-gray-200 content-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[32px] md:text-[48px] font-semibold text-[#592Ac7] text-center ">
          Donate from India
        </h2>

        <p className="text-gray-600 mt-3 text-center text-[16px] md:text-[18px] leading-relaxed">
          Donations made from this channel are processed through the Auroville
          Unity Fund account.
        </p>

        <div className="p-4 md:p-6 rounded-lg mt-4">
          <h3 className="text-[16px] md:text-[18px] font-semibold text-[#592Ac7] text-start">
            On the donation page, kindly follow these steps:
          </h3>
          <ul className="text-gray-700 mt-2 list-disc pl-5 text-start text-[15px] md:text-[16px] leading-relaxed">
            <li>
              Select <strong>'For Indian Donors'</strong> tab in Donation Page.
            </li>
            <li>Fill up your details.</li>
            <li>
              Select <strong>'Yuvabe'</strong> under projects.
            </li>
          </ul>
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="https://donate.auroville.org/"
            className="bg-[#592AC7] text-white text-center font-semibold py-3 px-6 w-2/3 md:w-1/2 rounded-lg shadow-md transition-all hover:bg-[#4a22a5]"
          >
            Donate to Yuvabe
          </a>
        </div>

        <p className="text-gray-500 text-[15px] md:text-[18px] mt-4 text-center px-4">
          Kindly contact{" "}
          <a
            href="mailto:donations@auroville.org.in"
            className="text-[#592Ac7] underline font-medium"
          >
            donations@auroville.org.in
          </a>{" "}
          for tax-exempt receipt or for information on how to comply with
          applicable regulations.
        </p>
      </motion.div>

      {/* Donate from Anywhere */}
      <motion.div
        className="bg-white p-8 rounded-[30px] md:rounded-[50px] shadow-lg border border-gray-200 w-full max-w-[584px] h-auto md:h-[700px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[32px] md:text-[48px] font-semibold text-[#592Ac7] text-center ">
          Donate from Anywhere
        </h2>

        {/* FundraiseUp Widget */}
        <a href="#XJLHERLT" className=""></a>
      </motion.div>
    </div>
  );
}
