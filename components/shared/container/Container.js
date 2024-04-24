/**
 * Title: Write a program using JavaScript on Container
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/in/devhasibulislam
 * Facebook: https://facebook.com/in/devhasibulislam
 * Instagram: https://instagram.com/in/devhasibulislam
 * Twitter: https://twitter.com/in/devhasibulislam
 * Pinterest: https://pinterest.com/in/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 15, August 2023
 */

import React from "react";

const Container = ({ children, className }) => {
  return (
    <section
      className={
        "max-w-7xl mx-auto px-primary" + (className ? ` ${className}` : "")
      }
    >
      {children}
    </section>
  );
};

export default Container;
