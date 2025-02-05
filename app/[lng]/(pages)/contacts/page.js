import { getDictionary } from '@/app/locales/getDictionary';
import PageContainer from '../../components/PageContainer'
import SmoothModal from '../../components/SmoothModal'
import React from 'react'
import Link from 'next/link';
import { MainButton } from '../../components/buttons';

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
                <p className="p-footer">{t.Footer.street}</p>
                <p className="p-footer">{t.Footer.city}</p>
                <p className="p-footer">{t.Footer.tel}</p>
                <p className="p-footer">{t.Footer.fax}</p>
                <p className="p-footer">{t.Footer.email}</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <h3>
                    {t.Footer.openingHours}
                </h3>
                <p>{t.Footer.week}</p>
                <p>{t.Footer.weekEnd}</p>
            </div>
            <div className='w-full flex justify-center pt-16'>
                <Link href="mailto:info@borgamarmi.it"><MainButton text={t.Footer.contact} /></Link>
            </div>
        </PageContainer>
    )
}

export default page
