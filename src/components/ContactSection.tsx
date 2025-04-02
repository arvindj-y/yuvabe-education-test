import { motion } from "framer-motion";
import { Mail, Globe, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="flex items-center justify-center  py-16  min-h-[600px] bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#592AC7] text-white rounded-[30px] p-10  max-w-2xl   text-center shadow-lg  w-400px md:w-800px  "
      >
        <h2 className="text-xl md:text-3xl font-bold mb-6">Contact for Registration</h2>
        <div className="space-y-4 text-lg">
          <div className="flex items-center justify-center gap-2">
            <Mail size={20} />
            <a href="mailto:info@yuvabe.com" className="hover:underline">
              info@yuvabe.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Globe size={20} />
            <a href="https://www.yuvabe.com" className="hover:underline">
              www.yuvabe.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin size={20} />
            <p>Yuvabe, Sarocon Campus, Auroville, Tamil Nadu - 605101</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
