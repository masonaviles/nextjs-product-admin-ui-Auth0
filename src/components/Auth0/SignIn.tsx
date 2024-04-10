"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const SignIn: React.FC = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center justify-center">
            
  
            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5 flex items-center justify-center">
                {/* <span className="mb-1.5 block font-medium">Start Creating Contracts</span> */}
                {/* <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                  Opal
                </h2> */}
                <Link href="/api/auth/login" className="inline-block text-primary w-50 text-center cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90">
                    Sign In to Opal
                </Link>
  
              </div>
            </div>
          </div>
        </div>
    );
  };
  
  export default SignIn;