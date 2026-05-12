import React from "react";
import {
  Star,
  BarChart3,
  Clock3,
  ArrowRight,
  Flame,
  Lightbulb,
  BadgeCheck,
  Users,
  MonitorSmartphone,
  BriefcaseBusiness,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <BadgeCheck className="w-10 h-10 text-white" />,
    title: "Industry Certification",
    description:
      "Get recognized certificates that boost your career prospects.",
  },
  {
    id: 2,
    icon: <Users className="w-10 h-10 text-white" />,
    title: "Expert Trainers",
    description:
      "Learn from experienced professionals with industry expertise.",
  },
  {
    id: 3,
    icon: <MonitorSmartphone className="w-10 h-10 text-white" />,
    title: "Hands-on Training",
    description:
      "Practical projects and real-world applications for better learning.",
  },
  {
    id: 4,
    icon: <BriefcaseBusiness className="w-10 h-10 text-white" />,
    title: "Placement Support",
    description:
      "Career guidance and job placement assistance for students.",
  },
];

const courses = [
  {
    id: 1,
    title: "Video Editing",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1200&auto=format&fit=crop",
    description:
      "Master Video Editing with expert guidance and hands-on training.",
    level: "Non Matric",
    duration: "1 Month",
    price: "₹2,000",
  },
  {
    id: 2,
    title: "Advance Diploma in Web Designing",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    description:
      "Master Advance Diploma in Web Designing with expert guidance.",
    level: "Intermediate",
    duration: "12 Months",
    price: "₹900",
  },
  {
    id: 3,
    title: "Graphic Designing",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    description:
      "Master Graphic Designing with expert guidance and hands-on training.",
    level: "Matric",
    duration: "6 Months",
    price: "₹1,000",
  },
  {
    id: 4,
    title: "Programming in C",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    description:
      "Master Programming in C with expert guidance and hands-on training.",
    level: "Matric",
    duration: "1 Month",
    price: "₹1,500",
  },
  {
    id: 5,
    title: "UI/UX Designing",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
    description:
      "Learn modern UI/UX design principles with practical projects.",
    level: "Intermediate",
    duration: "4 Months",
    price: "₹2,500",
  },
  {
    id: 6,
    title: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    description:
      "Master SEO, Social Media Marketing, and Google Ads professionally.",
    level: "Beginner",
    duration: "3 Months",
    price: "₹2,200",
  },
];

export default function ProfessionalCourses() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3">
            <Flame className="text-yellow-500 w-10 h-10 fill-yellow-500" />

            <h1 className="text-4xl md:text-5xl font-bold text-[#0b3b7a]">
              Professional Courses
            </h1>
          </div>

          <div className="w-28 h-1 bg-yellow-400 mx-auto rounded-full mt-5"></div>
        </div>

        {/* Info Box */}
        <div className="bg-[#f7f5ef] border-l-4 border-yellow-400 shadow-lg rounded-2xl p-8 mb-16">
          <p className="text-gray-700 text-lg leading-9">
            <Lightbulb className="inline w-5 h-5 text-yellow-500 mr-2" />

            <span className="font-bold text-gray-800">
              Transform Your Career with OMCTI!
            </span>{" "}
            Explore our comprehensive computer education programs designed to
            equip you with industry-relevant skills. From basic computer
            literacy to advanced programming and professional certifications, we
            offer courses that match your career goals.
          </p>
        </div>

       
        {/* COURSE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover"
                />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow">
                  <Flame className="w-4 h-4 fill-white" />
                  Popular
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}

                  <span className="text-gray-500 text-sm ml-2">(4.5)</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
                  {course.title}
                </h2>

                {/* Description */}
                <p className="text-gray-500 leading-8 mb-6">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-5 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-900" />
                    {course.level}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="w-4 h-4 text-blue-900" />
                    {course.duration}
                  </div>
                </div>

                <hr className="mb-6" />

                {/* Bottom */}
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-[#8f8a2f]">
                    {course.price}
                  </h3>

                  <button className="bg-blue-900 hover:bg-blue-800 transition text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Top Button */}
        <button className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition">
          <ArrowRight className="rotate-[-90deg] text-blue-900" />
        </button>
      </div>
    </div>
  );
}
