import { Home, Briefcase, Users, Mail } from "lucide-react";
import { siteContent } from "@/src/content/global";
import { routes } from "@/src/lib/routes";

export const menuItems = {
    home: { href: routes.home, label: siteContent.nav.homeLabel, icon: Home },
    services: { href: routes.services, label: siteContent.nav.serviziLabel, icon: Briefcase },
    about: { href: routes.about, label: siteContent.nav.chiSiamoLabel, icon: Users },
    contact: { href: routes.contact, label: siteContent.nav.contattiLabel, icon: Mail },
};