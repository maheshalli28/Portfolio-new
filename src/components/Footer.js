import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-secondary text-center py-2 bg-transparent">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Srikar Reddy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
