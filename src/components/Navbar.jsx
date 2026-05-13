import { useState, useEffect } from 'react';

export default function Navbar() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="navbar flex justify-between items-center py-8">
            {/* Bagian logo */}
            <div className="logo">
                <h1 className="text-2xl font-bold bg-white md:bg-transparent text-black md:text-white p-1 md:p-0">MyPortfolio</h1>
            </div>
            {/* Bagian menu */}
            <div className="nav-menu">
                <ul className={`flex space-x-10 fixed md:static left-1/2 transform -translate-x-1/2 md:translate-x-0 ${active ? 'top-0 opacity-100' : '-top-16 opacity-0'}`}>
                    <li><a href="#tentang" className="text-lg font-bold">Tentang</a></li>
                    <li><a href="#beranda" className="text-lg font-bold">Beranda</a></li>
                    <li><a href="#projek" className="text-lg font-bold">Projek</a></li>
                    <li><a href="#kontak" className="text-lg font-bold">Kontak</a></li>
                </ul>
            </div>
        </div>
    );
}