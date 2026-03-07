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
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all"
    >
      <div className={`absolute inset-x-0 top-0 h-2.5 ${course.color}`} />
      
      <div className="p-7 flex-1 flex flex-col">
        <div className="mb-6 flex items-start justify-between gap-3">
          <div className={`rounded-full p-3.5 ${course.color} flex-shrink-0 shadow-md`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-none font-semibold px-3 py-1 rounded-full text-xs">
            {course.level}
          </Badge>
        </div>

        <h3 className="mb-3 font-heading text-lg font-bold leading-tight text-slate-900 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        
        <p className="mb-6 text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-600 font-semibold">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-slate-500" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5 text-slate-500" />
              <span>{(course.students / 1000).toFixed(1)}k+</span>
            </div>
          </div>

          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-purple-600">₹{course.discountedPrice.toLocaleString()}</span>
                <span className="text-sm line-through text-slate-400">₹{course.originalPrice.toLocaleString()}</span>
              </div>
              <p className="text-xs font-semibold text-purple-600">
                {Math.round((1 - course.discountedPrice / course.originalPrice) * 100)}% OFF
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {course.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link href={`/course/${course.slug}`}>
            <Button className="w-full mt-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-bold h-11 rounded-lg">
              View Syllabus <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
