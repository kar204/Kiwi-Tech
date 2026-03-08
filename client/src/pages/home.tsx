import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { PlacementMarquee } from "@/components/home/PlacementMarquee";
import { PlacementsSection } from "@/components/home/PlacementsSection";
import { CourseCard } from "@/components/courses/CourseCard";
import { courses } from "@/lib/courses";
import { ArrowRight, Trophy, Users, Globe2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <PlacementMarquee />
        <PlacementsSection />

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">25k+</h3>
                <p className="text-sm text-slate-500 font-medium">Active Learners</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">12k+</h3>
                <p className="text-sm text-slate-500 font-medium">Placements</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <Globe2 className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">500+</h3>
                <p className="text-sm text-slate-500 font-medium">Hiring Partners</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">50+</h3>
                <p className="text-sm text-slate-500 font-medium">Courses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div className="space-y-2">
                <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl text-slate-900">
                  Explore Our <span className="text-primary">Top Courses</span>
                </h2>
                <p className="text-slate-500 text-lg max-w-2xl">
                  Industry-relevant curriculum designed by experts to help you land your dream job.
                </p>
              </div>
              <Button variant="outline" className="hidden md:flex">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center md:hidden">
              <Button variant="outline">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 relative overflow-hidden">
           <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
           <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl" />
           
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl text-white mb-6">
              Ready to Kickstart Your Career?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with GuruCool. Get mentorship, hands-on projects, and placement support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 text-lg h-12">
                Get Free Counseling
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white px-8 text-lg h-12">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
