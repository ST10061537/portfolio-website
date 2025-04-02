import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users } from "lucide-react"

export default function SoftSkills() {
  const softSkills = [
    {
      title: "Communication",
      icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
      description:
        "I have excellent interpersonal skills, allowing me to work effectively with diverse teams and stakeholders. I actively listen to understand client needs, ensuring solutions are user-focused. By fostering a collaborative and positive environment, I promote teamwork and clear communication. I handle challenges with a constructive approach, resolve conflicts, and align goals, which helps me build strong relationships and achieve project success.",
    },
    {
      title: "Leadership",
      icon: <Users className="w-6 h-6 text-blue-500" />,
      description:
        "My leadership skills were enhanced through my experience in peer coaching at RLabs. Guiding and mentoring others allowed me to build confidence in supporting teammates, fostering collaboration, and promoting growth within a team environment. I continue to apply these abilities by encouraging teamwork, delegating tasks effectively, and maintaining a positive and productive atmosphere to achieve shared goals.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Soft Skills
        </h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {softSkills.map((skill, index) => (
            <Card
              key={index}
              className="border-none shadow-lg shadow-blue-100/50 rounded-xl bg-gradient-to-r from-white to-blue-50/50"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-full bg-blue-100">{skill.icon}</div>
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}