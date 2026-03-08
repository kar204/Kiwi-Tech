import { motion } from "framer-motion";
import { Users, TrendingUp, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PlacementsSection() {
  const companies = [
    { name: "Google", logo: "G", bg: "bg-blue-500" },
    { name: "Amazon", logo: "A", bg: "bg-orange-500" },
    { name: "Microsoft", logo: "M", bg: "bg-green-500" },
    { name: "Apple", logo: "Ap", bg: "bg-gray-700" },
    { name: "Meta", logo: "F", bg: "bg-blue-600" },
    { name: "TCS", logo: "T", bg: "bg-cyan-600" },
    { name: "Infosys", logo: "I", bg: "bg-blue-700" },
    { name: "Wipro", logo: "W", bg: "bg-purple-600" },
    { name: "HCL", logo: "H", bg: "bg-indigo-600" },
    { name: "IBM", logo: "IB", bg: "bg-blue-800" },
    { name: "Deloitte", logo: "D", bg: "bg-red-600" },
    { name: "Accenture", logo: "Ac", bg: "bg-purple-700" },
  ];

  const successStories = [
    {
      name: "Rahul Kumar",
      role: "Data Scientist",
      company: "Google",
      salary: "₹18,00,000/yr",
      course: "Data Science with AI",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",
    },
    {
      name: "Priya Singh",
      role: "Full Stack Developer",
      company: "Amazon",
      salary: "₹15,50,000/yr",
      course: "Java Full Stack",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    },
    {
      name: "Akhil Patel",
      role: "Cloud Architect",
      company: "Microsoft",
      salary: "₹17,00,000/yr",
      course: "AWS Cloud Computing",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=akhil",
    },
    {
      name: "Sneha Sharma",
      role: "QA Automation Engineer",
      company: "TCS",
      salary: "₹12,50,000/yr",
      course: "Software Testing",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sneha",
    },
  ];

  const stats = [
    { icon: TrendingUp, label: "Average Salary", value: "₹15.5L", color: "text-green-600" },
    { icon: Users, label: "Placement Rate", value: "95%", color: "text-blue-600" },
    { icon: Award, label: "Top Company", value: "FAANG", color: "text-purple-600" },
  ];

  return (
    <section id="placements" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <Badge className="bg-green-100 text-green-700 border-none mx-auto">
            ✨ Our Success Stories
          </Badge>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">
            Your Success is Our <span className="text-primary">Mission</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our students are placed in top global companies with exceptional packages and roles.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-center"
              >
                <Icon className={`h-10 w-10 mx-auto mb-4 ${stat.color}`} />
                <p className="text-slate-600 text-sm font-medium mb-2">{stat.label}</p>
                <p className="font-heading text-3xl font-bold text-slate-900">{stat.value}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Success Stories */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 text-slate-900"
          >
            Meet Our Success Stories
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-24 bg-gradient-to-r from-primary to-secondary opacity-80"></div>
                <div className="px-6 py-6 -mt-12 relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="h-20 w-20 rounded-full border-4 border-white shadow-md mb-4"
                  />
                  <h4 className="font-bold text-slate-900 mb-1">{story.name}</h4>
                  <p className="text-sm text-primary font-semibold">{story.role}</p>
                  <p className="text-xs text-slate-600 mb-3">{story.company}</p>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <p className="text-2xl font-bold text-green-600">{story.salary}</p>
                    <Badge variant="secondary" className="text-xs">
                      {story.course}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hiring Partners */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 text-slate-900"
          >
            Trusted by Top Companies
          </motion.h3>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {companies.map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className={`${company.bg} rounded-2xl aspect-square flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer group`}
              >
                <div className="text-center">
                  <p className="text-white font-bold text-2xl">{company.logo}</p>
                  <p className="text-white text-xs font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {company.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
