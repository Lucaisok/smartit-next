import { Contacts } from "@/src/components/AboutPage/Contacts/Contacts";
import { Hero } from "@/src/components/AboutPage/Hero/Hero";
import { Info } from "@/src/components/AboutPage/Info/Info";
import { MissionSection } from "@/src/components/AboutPage/Mission/MissionSection";
import { ValuesSection } from "@/src/components/AboutPage/Values/ValuesSection";
import { WhyUsSection } from "@/src/components/AboutPage/WhyUs/WhyUsSection";

export default function About() {
    return (
        <main>
            <Hero />
            <Info />
            <ValuesSection />
            <WhyUsSection />
            <MissionSection />
            <Contacts />
        </main>
    );
}