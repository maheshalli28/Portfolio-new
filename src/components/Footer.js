import React from 'react';

const Footer = () => {
  return (
    <footer className=" text text-center bg-transparent">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Alli Mahesh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
