'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactFormInputs {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>();

  const onSubmit = (data: ContactFormInputs) => {
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 font-heebo" dir="rtl">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">צור קשר</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">השאירו פרטים ונחזור אליכם בהקדם</h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md text-center"
              >
                <p className="font-medium">תודה על פנייתך! נחזור אליך בהקדם.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">שם מלא *</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'}`}
                    {...register("name", { required: "שדה חובה" })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">טלפון *</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    type="tel"
                    id="phone"
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'}`}
                    {...register("phone", { 
                      required: "שדה חובה", 
                      pattern: {
                        value: /^[0-9]{9,10}$/,
                        message: "מספר טלפון לא תקין"
                      }
                    })}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">אימייל *</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'}`}
                    {...register("email", { 
                      required: "שדה חובה", 
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "כתובת אימייל לא תקינה"
                      }
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">הודעה *</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'}`}
                    {...register("message", { required: "שדה חובה" })}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  שליחה
                </motion.button>
              </form>
            )}
          </motion.div>
          
          {/* Contact Info & Image */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">פרטי התקשרות</h3>
              
              <div className="space-y-5">
                <div className="flex items-center">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full">
                    <FaPhone className="text-secondary h-5 w-5" />
                  </div>
                  <div className="mr-4">
                    <p className="text-sm text-gray-500">טלפון</p>
                    <p className="text-lg font-medium">03-1234567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full">
                    <FaEnvelope className="text-secondary h-5 w-5" />
                  </div>
                  <div className="mr-4">
                    <p className="text-sm text-gray-500">אימייל</p>
                    <p className="text-lg font-medium">info@delta-law.co.il</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-secondary h-5 w-5" />
                  </div>
                  <div className="mr-4">
                    <p className="text-sm text-gray-500">כתובת</p>
                    <p className="text-lg font-medium">רוטשילד 123, תל אביב</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="ייעוץ משפטי בתחום האופנה"
                className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;