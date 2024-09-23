import { Link } from "react-router-dom"
import { HomeOutlined, SunOutlined } from "@ant-design/icons"; 
import { Button } from "antd"; 
import { LoginOutlined } from "@ant-design/icons";
import { ContactsOutlined } from "@ant-design/icons";
import { MoreOutlined } from "@ant-design/icons";
import { MoonOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";




function Header() {
  const { theme, setTheme } = useContext(ThemeContext);


  return (
    <div>
      <header className={`${theme == "light" ? "bg-white text-black py-2 " : "bg-red-400 text-white py-2"}`}>
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center abc">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5t3QyuqAhSZC-k6cCiPnCoacDVz-48Jq9085lRfJtfZUA-f-CAxBmlPwLiDXa2Ug1cw&usqp=CAU"
              alt="Logo"
              className="w-10 h-10 bg-indigo-500 rounded-full"
            />

            <span className="ml-3 text-xl"><span className="text-red-500">Taste</span> & Health</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

            <Link to={"aboutUs"} className="mr-5 text-black "> <MoreOutlined /></Link>

            <Link to={"ContactUs"} className="mr-5 text-black "><ContactsOutlined/></Link>
            <Link to={"Login"} className="mr-5"><LoginOutlined/></Link>
           
            <span className="mr-5">
              <MoonOutlined
                onClick={() => setTheme("dark")} // Switch to dark mode
                fontSize={"1.8rem"}
                className="hover:text-orange-600 cursor-pointer transition-all duration-150 ease-linear"
              />
            </span>

            {/* Sun Icon for Light Mode */}
           
            <span className="mr-5">

              <SunOutlined
                onClick={() => setTheme("light")} // Switch to light mode
                fontSize={"1.8rem"}
                className="hover:text-orange-600 cursor-pointer transition-all duration-150 ease-linear"
              />
            </span>
           <span className="mr-5"><ShoppingCartOutlined /></span>
           



          </nav>
          <button  >
            <Link to={"Home"}><HomeOutlined /></Link>
          </button>
        </div>
      </header>

    </div>
  )
}

export default Header