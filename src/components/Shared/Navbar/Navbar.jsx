import logoImg from "../../../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className='navbar bg-[#FFF7E0] '>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          {/* Mobile version */}
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Desktop version */}
      <div className='navbar-center hidden lg:flex py-6'>
        <ul className='menu menu-horizontal lg:items-center px-1'>
          <li>
            <a className='text-[#a34411] text-[22px] font-normal '>Belief</a>
          </li>
          <li>
            <a className='text-[#a34411] text-[22px] font-normal '>Program</a>
          </li>
          <li>
            <a className='text-[#a34411] text-[22px] font-normal '>Explore</a>
          </li>
          <li>
            <img src={logoImg} alt='logo' />
          </li>
          <li>
            <a className='text-[#a34411] text-[22px] font-normal '>Attend</a>
          </li>
          <li>
            <a className='text-[#a34411] text-[22px] font-normal '>Support</a>
          </li>
        </ul>
      </div>
      {/* Get pass button */}
      <div className='navbar-end'>
        <input
          type='submit'
          value='Get Passes'
          className=' bg-[#A34411] rounded-[34px] text-[#FFF7E0] text-[20px] font-normal get_pass_btn text-center cursor-pointer'
        />
      </div>
    </div>
  );
}
