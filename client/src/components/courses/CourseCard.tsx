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
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:shadow-xl"
    >
      <div className={`absolute inset-x-0 top-0 h-1.5 ${course.color}`} />
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4 flex items-start justify-between">
          <div className={`rounded-xl p-3 ${course.color} bg-opacity-10 text-opacity-100`}>
            <Icon className={`h-6 w-6 text-foreground`} />
          </div>
          <Badge variant="secondary" className="font-medium">
            {course.level}
          </Badge>
        </div>

        <h3 className="mb-2 font-heading text-xl font-bold leading-tight group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        
        <p className="mb-6 text-sm text-muted-foreground line-clamp-2">
          {course.description}
        </p>

        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              <span>{(course.students / 1000).toFixed(1)}k+</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">₹{course.discountedPrice.toLocaleString()}</span>
              <span className="text-sm line-through text-slate-400">₹{course.originalPrice.toLocaleString()}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {course.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-md bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link href={`/course/${course.slug}`}>
            <Button className="w-full group-hover:bg-primary group-hover:text-white transition-colors" variant="outline">
              View Syllabus <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
