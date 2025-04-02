export default function About() {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            About Me
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 overflow-hidden rounded-full border-4 border-blue-100 shadow-xl shadow-blue-100/50 p-1">
                <img
                  src="/placeholder.svg?height=256&width=256"
                  alt="Aidan Lottering"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-lg text-gray-700">
                Passionate and driven IT enthusiast with a strong foundation in application development and an adaptable
                skill set. A recent graduate with a Bachelor's degree in Computer and Information Science from Varsity
                College, I am eager to leverage my expertise to make meaningful contributions in a software development
                role.
              </p>
              <p className="text-lg text-gray-700">
                Dedicated to continuous learning and excelling in innovative and dynamic environments.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  