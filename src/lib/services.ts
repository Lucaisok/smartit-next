import { Building2, Factory, Home, Sparkles, Wrench, Paintbrush, Truck, Package, Users, Hammer, BoxIcon, Trees } from "lucide-react";
import { siteContent } from "../content/global";
import { AdditionalService, Service } from "../types";

export const services: Service[] = [
    {
        id: "pulizie-ordinarie-straordinarie",
        slug: "pulizie-ordinarie-straordinarie",
        title: siteContent.services.cleaning.title,
        icon: Sparkles,
        shortDescription: siteContent.services.cleaning.shortDescription,
        description: siteContent.services.cleaning.description,
        image: "https://images.unsplash.com/photo-1627098241506-344dea0aa27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzczMzI4Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        id: "pulizie-aziende-uffici",
        slug: "pulizie-aziende-uffici",
        title: siteContent.services.businessAndOfficeCleaning.title,
        icon: Building2,
        shortDescription: siteContent.services.businessAndOfficeCleaning.shortDescription,
        description: siteContent.services.businessAndOfficeCleaning.description,
        image: "https://images.unsplash.com/photo-1627098241506-344dea0aa27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzczMzI4Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        id: "pulizie-industriali-post-cantiere",
        slug: "pulizie-industriali-post-cantiere",
        title: siteContent.services.industrialCleaning.title,
        icon: Factory,
        shortDescription: siteContent.services.industrialCleaning.shortDescription,
        description: siteContent.services.industrialCleaning.description,
        image: "https://images.unsplash.com/photo-1763478545926-e988846846f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFpbnRlbmFuY2UlMjB3b3JrZXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzczMjg0NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        id: "pulizie-condominiali",
        slug: "pulizie-condominiali",
        title: siteContent.services.condominiumCleaning.title,
        icon: Home,
        shortDescription: siteContent.services.condominiumCleaning.shortDescription,
        description: siteContent.services.condominiumCleaning.description,
        image: "https://images.unsplash.com/photo-1769861547797-4803b422eae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzczMzI4Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        title: siteContent.services.maintenance.title,
        id: "manutenzioni",
        slug: "manutenzioni",
        icon: Wrench,
        shortDescription: siteContent.services.maintenance.shortDescription,
        description: siteContent.services.maintenance.description,
        image: "https://images.unsplash.com/photo-1667344970484-cbcd0885d7f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpbGl0eSUyMG1hbmFnZW1lbnQlMjBtYWludGVuYW5jZSUyMHdvcmtlcnxlbnwxfHx8fDE3NzMzMjc2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        title: "Imbiancature",
        id: "imbiancature",
        slug: "imbiancature",
        icon: Paintbrush,
        shortDescription: "Servizio di imbiancatura professionale per interni ed esterni.",
        description: "Offriamo un servizio completo di imbiancatura per abitazioni, uffici e spazi commerciali. Utilizziamo vernici di alta qualità e tecniche avanzate per assicurare una finitura liscia e uniforme. Il nostro team di esperti si occupa di ogni fase del processo, dalla preparazione delle superfici alla pulizia finale, garantendo un risultato impeccabile che trasforma i tuoi spazi.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbWJpYW5jdHVyZSUyMHNlcnZpY2V8ZW58MXx8fHwxNzczMzI4Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    }
];

export const additionalServices: AdditionalService[] = [
    {
        title: "Servizi di portierato e reception",
        id: "portierato-reception",
        slug: "portierato-reception",
        shortDescription: "Personale qualificato per accoglienza e gestione delle portinerie.",
        description: "Descrizione temporanea: servizio di portierato e reception per aziende e condomini.",
        image: "https://images.unsplash.com/photo-1515165562835-c7b7b7b7b7b7?auto=format&fit=crop&w=800&q=80",
        icon: Users,
    },
    {
        title: "Allestimento uffici",
        id: "allestimento-uffici",
        slug: "allestimento-uffici",
        shortDescription: "Progettazione e realizzazione di spazi di lavoro funzionali.",
        description: "Descrizione temporanea: servizio di allestimento e organizzazione spazi ufficio.",
        image: "https://images.unsplash.com/photo-1464983953574-0892a7162a8e?auto=format&fit=crop&w=800&q=80",
        icon: Package,
    },
    {
        title: "Traslochi e movimentazione arredi",
        id: "traslochi-movimentazioni-arredi",
        slug: "traslochi-movimentazioni-arredi",
        shortDescription: "Servizi completi di trasloco e movimentazione mobili e attrezzature.",
        description: "Descrizione temporanea: servizio di traslochi e movimentazione arredi per aziende e privati.",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
        icon: Truck,
    },
    {
        title: "Piccoli lavori edili",
        id: "piccoli-lavori-edili",
        slug: "piccoli-lavori-edili",
        shortDescription: "Interventi edilizi di piccola entità per manutenzione e ristrutturazione.",
        description: "Descrizione temporanea: servizio di piccoli lavori edili e manutenzione.",
        image: "https://images.unsplash.com/photo-1506744038136-462fa3a6a7f0?auto=format&fit=crop&w=800&q=80",
        icon: Hammer,
    },
    {
        title: "Facchinaggio e magazzinaggio",
        id: "facchinaggio-magazzinaggio",
        slug: "facchinaggio-magazzinaggio",
        shortDescription: "Gestione logistica, stoccaggio e movimentazione merci.",
        description: "Descrizione temporanea: servizio di facchinaggio e magazzinaggio per aziende.",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f1d1b?auto=format&fit=crop&w=800&q=80",
        icon: BoxIcon,
    },
    {
        title: "Manutenzione del verde",
        id: "manutenzione-verde",
        slug: "manutenzione-verde",
        shortDescription: "Cura e manutenzione di giardini, aree verdi e spazi esterni.",
        description: "Descrizione temporanea: servizio di manutenzione del verde e giardinaggio.",
        image: "https://images.unsplash.com/photo-1465101178521-c1fcd5d1b1b1?auto=format&fit=crop&w=800&q=80",
        icon: Trees,
    }
];