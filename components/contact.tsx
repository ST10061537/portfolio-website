"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Get In Touch
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="overflow-hidden text-center border-none shadow-lg shadow-blue-100/50 rounded-xl bg-white">
            <CardContent className="flex flex-col items-center p-6">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Email</h3>
              <p className="text-gray-600">aidansoftwaredeveloper@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden text-center border-none shadow-lg shadow-blue-100/50 rounded-xl bg-white">
            <CardContent className="flex flex-col items-center p-6">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                <Phone className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Phone</h3>
              <p className="text-gray-600">0813356058</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden text-center border-none shadow-lg shadow-blue-100/50 rounded-xl bg-white">
            <CardContent className="flex flex-col items-center p-6">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                <MapPin className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Location</h3>
              <p className="text-gray-600">Cape Town, South Africa</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 overflow-hidden border-none shadow-xl shadow-blue-100/50 rounded-xl bg-white">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                    className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  rows={6}
                  className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
              <Button
                type="submit"
                className="gap-2 bg-blue-400 hover:bg-blue-500 shadow-lg shadow-blue-200/50 transition-all duration-300"
              >
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

