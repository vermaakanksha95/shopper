"use client"
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function AdminNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <div className=" flex flex-1">
      <Navbar className="sticky top-0 z-10 h-max max-w-full bg-black  text-white rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between ">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Shopper | Admin Panel
          </Typography>

          <Button
            variant="gradient"
            size="sm"
            color="red"
            className="hidden lg:inline-block font-normal text-md"
          >
            <span>Logout</span>
          </Button>
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <Button fullWidth variant="gradient" size="sm" color="red">
            <span>Logout</span>
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}
