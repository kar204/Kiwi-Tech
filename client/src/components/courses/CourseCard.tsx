import { motion } from "framer-motion";
import { Link } from "wouter";
import { Course } from "@/lib/courses";
import { ArrowRight, Star, Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const Icon = course.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -6, 
        boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all"
    >
      <div className={`absolute inset-x-0 top-0 h-1.5 ${course.color}`} />
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-5 flex items-start justify-between gap-3">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`rounded-full p-3 ${course.color} flex-shrink-0 shadow-sm`}
          >
            <Icon className="h-6 w-6 text-white" />
          </motion.div>
          <Badge className="bg-[#8bc34a] hover:bg-[#7cb342] text-white border-none font-semibold px-3 py-1 rounded-full text-xs cursor-default shadow-sm">
            {course.level}
          </Badge>
        </div>

        <h3 className="mb-2 font-heading text-xl font-bold leading-tight text-slate-900 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        
        <p className="mb-6 text-sm text-slate-500 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-bold">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              <span>{(course.students / 1000).toFixed(1)}k+</span>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-baseline gap-2">
              <span className="text-[1.75rem] font-bold text-[#8bc34a]">₹{course.discountedPrice.toLocaleString()}</span>
              <span className="text-sm font-medium line-through text-slate-400">₹{course.originalPrice.toLocaleString()}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {course.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-full bg-[#f1f8e9] px-3 py-1 text-[11px] font-semibold text-[#689f38]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link href={`/course/${course.slug}`}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-5">
              <Button variant="outline" className="w-full bg-white text-slate-900 border-slate-900 hover:bg-slate-50 font-semibold h-11 rounded-full transition-colors">
                View Syllabus <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}