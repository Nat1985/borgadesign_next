import React from 'react'

function Footer() {
    console.log(0)
    return (
        <div className="z-10 w-full bg-[#231f20] p-8 text-white flex flex-col lg:flex-row justify-center gap-2 mt-16">
            <div className="flex-1 flex flex-col items-center justify-center text-center border-white border-b lg:border-b-0 lg:border-r pb-8 lg:pb-0">
                <h3>
                    Showroom Borga Design
                </h3>
                <div className="p-footer">Via Armea, 135</div>
                <div className="p-footer">Sanremo (IM) 18038 Italie</div>
                <div className="p-footer">Tel: +39 0184 514458</div>
                <div className="p-footer">Fax: +39 0184 514070</div>
                <div className="p-footer">Email: info@borgamarmi.it</div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
                <h3>
                    Horaires d’ouverture
                </h3>
                <div className="p-footer">Lundi - Vendredi : 08:00 - 12:00 / 14:00 - 18:30</div>
                <div className="p-footer">Samedi : 09:00 - 12:00</div>
            </div>
        </div>
    )
}

export default Footer
