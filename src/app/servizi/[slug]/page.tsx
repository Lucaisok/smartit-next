import type { Metadata } from "next";
import { generateServiceMetadata, getServiceStructuredData } from "@/src/lib/seo/service-detail";
import { notFound } from "next/navigation";
import { services } from "@/src/lib/services";
import { Breadcrumbs } from "@/src/components/ServicePage/Breadcrumbs/Breadcrumbs";
import { Hero } from "@/src/components/ServicePage/Hero/Hero";
import { Description } from "@/src/components/ServicePage/Description/Description";
import { Faqs } from "@/src/components/ServicePage/Faq/Faq";
import { Contacts } from "@/src/components/ServicePage/Contacts/Contacts";
import { RelatedServices } from "@/src/components/ServicePage/RelatedServices/RelatedServices";

// Dynamic SEO metadata for each service page
export async function generateMetadata({ params }: { params: { slug: string; }; }): Promise<Metadata> {
    return generateServiceMetadata(params.slug);
}

// Pre-generate all service slugs for static generation
export async function generateStaticParams() {
    const { services } = await import("@/src/lib/services");
    return services.map((service) => ({ slug: service.slug }));
}

interface ServicePageProps {
    params: Promise<{ slug: string; }>;
}

const ServicePage = async ({ params }: ServicePageProps) => {
    const { slug } = await Promise.resolve(params);
    const service = services.find((s) => s.slug === slug);
    if (!service) return notFound();

    const relatedServices = services
        .filter(s => s.id !== service.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const structuredData = getServiceStructuredData(service.slug);
    return (
        <>
            {structuredData && (
                <script type="application/ld+json" suppressHydrationWarning>
                    {JSON.stringify(structuredData)}
                </script>
            )}
            <main>
                <Breadcrumbs serviceTitle={service.title} />
                <Hero title={service.title} shortDescription={service.shortDescription} image={service.image} Icon={service.icon} />
                <Description description={service.description} />
                {!!service.faqs && <Faqs serviceTitle={service.title} faqs={service.faqs} />}
                <Contacts serviceTitle={service.title} />
                <RelatedServices services={relatedServices} />
            </main>
        </>
    );
};

export default ServicePage;