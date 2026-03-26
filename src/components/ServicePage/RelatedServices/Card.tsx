import { siteContent } from "@/src/content/global";
import { routes } from "@/src/lib/routes";
import { Service } from "@/src/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CardProps {
    service: Service;
}

export const Card = ({ service }: CardProps) => {
    const RelatedIcon = service.icon;
    return <Link
        key={service.id}
        href={`${routes.services}/${service.slug}`}
        className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#7FB539] hover:shadow-lg transition-all group"
    >
        <div className="w-12 h-12 bg-[#7FB539]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7FB539] transition-colors">
            <RelatedIcon className="text-[#7FB539] group-hover:text-white transition-colors" size={24} />
        </div>
        <h3 className="mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{service.shortDescription}</p>
        <span className="text-[#7FB539] text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            {siteContent.home.mainServicesSection.ctaLabel}
            <ArrowRight size={16} />
        </span>
    </Link>;
};