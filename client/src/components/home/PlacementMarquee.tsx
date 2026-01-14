import { motion } from "framer-motion";

const companies = [
  "Google", "Microsoft", "Amazon", "Infosys", "TCS", "Wipro", "Accenture", 
  "IBM", "Capgemini", "Deloitte", "HCL", "Cognizant", "Mindtree", "Zoho"
];

export function PlacementMarquee() {
  return (
    <div className="w-full overflow-hidden bg-slate-50 py-10 border-y border-slate-200">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Our Students Work At Top Global Companies
        </p>
      </div>
      <div className="relative flex w-full overflow-hidden">
        <motion.div
          className="flex min-w-full shrink-0 gap-16 px-8"
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...companies, ...companies].map((company, index) => (
            <span
              key={`${company}-${index}`}
              className="whitespace-nowrap text-2xl font-bold text-slate-300 hover:text-slate-800 transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
        </motion.div>
        <motion.div
          className="flex min-w-full shrink-0 gap-16 px-8 absolute top-0 left-full"
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
           {[...companies, ...companies].map((company, index) => (
            <span
              key={`${company}-duplicate-${index}`}
              className="whitespace-nowrap text-2xl font-bold text-slate-300 hover:text-slate-800 transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
