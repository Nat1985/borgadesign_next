import { NextResponse } from "next/server";


// Questo middleware aggiunge /fr(+ eventuale sottopagine) a tutte le pagine qualora, inserite manualmente, non abbiano la sigla iniziale della lingua
export function middleware(req) {
    const { pathname } = req.nextUrl;

    // Lingue supportate
    const locales = ["fr", "it"];

    // Esclude asset statici
    if (
        pathname.startsWith("/_next") || // Esclude file generati da Next.js
        pathname.startsWith("/favicon.ico") || // Esclude il favicon
        pathname.startsWith("/public") || // Evita problemi con file in public/
        pathname.includes(".") // Evita qualsiasi file statico (es. immagini, CSS, JS)
    ) {
        return NextResponse.next();
    }

    // Se l'URL non contiene una lingua valida, reindirizza a "/fr"
    const firstSegment = pathname.split("/")[1];
    if (!locales.includes(firstSegment)) {
        return NextResponse.redirect(new URL(`/fr${pathname}`, req.url))
    }

    return NextResponse.next();
}

// Applico il middleware a tutte le pagine
export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
}