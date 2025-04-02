import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Computer and Information Sciences in Application Development",
      institution: "Varsity College",
      period: "2022 - 2025",
      description:
        "Comprehensive education in computer science with specialization in application development, covering programming languages, software engineering principles, and practical development skills.",
    },
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Education
        </h2>
        <div className="grid gap-6 md:grid-cols-1 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 border-none rounded-xl bg-gradient-to-br from-white to-blue-50/50"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-3 rounded-full bg-blue-100">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle className="text-xl">{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-blue-600">{edu.institution}</h4>
                  <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <p className="text-gray-700">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

