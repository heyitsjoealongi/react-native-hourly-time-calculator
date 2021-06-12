import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="w-full flex flex-wrap font-sans justify-center content-center items-center">
          <div className="w-full flex-auto">
            <div className="flex-1 m-auto text-center mt-10">
              <a target="_blank" href="https://collectedview.io/">
                <img
                  src="/collectedview-software-studio.png"
                  alt="Collectedview Software Studio"
                  height={50}
                  width={200}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
