import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <div className="d-flex justify-content-center py-2 px-4 border w-75 border-warning mx-auto rounded">
        <div>
          {" "}
          <Link href="/">
            <button className="mx-3 btn btn-info py-2 px-4  rounded-pill">
              Home
            </button>
          </Link>
        </div>

        <div>
          {" "}
          <Link href="/blog">
            <button className="mx-3 btn btn-primary py-2 px-4  rounded-pill">
              Blog
            </button>
          </Link>
        </div>

        <div>
          {" "}
          <Link href="/dashboard">
            <button className="mx-3 btn btn-info py-2 px-4 rounded-pill">
              Dashboard
            </button>
          </Link>
        </div>

        {session && status === "authenticated" && (
          <div>
            {" "}
            <Link href="/logout">
              <button
                className="mx-3 btn btn-danger py-2 px-4 rounded-pill"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Logout
              </button>
            </Link>
          </div>
        )}

        {!session && status === "unauthenticated" && (
          <div>
            <Link href="/login">
              <button
                className="mx-3 btn btn-warning py-2 px-4 rounded-pill"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
