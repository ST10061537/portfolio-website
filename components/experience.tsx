import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Digital Artisan",
      company: "RLabs",
      period: "April 2021 - April 2022",
      description:
        "Gained hands-on experience in web design and UI/UX, creating user-focused and engaging digital solutions. Collaborated with clients to establish their online presence and supported peers through coaching, enhancing teamwork and professional growth.",
      technologies: ["Web Design", "UI/UX", "Client Collaboration", "Peer Coaching"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg shadow-blue-100/50 rounded-xl bg-gradient-to-r from-white to-blue-50/50"
            >
              <div className="grid md:grid-cols-[1fr_3fr]">
                <CardHeader className="md:border-r border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-full bg-blue-100">
                      <Briefcase className="w-5 h-5 text-blue-500" />
                    </div>
                    <CardTitle>{exp.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base font-medium text-blue-500">{exp.company}</CardDescription>
                  <CardDescription className="mt-2">{exp.period}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 md:pt-9">
                  <p className="mb-4 text-gray-700">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

