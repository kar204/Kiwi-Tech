import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Trophy, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const stats = [
    { icon: Users, label: "Students Trained", value: "5000+" },
    { icon: Trophy, label: "Placement Rate", value: "93-97%" },
    { icon: Zap, label: "Industry-Leading Courses", value: "10+" }
  ];

  const features = [
    "Expert instructors with 10+ years industry experience",
    "Live online classes with flexible 5 time slots daily",
    "Real-world projects and capstone assignments",
    "Lifetime access to course materials",
    "1:1 mentorship and career guidance",
    "Placement assistance",
    "Affordable pricing from ₹19,000"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-6">About KiwiTech</Badge>
              <h1 className="font-heading text-5xl font-bold mb-6">
                Empowering India's Future <span className="text-primary">Tech Leaders</span>
              </h1>
              <p className="text-xl text-slate-300">
                KiwiTech is India's most trusted online tech training platform. We partner with students and professionals to master in-demand skills, get placed in top MNCs, and launch thriving tech careers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="font-heading text-4xl font-bold text-foreground mb-2">{stat.value}</p>
                    <p className="text-slate-600">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why KiwiTech */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-heading text-4xl font-bold text-center mb-16">
              Why Choose <span className="text-[#8bc34a]">KiwiTech?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4 items-start"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <p className="text-slate-700 font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Badge className="bg-[#8bc34a]/10 text-[#8bc34a] border-none mb-4">Our Mission</Badge>
                <h3 className="font-heading text-3xl font-bold mb-4">Making Tech Education Affordable & Accessible</h3>
                <p className="text-slate-600 leading-relaxed">
                  We believe everyone should have access to world-class tech education, regardless of their background or financial situation. That's why we offer industry-leading courses at unbeatable prices, with 100% placement support and real-world learning experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Badge className="bg-[#8bc34a]/10 text-[#8bc34a] border-none mb-4">Our Values</Badge>
                <h3 className="font-heading text-3xl font-bold mb-4">Quality, Integrity & Impact</h3>
                <div className="space-y-3 text-slate-600">
                  <p>✓ <strong>Quality First:</strong> Expert instructors, proven curriculum, real projects</p>
                  <p>✓ <strong>Transparent Pricing:</strong> No hidden fees, affordable from day one</p>
                  <p>✓ <strong>Career-Focused:</strong> Every course designed for job placement</p>
                  <p>✓ <strong>Student Success:</strong> Your success is our success</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
