"use client";

import React, { useState } from "react";
import Link from "next/link";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div key={link.id}>
          <div className="relative px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex hover:text-[color:var(--text)] justify-between items-center md:pr-0  group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
            </h1>
            {link.submenu && (
              <div className="">
                <div className="absolute  top-20 right-0  border-t-2 border-[color:var(--bg)] hidden group-hover:md:block hover:md:block">
                  <div className="bg-white p-5 w-[600px] grid grid-cols-3  gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.id} className="">
                        <h1 className="text-sm  text-right font-semibold ">
                          {mysublinks.Head}
                        </h1>
                        <div className="w-40 border-gray-200 m-3 border-2"></div>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            key={slink.id}
                            className="text-sm text-gray-600  list-none text-right my-2.5 "
                          >
                            <Link
                              href={slink.link}
                              className="hover:text-black"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
