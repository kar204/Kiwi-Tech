import { useRoute } from "wouter";
import { courses, JourneyStep } from "@/lib/courses";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Download, 
  PlayCircle, 
  Users, 
  Trophy, 
  Target, 
  Zap, 
  ChevronRight, 
  Star,
  Timer,
  Globe,
  Rocket,
  Info,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import stockImage from "@assets/stock_images/technology_corporate_313834e7.jpg";

export default function CourseDetail() {
  const [, params] = useRoute("/course/:slug");
  const slug = params?.slug;
  const course = courses.find((c) => c.slug === slug);
  const [selectedStep, setSelectedStep] = useState<JourneyStep | null>(null);

  if (!course) {
    return <NotFound />;
  }

  const handleDownload = () => {
    // Mock PDF download
    const link = document.createElement("a");
    link.href = "#";
    link.download = `${course.slug}-syllabus.pdf`;
    link.click();
    alert("Syllabus download started! (Demo)");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Course Header */}
        <section className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden">
           <div className="absolute inset-0 bg-slate-900/90 z-10" />
           <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${stockImage})` }}
           />
           
          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                      {course.level} Level
                    </Badge>
                    <Badge variant="outline" className="border-green-500/50 text-green-400">
                      Online Live Classes
                    </Badge>
                    <div className="flex items-center gap-1 text-yellow-400 font-bold">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{course.rating}</span>
                      <span className="text-slate-400 text-sm font-normal ml-1">({course.students.toLocaleString()} students)</span>
                    </div>
                  </div>

                  <h1 className="font-heading text-4xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                    {course.title} <span className="text-primary">Mastery</span>
                  </h1>
                  
                  <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                    {course.description} Designed for both students and working professionals looking for a career transition.
                  </p>

                  <div className="flex flex-wrap gap-6 pt-4">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <p className="text-xs text-slate-400">Duration</p>
                        <p className="font-bold text-white">{course.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <Target className="h-6 w-6 text-primary" />
                      <div>
                        <p className="text-xs text-slate-400">Salary Range</p>
                        <p className="font-bold text-white">{course.salaryRange}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-1"
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-white/20 text-slate-900">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Zap className="text-primary h-6 w-6 fill-primary" />
                    Enroll Now
                  </h3>

                  <div className="mb-8 p-6 rounded-2xl bg-primary/5 border border-primary/20">
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Special Offer</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">₹{course.discountedPrice.toLocaleString()}</span>
                      <span className="text-lg line-through text-slate-400">₹{course.originalPrice.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-primary font-semibold mt-2">{Math.round((1 - course.discountedPrice / course.originalPrice) * 100)}% OFF</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                      <div>
                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Starting Date</p>
                        <p className="font-bold text-slate-900">Next Monday</p>
                      </div>
                      <Calendar className="h-8 w-8 text-primary/40" />
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <Timer className="h-4 w-4" /> Available Slots (IST)
                      </p>
                      <div className="grid grid-cols-1 gap-2">
                        {course.slots.map((slot, i) => (
                          <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white hover:border-primary/30 transition-colors">
                            <span className="text-sm font-medium">{slot.time}</span>
                            <Badge variant={slot.availability === 'Full' ? 'destructive' : 'outline'} className="text-[10px]">
                              {slot.availability}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 h-14 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20">
                    Book Free Demo
                  </Button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    *Limited seats to ensure quality interaction
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold mb-4">Tools You'll <span className="text-primary">Master</span></h2>
              <p className="text-slate-500">Industry standard tools used by top MNCs</p>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
              {course.tools.map((tool) => (
                <motion.div 
                  key={tool.name}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="h-20 w-20 rounded-2xl bg-slate-50 border border-slate-100 p-4 flex items-center justify-center shadow-sm">
                    <img src={tool.icon} alt={tool.name} className="h-full w-full object-contain" />
                  </div>
                  <span className="text-sm font-bold text-slate-600">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Journey Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-heading text-4xl font-bold mb-6">Your Learning <span className="text-primary">Journey</span></h2>
              <p className="text-slate-500 text-lg">A structured path from beginner to industry-ready professional. Click on any step to see more details.</p>
            </div>

            <div className="relative">
              {/* Horizontal Line for Desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2" />
              
              <div className="grid lg:grid-cols-4 gap-8 relative z-10">
                {course.journey.map((step, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedStep(step)}
                    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 cursor-pointer group"
                  >
                    <div className={`h-12 w-12 rounded-2xl ${course.color} flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-current/20`}>
                      {i + 1}
                    </div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{step.step}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{step.detail}</p>
                    <div className="mt-auto flex items-center text-primary font-bold text-xs uppercase tracking-widest">
                      Show Details <Info className="ml-1 h-3 w-3" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features & Syllabus */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="font-heading text-3xl font-bold">Comprehensive <span className="text-primary">Syllabus</span></h2>
                  <div className="grid gap-4">
                    {course.modules.map((module, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-primary/40 transition-all cursor-default group shadow-sm">
                        <div className={`h-8 w-8 rounded-lg ${course.color} bg-opacity-10 flex items-center justify-center shrink-0 group-hover:bg-opacity-100 transition-all`}>
                          <CheckCircle2 className={`h-4 w-4 ${course.color.replace('bg-', 'text-')} group-hover:text-white`} />
                        </div>
                        <span className="font-bold text-slate-700">{module}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={handleDownload}
                    variant="outline" 
                    className="w-full h-12 rounded-xl border-primary text-primary hover:bg-primary/5 font-bold"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Complete Course PDF
                  </Button>
                </div>
              </div>

              <div className="space-y-12">
                <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Rocket className="h-40 w-40" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-8">What Makes Us <span className="text-primary">Unique?</span></h3>
                  <div className="grid gap-8">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex gap-5">
                        <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                          {i === 0 ? <Users className="h-6 w-6 text-primary" /> : i === 1 ? <Trophy className="h-6 w-6 text-primary" /> : <Globe className="h-6 w-6 text-primary" />}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-1">{feature}</h4>
                          <p className="text-slate-400 text-sm">Real-world training focused on landing you a top-tier job.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 pt-12 border-t border-white/10 text-center">
                    <p className="text-sm text-slate-400 mb-6 font-medium">Trusted by Hiring Managers from</p>
                    <div className="flex flex-wrap justify-center gap-6 opacity-30 grayscale invert">
                      {['Google', 'Amazon', 'TCS', 'Wipro'].map(brand => (
                        <span key={brand} className="text-xl font-bold">{brand}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedStep && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStep(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2rem] p-8 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedStep(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="space-y-6">
                <Badge className="bg-primary/10 text-primary border-none">Step Details</Badge>
                <h3 className="font-heading text-3xl font-bold">{selectedStep.step}</h3>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {selectedStep.extendedInfo}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button onClick={() => setSelectedStep(null)} className="flex-1 bg-primary h-12 rounded-xl font-bold">
                    Got it
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
