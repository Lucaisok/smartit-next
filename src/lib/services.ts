import { siteContent } from "../content/global";
import { Service } from "../types";

export const services: Service[] = [
    {
        id: "routine-cleaning",
        slug: "pulizie-ordinarie",
        title: siteContent.services.routineCleaning,
        image: "/images/services/placeholder.jpg",
        shortDescription: "Servizio di pulizia ordinaria personalizzato per le tue esigenze",
        icon: undefined,
    },
    {
        id: "deep-cleaning",
        slug: "pulizie-straordinarie",
        title: siteContent.services.deepCleaning,
        image: "/images/services/placeholder.jpg",
        shortDescription: "Pulizia profonda e approfondita degli spazi",
        icon: undefined,
    },
    {
        id: "maintenance",
        slug: "manutenzioni",
        title: siteContent.services.maintenance,
        image: "/images/services/placeholder.jpg",
        shortDescription: "Servizi di manutenzione completa e affidabile",
        icon: undefined,
    },
    {
        id: "concierge-and-reception",
        slug: "portierato-e-reception",
        title: siteContent.services.conciergeAndReception,
        image: "/images/services/placeholder.jpg",
        shortDescription: "Servizi di concierge e accoglienza professionale",
        icon: undefined,
    },
    {
        id: "green-area-maintenance",
        slug: "manutenzione-aree-verdi",
        title: siteContent.services.greenAreaMaintenance,
        image: "/images/services/placeholder.jpg",
        shortDescription: "Gestione e manutenzione delle aree verdi",
        icon: undefined,
    },
    {
        id: "renovations",
        slug: "ristrutturazioni",
        title: siteContent.services.renovations,
        image: "/images/services/placeholder.jpg",
        shortDescription: "Servizi di ristrutturazione e rinnovamento",
        icon: undefined,
    },
];