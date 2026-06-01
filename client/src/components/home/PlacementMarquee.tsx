import { motion } from "framer-motion";

const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
];

export function PlacementMarquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-10 border-y border-slate-200">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-2xl font-bold font-heading text-slate-800">
          Our Hiring Partners
        </p>
      </div>
      <div className="relative flex w-full overflow-hidden items-center h-16">
        <motion.div
          className="flex min-w-full shrink-0 items-center justify-around gap-16 px-8"
          animate={{ x: "-100%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[120px]"
            >
              <img src={company.logo} alt={company.name} className="max-h-8 max-w-[120px] object-contain" />
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex min-w-full shrink-0 items-center justify-around gap-16 px-8 absolute top-0 left-full h-full"
          animate={{ x: "-100%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
           {[...companies, ...companies].map((company, index) => (
            <div
              key={`${company.name}-duplicate-${index}`}
              className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[120px]"
            >
              <img src={company.logo} alt={company.name} className="max-h-8 max-w-[120px] object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
