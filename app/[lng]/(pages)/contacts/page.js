import { getDictionary } from '@/app/locales/getDictionary';
import PageContainer from '../../components/PageContainer'
import SmoothModal from '../../components/SmoothModal'
import React from 'react'
import Link from 'next/link';
import { MainButton, RedButton } from '../../components/buttons';

function page({ params }) {
    const { lng } = params;
    const t = getDictionary(lng);
    return (
        <PageContainer>
            <SmoothModal time={1000} />
            <div className="flex flex-col items-center text-center">
                <h3>
                    {t.Footer.title}
                </h3>
                <ul>
                    <li className="p-footer">{t.Footer.street}</li>
                    <li className="p-footer">{t.Footer.city}</li>
                    <li className="p-footer">{t.Footer.tel}</li>
                    <li className="p-footer">{t.Footer.fax}</li>
                    <li className="p-footer">{t.Footer.email}</li>
                </ul>

            </div>
            <div className="flex flex-col items-center text-center mt-8">
                <h3>
                    {t.Footer.openingHours}
                </h3>
                <ul>
                    <li>{t.Footer.week}</li>
                    <li>{t.Footer.weekEnd}</li>
                </ul>

            </div>
            <div className='w-fit self-center flex justify-center mt-16'>
                <Link href="mailto:info@borgamarmi.it">
                    <button id="contact-email-button" className='bg-rose-700 py-2 px-4 rounded hover:bg-opacity-80 text-white'>{t.Footer.contact}</button>
                </Link>
            </div>
        </PageContainer>
    )
}

export default page
