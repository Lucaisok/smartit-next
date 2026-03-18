// General site-wide SEO metadata and structured data
import type { Metadata } from "next";

export const siteMetadata: Metadata = {
    title: "Smart it - Facility Management",
    description: "Pulizie professionali a Milano, Assago, Buccinasco. Facility management, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde, portierato. Servizi professionali per aziende e condomini.",
    openGraph: {
        title: "Smart it - Facility Management",
        description: "Pulizie professionali e servizi di facility management a Milano, Assago, Buccinasco. Specialisti in pulizie professionali, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde e portierato.",
        url: "https://www.smartit-srl.com",
        type: "website",
        images: [
            {
                url: "https://www.smartit-srl.com/public/no-text-logo.png",
                width: 800,
                height: 600,
                alt: "Smart it - Facility Management Milano"
            }
        ],
        locale: "it_IT"
    },
    twitter: {
        card: "summary_large_image",
        site: "@smartitmilano",
        title: "Smart it - Facility Management",
        description: "Pulizie professionali e servizi di facility management a Milano, Assago, Buccinasco. Specialisti in pulizie professionali, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde e portierato.",
        images: ["https://www.smartit-srl.com/public/no-text-logo.png"]
    },
    alternates: {
        canonical: "https://www.smartit-srl.com/",
        languages: {
            "it-IT": "/",
        }
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        }
    }
};

export const siteStructuredData = {
    organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Smart it",
        "url": "https://www.smartit-srl.com",
        "logo": "https://www.smartit-srl.com/public/no-text-logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+39 02828 605 83",
            "contactType": "Contact",
            "areaServed": "IT",
            "availableLanguage": ["Italian", "English"]
        }
    },
    localBusiness: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Smart it",
        "image": "https://www.smartit-srl.com/public/no-text-logo.png",
        "@id": "https://www.smartit-srl.com",
        "url": "https://www.smartit-srl.com",
        "telephone": "+39 02828 605 83",
        "email": "Info@smartit-srl.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Palazzo dei Congressi, Milanofiori, Assago (MI)",
            "addressLocality": "Milano",
            "addressCountry": "IT"
        },
        "openingHours": "Mo-Fr 09:00-18:00",
        "areaServed": ["Milano", "Assago", "Buccinasco"],
        "description": "Pulizie professionali a Milano, Assago, Buccinasco e facility management. Specializzati in pulizie professionali, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde e servizi di portierato."
    }
};
