import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseCard } from "@/components/courses/CourseCard";
import { courses } from "@/lib/courses";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";
import { useState } from "react";

export default function CoursesList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const levels = ["Beginner", "Intermediate", "Advanced", "Professional"];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = !selectedLevel || course.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              Explore All <span className="text-primary">Courses</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Choose from 10 industry-leading tech courses. Affordable pricing, 100% placement guarantee, and online-only live classes.
            </p>
            <div className="flex items-center gap-2">
              <Badge className="bg-primary/20 text-primary border-primary/30">10+ Courses</Badge>
              <Badge variant="outline" className="text-slate-300">₹12,000 - ₹22,000</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-white border-b border-slate-200 py-8 sticky top-16 z-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 h-4 w-4 text-slate-400 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedLevel === null ? "default" : "outline"}
                onClick={() => setSelectedLevel(null)}
                size="sm"
              >
                All Levels
              </Button>
              {levels.map(level => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  onClick={() => setSelectedLevel(level)}
                  size="sm"
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 md:px-6">
          {filteredCourses.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No courses found. Try adjusting your filters.</p>
            </div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 p-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl text-center border border-primary/20"
          >
            <h2 className="font-heading text-3xl font-bold mb-4">
              Still deciding? <span className="text-primary">Book a Free Demo</span>
            </h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Get personalized guidance from our experts about which course suits your career goals.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8 rounded-xl">
              Schedule Free Demo Class
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
