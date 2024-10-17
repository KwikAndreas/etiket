"use client";

const Footers = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 bottom-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Kwik.A.J, Paskalis L.N, Hansel A.L.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
