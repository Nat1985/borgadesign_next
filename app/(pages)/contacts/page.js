import PageContainer from '@/app/components/PageContainer'
import SmoothModal from '@/app/components/SmoothModal'
import React from 'react'

function page() {
    return (
        <PageContainer>
            <SmoothModal time={1000} />
            <div className="flex flex-col items-center text-center">
                <h3>
                    Showroom Borga Design
                </h3>
                <p className="p-footer">Via Armea, 135</p>
                <p className="p-footer">Sanremo (IM) 18038 Italie</p>
                <p className="p-footer">Tel: +39 0184 514458</p>
                <p className="p-footer">Fax: +39 0184 514070</p>
                <p className="p-footer">Email: info@borgamarmi.it</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <h3>
                    Horaires d’ouverture
                </h3>
                <p>Lundi - Vendredi : 08:00 - 12:00 / 14:00 - 18:30</p>
                <p>Samedi : 09:00 - 12:00</p>
            </div>
        </PageContainer>
    )
}

export default page
