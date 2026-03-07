import { Rocket, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-gradient-brand flex h-8 w-8 items-center justify-center rounded-lg text-white">
                <Rocket className="h-4 w-4" />
              </div>
              <span className="font-heading text-xl font-bold text-white">
                Tech<span className="text-primary">Hub</span>
              </span>
            </div>
            <p className="text-sm text-slate-400">
              India's most trusted online tech training platform. Master in-demand skills with 100% placement support. Affordable courses from ₹12,000.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/"><a className="hover:text-primary">Home</a></Link></li>
              <li><Link href="/courses"><a className="hover:text-primary">All Courses</a></Link></li>
              <li><a href="#placements" className="hover:text-primary">Placements</a></li>
              <li><a href="#about" className="hover:text-primary">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">Popular Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/course/data-science-ai"><a className="hover:text-primary">Data Science with AI</a></Link></li>
              <li><Link href="/course/java-full-stack"><a className="hover:text-primary">Java Full Stack</a></Link></li>
              <li><Link href="/course/python-full-stack"><a className="hover:text-primary">Python Full Stack</a></Link></li>
              <li><Link href="/course/aws-cloud"><a className="hover:text-primary">AWS Cloud Computing</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@techhub.in</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Tech Park, Bangalore, India</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-primary hover:text-white transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-primary hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-primary hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-primary hover:text-white transition-colors"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} TechHub. All rights reserved. Made with ❤️ in India.
        </div>
      </div>
    </footer>
  );
}
