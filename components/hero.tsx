import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
      <div className="container px-4 mx-auto text-center relative z-10">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Hi, I'm <span className="font-extrabold">Aidan Lottering</span>
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600">
          Software Developer based in Cape Town, South Africa
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="gap-2 bg-blue-400 hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-200">
            View My Work <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="gap-2 border-blue-300 text-blue-500 hover:bg-blue-50 transition-all duration-300"
          >
            Download CV <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-300"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>

      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-100/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-100/30 to-transparent"></div>
    </section>
  )
}