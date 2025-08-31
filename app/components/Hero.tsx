"use client";

import Image from "next/image";
import heroImage from "../assets/hero-image.jpg";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center" id="hem">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Hero Image"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="flex flex-col text-4xl md:text-6xl font-bold text-foreground mb-6">
            RENA H&F
            <br />
            <span className="text-2xl md:text-4xl">
              För Rena <span className="text-yellow-400">Hem</span> Och{" "}
              <span className="text-yellow-400">Fönster</span>
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            För dig som uppskattar ett hem och fönster som alltid är skinnande
            rena. Vi kombinerar noggranhet med högsta service för att ge dig en
            fräschare vardag!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="hero"
              size="hero"
              onClick={() => {}}
              className="flex-1 sm:flex-none"
            >
              Kolla Vårt Utbud
            </Button>
            <Button
              variant="light"
              size="hero"
              onClick={() => {}}
              className="flex-1 sm:flex-none bg-transparent"
            >
              Kontakta Oss
            </Button>
          </div>

          {/* TRUST INDICATORS */}
          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Försäkrade medarbetare</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Miljövänliga produkter</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Garanterat resultat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
