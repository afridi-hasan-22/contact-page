import React from 'react';

const Navbar = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <nav className='w-full flex justify-between items-center py-4'>
                <img src="/public/Frame 2 1.png" alt="" />
                <ul className='flex space-x-6 font-bold'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;