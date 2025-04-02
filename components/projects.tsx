import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Huddle Up",
      description:
        "A team management application tailored for coaches and players to enhance communication, manage lineups, and organize events. Built using Android Studio, the app offers real-time messaging, scheduling, team management, and player assignments.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Android Studio", "Kotlin", "Firebase", "Real-time Messaging"],
      role: "Developer",
    },
    {
      title: "Back to Basics",
      description:
        "A fitness studio management platform built with Node.js and React, designed to simplify administrative tasks. It enables users to create, manage, and modify client and instructor profiles, track attendance, and efficiently handle class bookings.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "UI/UX Design", "User-Centered Design"],
      role: "Lead UI/UX Designer",
    },
    {
      title: "Fourge Bank",
      description:
        "A secure payment platform similar to PayPal, designed to provide users with seamless and reliable transaction capabilities. The app emphasizes robust security through advanced features like SSL certificates, SQL injection protection, and other safeguards.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Security Implementation", "Payment Processing", "User Authentication", "Database Security"],
      role: "Developer",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Featured Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/50 border-none rounded-xl bg-white h-full flex flex-col"
            >
              <div className="overflow-hidden h-48 rounded-t-xl">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-blue-600">{project.title}</CardTitle>
                  <Badge className="bg-blue-100 text-blue-600 border-none">{project.role}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4 text-gray-700">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pt-2 pb-6">
                <Button size="sm" className="gap-2 bg-blue-400 hover:bg-blue-500 shadow-md shadow-blue-100">
                  <ExternalLink className="w-4 h-4" /> View Project Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}