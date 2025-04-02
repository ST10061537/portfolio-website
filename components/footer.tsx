import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white">Aidan Lottering</h3>
            <p className="mt-2 text-blue-100">Software Developer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/aidanlottering"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/aidanlottering"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:aidansoftwaredeveloper@gmail.com"
              className="transition-colors hover:text-blue-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-blue-500/30">
          <p>&copy; {currentYear} Aidan Lottering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

