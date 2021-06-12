import React from "react";

import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer>
        <div className="w-full flex flex-wrap font-sans justify-center content-center items-center">
          <div className="w-full flex-auto">
            <div className="flex-1 m-auto text-center mt-10">
              <Link href="https://collectedview.io/">
                <a target="_blank">
                  <Image
                    src="/collectedview-software-studio.png"
                    alt="Collectedview Software Studio"
                    height={50}
                    width={200}
                    loading="lazy"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
