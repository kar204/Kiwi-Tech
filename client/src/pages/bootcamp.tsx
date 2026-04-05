import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CalendarClock, Target, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { courses } from "@/lib/courses";
import { Link } from "wouter";

export default function Bootcamp() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const timeSlots = [
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
    "07:00 PM - 08:00 PM",
    "08:00 PM - 09:00 PM",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-[#111827] text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 opacity-50" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl opacity-50" />
          
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6"
            >
              <Zap className="h-4 w-4 text-yellow-400" />
              <span>Limited Time Offer</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight"
            >
              Experience The Future of Learning with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary">SkillNex Bootcamps</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
            >
              Not sure which course is right for you? Try our 1-hour interactive demo sessions for any course at just ₹999.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
            >
              <div className="text-sm text-slate-300 mb-1 font-medium uppercase tracking-wider">Special Trial Price</div>
              <div className="text-5xl font-bold text-white mb-2">₹999<span className="text-xl text-slate-400 font-normal">/session</span></div>
              <p className="text-sm text-slate-400">100% adjustable against full course fee if you enroll.</p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">Live Interaction</h3>
                <p className="text-slate-600">Interact directly with our expert trainers and get your doubts cleared on the spot.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto bg-[#f27405]/10 rounded-2xl flex items-center justify-center mb-4">
                  <CalendarClock className="h-8 w-8 text-[#f27405]" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">Flexible Timing</h3>
                <p className="text-slate-600">Choose from daily 1-hour slots available from 10 AM to 9 PM IST all week.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto bg-purple-600/10 rounded-2xl flex items-center justify-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">Risk-Free Trial</h3>
                <p className="text-slate-600">The ₹999 fee is fully adjusted against your main course fee when you enroll.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Book Your Bootcamp Session</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Select a course and your preferred time slot to schedule your interactive demo session.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Courses List */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-bold font-heading mb-4 px-1">1. Select a Course</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {courses.map((course) => {
                    const Icon = course.icon;
                    return (
                      <Card 
                        key={course.id} 
                        onClick={() => setSelectedCourse(course.id)}
                        className={`hover:border-primary/50 transition-colors cursor-pointer group overflow-hidden ${
                          selectedCourse === course.id ? "border-primary ring-1 ring-primary shadow-md bg-primary/5" : "border-slate-200"
                        }`}
                      >
                        <CardContent className="p-4 flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${course.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{course.title}</h4>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-1">{course.description}</p>
                          </div>
                          {selectedCourse === course.id && (
                            <div className="ml-auto flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white">
                              <ShieldCheck className="h-4 w-4" />
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Booking Form/Slots */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-heading mb-4 px-1">2. Select a Time Slot</h3>
                <Card className="sticky top-24 shadow-lg shadow-slate-200/50 border-slate-200">
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <label className="text-sm font-medium text-slate-700 mb-2 block">Available Daily Slots (IST)</label>
                      <div className="space-y-2 h-72 overflow-y-auto pr-2 custom-scrollbar">
                        {timeSlots.map((slot, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedSlot(slot)}
                            className={`w-full text-left px-4 py-3 rounded-xl border transition-colors flex items-center justify-between group ${
                              selectedSlot === slot 
                                ? "border-primary bg-primary/10 text-primary font-bold" 
                                : "border-slate-200 hover:border-primary hover:bg-primary/5 text-slate-700 font-medium"
                            }`}
                          >
                            <span>{slot}</span>
                            <span className={`w-2 h-2 rounded-full transition-opacity ${
                              selectedSlot === slot ? "bg-primary opacity-100" : "bg-green-500 opacity-0 group-hover:opacity-100"
                            }`} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 space-y-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-slate-600 font-medium">Session Fee</span>
                        <span className="text-2xl font-bold text-slate-900">₹999</span>
                      </div>
                      
                      <Button 
                        disabled={!selectedCourse || !selectedSlot}
                        className="w-full h-12 text-base font-bold bg-[#f27405] hover:bg-[#d96604] shadow-lg shadow-[#f27405]/20 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {!selectedCourse ? "Select Course" : !selectedSlot ? "Select Time Slot" : "Proceed to Payment"}
                      </Button>
                      <p className="text-xs text-center text-slate-500">
                        Secure checkout. Fee adjustable against full course enrollment.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}