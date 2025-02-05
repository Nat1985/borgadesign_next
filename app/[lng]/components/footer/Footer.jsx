import { getDictionary } from '@/app/locales/getDictionary';
import React from 'react'
import { MainButton } from '../buttons';
import Link from 'next/link';

function Footer({ params }) {
    const { lng } = params;
    const t = getDictionary(lng);
    return (
        <div className='w-full flex-col bg-[#231f20]'>
            <div className='w-full flex justify-center pt-16'>
                <Link href="mailto:info@borgamarmi.it"><MainButton text={t.Footer.contact} isTextWhite /></Link>
            </div>
            <div className="z-10 w-full p-8 text-white flex flex-col lg:flex-row justify-center gap-2 mt-16">
                <div className="flex-1 flex flex-col items-center justify-center text-center border-white border-b lg:border-b-0 lg:border-r pb-8 lg:pb-0">
                    <h3>
                        {t.Footer.title}
                    </h3>
                    <div className="p-footer">{t.Footer.street}</div>
                    <div className="p-footer">{t.Footer.city}</div>
                    <div className="p-footer">{t.Footer.tel}</div>
                    <div className="p-footer">{t.Footer.fax}</div>
                    <div className="p-footer">{t.Footer.email}</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <h3>
                        {t.Footer.openingHours}
                    </h3>
                    <div className="p-footer">{t.Footer.week}</div>
                    <div className="p-footer">{t.Footer.weekEnd}</div>
                </div>
            </div>
        </div>

    )
}

export default Footer
