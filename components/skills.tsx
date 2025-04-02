import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Terminal, Smartphone, Palette, FileCode, GitBranch, Layers } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 mb-4 text-blue-400" />,
      skills: ["Java", "C#", "JavaScript", "HTML", "CSS", "SQL", "Kotlin"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-6 h-6 mb-4 text-blue-400" />,
      skills: [".NET Framework", "React", "Node.js"],
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6 mb-4 text-blue-400" />,
      skills: ["SQL", "Firebase", "Azure"],
    },
    {
      title: "Development Tools",
      icon: <Terminal className="w-6 h-6 mb-4 text-blue-400" />,
      skills: ["Git", "Android Studio", "Visual Studio"],
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6 mb-4 text-blue-400" />,
      skills: ["UI/UX Design", "Responsive Design", "User-Centered Design"],
    },
    {
      title: "Methodologies",
      icon: <GitBranch className="w-6 h-6 mb-4 text-blue-400" />,
      skills: ["Agile", "Scrum", "Collaborative Development"],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6 mb-4 text-blue-400" />,
      skills: ["Android Development", "Kotlin", "Mobile UI Design"],
    },
    {
      title: "Application Development",
      icon: <FileCode className="w-6 h-6 mb-4 text-blue-400" />,
      skills: ["Full-Stack Development", "Web Applications", "Mobile Applications"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Skills & Expertise
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 border-none bg-white/80 backdrop-blur-sm rounded-xl"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center p-3 bg-blue-50 rounded-full w-16 h-16 mx-auto mb-4">
                  {category.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-800">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 text-sm bg-blue-50 rounded-full text-blue-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}