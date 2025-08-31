import windowCleaningIcon from "../assets/window-cleaning.png";
import homeCleaningIcon from "../assets/house-cleaning.png";
import officeCleaningIcon from "../assets/office.png";

import ServiceCard from "./ServiceCard";
import { Building, Home, Laptop, MapPin, Sparkles } from "lucide-react";

const Services = () => {
  return (
    <section id="tjanster" className="py-20 bg-gradient-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Våra Tjänster
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi erbjuder ett komplett utbud av städtjänster för både
            privatpersoner och företag. Oavsett om det handlar om hem, kontor
            eller större verksamheter anpassar vi alltid våra lösningar efter
            dina behov.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Window Cleaning service */}
          <ServiceCard
            mainIcon={windowCleaningIcon}
            titleIcon={<Sparkles className="2-6 h-6" />}
            title="Fönsterputs"
            description="Kristallklara fönster med professionell utrustning"
            list={[
              "rengöring av båda sidor av fönstret",
              "Karmar och fönsterbänkar",
              "Spindlar och löv rensas bort",
              "Balkongdörrar (tillval)",
            ]}
            time="Cirka 10-15 min per fönster"
            cta="Boka Fönsterputs"
          />

          <ServiceCard
            mainIcon={homeCleaningIcon}
            titleIcon={<Home className="w-6 h-6" />}
            title="Hemstädning"
            description="Vi tar hand om ditt hem med nogrannhet och omtanke"
            list={[
              "dammsugning och våttorkning av alla golv och mattor",
              "dammning av möbler, hyllor samt puts av speglar och glasytor",
              "avtorkning av bänkar, spis, diskho och andra ytor i köket",
              "rengöring av handfat, toalett, dusch och badkar",
            ]}
            time="Cirka 4-8 timmar beroende på storlek"
            cta="Boka Hemstädning"
          />
          <ServiceCard
            mainIcon={officeCleaningIcon}
            titleIcon={<Laptop className="w-6 h-6" />}
            title="Kontorsstädning"
            description="Ett rent kontor är avgörande för trivsel och produktivitet"
            list={[
              "Reception",
              "Gemensamma ytor",
              "Arbetsplatser",
              "Toaletter",
            ]}
            time="Cirka 4-8 timmar beroende på storlek"
            cta="Boka Kontosstädning"
          />
          <ServiceCard
            mainIcon={officeCleaningIcon}
            titleIcon={<Building className="w-6 h-6" />}
            title="Företagsstädning"
            description="Vi städar butiker, restauranger och verksamheter."
            list={[
              "Rena arbetsytor",
              "Kök & personalutrymmen",
              "Allmänna ytor",
              "Toaletter",
            ]}
            time="Cirka 4-8 timmar beroende på storlek"
            cta="Boka Företagsstädning"
          />
          <ServiceCard
            mainIcon={officeCleaningIcon}
            titleIcon={<MapPin className="w-6 h-6" />}
            title="Special städning & Flytt"
            description="Behöver du flyttstädning, storstädning eller andra särskilda uppdrag?"
            list={[
              "Vi anpassar oss utifrån dina behov",
              "Vi utför flytt inom hela Skåne utan extra kostander, med både timpris och fast pris som alternativ",
              "Tveka inte att höra av dig för att disskutera dina behov",
            ]}
            time="Cirka 4-8 timmar beroende på storlek"
            cta="Boka Företagsstädning"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
