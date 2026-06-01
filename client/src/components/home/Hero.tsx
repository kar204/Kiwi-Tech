import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Users, Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import heroImage from "@assets/generated_images/indian_genz_students_learning_coding.png";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center mb-16">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit rounded-full border-[#8bc34a]/30 bg-[#8bc34a]/10 px-4 py-1 text-[#8bc34a] font-medium">
                🚀 KiwiTech - India's #1 Trusted EdTech
              </Badge>
              <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl text-foreground">
                Master Tech Skills, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#aed581]">Get Placed in Top MNCs.</span>
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                Learn from expert instructors. 10 industry-leading courses from ₹19,999. 
                100% placement guarantee, hands-on training, and real-time projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 max-w-sm">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="h-12 rounded-xl border-slate-200 bg-white shadow-sm pr-32"
                />
                <Button className="absolute right-1 top-1 h-10 rounded-lg bg-[#8bc34a] hover:bg-[#7cb342] px-6 text-white font-bold">
                  Join Now
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 sm:mt-0 sm:self-center">
                *Free career guide included
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Hands-on Training</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>1:1 Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Job Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Real-time Projects</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto lg:ml-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                src={heroImage}
                alt="Students learning" 
                className="object-cover w-full h-auto max-w-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Floating Cards */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur shadow-lg p-4 rounded-xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">150+ Students</p>
                    <p className="text-xs text-slate-500">Already learning with us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats and Placement Info Boxes */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 text-center md:text-left flex flex-col sm:flex-row items-center justify-between">
            <div className="text-lg">
              <span className="font-bold text-slate-800">From Learning to Earning -</span>
            </div>
            <span className="text-[#8bc34a] font-bold text-lg mt-2 sm:mt-0">Your journey starts here!</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white">
            <div className="p-6 text-center hover:bg-slate-50 transition-colors">
              <div className="text-sm font-bold text-slate-700 mb-2 flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-[#8bc34a]" /> Freshers To IT
              </div>
              <p className="text-xs text-slate-500 font-medium">Entry level IT candidate</p>
            </div>
            <div className="p-6 text-center hover:bg-slate-50 transition-colors">
              <div className="text-sm font-bold text-slate-700 mb-2 flex items-center justify-center gap-2">
                <Briefcase className="w-5 h-5 text-[#8bc34a]" /> NON-IT To IT
              </div>
              <p className="text-xs text-slate-500 font-medium">IT career switch</p>
            </div>
            <div className="p-6 text-center hover:bg-slate-50 transition-colors">
              <div className="text-sm font-bold text-slate-700 mb-2 flex items-center justify-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#8bc34a]" /> Career Gap
              </div>
              <p className="text-xs text-slate-500 font-medium">Career restart</p>
            </div>
            <div className="p-6 text-center hover:bg-slate-50 transition-colors">
              <div className="text-sm font-bold text-slate-700 mb-2 flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#8bc34a]" /> Less Than 60%
              </div>
              <p className="text-xs text-slate-500 font-medium">Non IT professional with Interview prep</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
