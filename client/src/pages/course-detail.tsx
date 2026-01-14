import { useRoute } from "wouter";
import { courses } from "@/lib/courses";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Calendar, Download, Share2, PlayCircle, Users, Trophy } from "lucide-react";
import stockImage from "@assets/stock_images/technology_corporate_313834e7.jpg";

export default function CourseDetail() {
  const [, params] = useRoute("/course/:slug");
  const slug = params?.slug;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return <NotFound />;
  }

  const Icon = course.icon;

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
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-primary text-white border-none">
                    {course.level} Level
                  </Badge>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <span>★</span>
                    <span className="font-bold">{course.rating}</span>
                    <span className="text-slate-400 text-sm ml-1">({course.students} students)</span>
                  </div>
                </div>

                <h1 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight text-white">
                  {course.title}
                </h1>
                
                <p className="text-lg lg:text-xl text-slate-300 max-w-3xl">
                  {course.description} Get job-ready with our comprehensive curriculum designed by industry experts.
                </p>

                <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-300 pt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Next Batch: Starts Monday</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Certification Included</span>
                  </div>
                </div>
              </div>

              {/* Enrollment Card (Floating on Desktop) */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 text-slate-900 lg:mt-8">
                  <div className="aspect-video bg-slate-100 rounded-lg mb-6 flex items-center justify-center relative group cursor-pointer overflow-hidden">
                    <div className={`absolute inset-0 ${course.color} opacity-10`} />
                    <PlayCircle className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
                    <span className="absolute bottom-4 text-sm font-medium text-slate-500">Watch Course Preview</span>
                  </div>
                  
                  <div className="space-y-4">
                     <div className="flex items-end gap-2">
                       <span className="text-3xl font-bold text-slate-900">Request Pricing</span>
                     </div>
                     
                     <Button size="lg" className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
                       Enroll Now
                     </Button>
                     <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                       <Download className="mr-2 h-4 w-4" /> Download Syllabus
                     </Button>
                  </div>

                  <div className="mt-6 space-y-3 pt-6 border-t border-slate-100">
                    <p className="font-semibold text-sm">This course includes:</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Live Interactive Classes</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Real-world Projects</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Career Guidance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Syllabus Section */}
        <section className="py-20 container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-heading text-2xl font-bold mb-6">What you'll learn</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.modules.map((module, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-white shadow-sm">
                      <div className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${course.color} text-white text-xs font-bold`}>
                        {i + 1}
                      </div>
                      <span className="font-medium text-slate-700">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold mb-6">Technologies Covered</h2>
                <div className="flex flex-wrap gap-3">
                  {course.tags.map(tag => (
                     <span key={tag} className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium shadow-sm">
                       {tag}
                     </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white rounded-xl p-6 border shadow-sm">
                 <h3 className="font-heading text-lg font-bold mb-4">Training Features</h3>
                 <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Expert Trainers</h4>
                        <p className="text-sm text-slate-500">Learn from industry veterans with 10+ years exp.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                        <Trophy className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Certification</h4>
                        <p className="text-sm text-slate-500">Get recognized industry certification upon completion.</p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
