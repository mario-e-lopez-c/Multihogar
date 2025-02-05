import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Footer() {
    // const { userInfo } = useSelector((state) => state.userLogin);
    const Links = [
        {
            title:'Compañía',
            links: [
                {
                    link: '/about-us',
                    name: 'Acerca de nosotros'
                },
                {
                    link: '/faq',
                    name: 'FAQ'
                },
                {
                    link: '/politicas',
                    name: 'Politicas'
                },
                {
                    link: '/terms-condition',
                    name: 'Terminos y condiciones'
                }
            ]
        },
        {
            title: 'Categorias Principales',
            links: [
                {
                    link: '#',
                    name: 'Electrodomesticos'
                },
                {
                    link: '#',
                    name: 'Cristaleria'
                },
                {
                    link: '#',
                    name: 'Loza Cerámica'
                },
                {
                    link: '#',
                    name: 'Plasticos'
                }
            ]
        },
        {
            title: 'Mi Cuenta',
            links: [
                {
                    // link: userInfo ? '/dashboard' : '/registration',
                    name: 'Dashboard',
                },
                {
                    // link: userInfo ? '/orders' : '/registation',
                    name: 'My Orders',
                  },
                  {
                    // link: userInfo ? '/profile' : '/registation',
                    name: 'Updated Profile',
                  },
                  {
                    // link: userInfo ? '/password' : '/registation',
                    name: 'Change Password',
                  },
            ]
        }
    ]
    return (
        <div className="bg-gray-50 py-4 border-t-2">
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
                    {Links.map((l, i) => (
                        <div
                            key={i}
                            className='pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3'
                        >
                            <h3 className='text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5'>
                                {l.title}
                            </h3>        
                        </div>
                    ))}
                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                    <Link to="/">
                    <img
                        className="w-2/4 object-contain h-12"
                        src="/images/logoMultihogar.png"
                        alt="logo"
                    />
                    </Link>
                    <p className="leading-7 font-sans text-sm text-gray-600 mt-3">
                    <span>
                        Cra. 19 #18-48 <br /> Tunja, Boyacá, 
                        Colombia
                    </span>
                    <br />
                    <span>Tell: +57 311 230 3443</span>
                    <br />
                    <span>Email: angelancg@hotmail.com</span>
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer