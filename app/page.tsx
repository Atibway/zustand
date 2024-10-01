import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/e-commerce/Footer"

const projects = [
  {
    title: "Example One",
    description: "Introduction To zustand",
    link: "/example1"
  },
  {
    title: "Shopping Cart",
    description: "Explore advanced concepts in Zustand like Zustand Middleware and many others",
    link: "/home"
  }
]

export default function WelcomePage() {
  return (
    <>
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-6 md:py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">PROJECTS UNDER ZUSTAND</h1>
        <p className="text-xl text-muted-foreground">Exploring the the best state Management library</p>
      </header>

      <main className="container mx-auto px-4 flex items-center justify-center">
  <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:ml-[30rem]">
    {projects.map((project, index) => (
      <Card key={index} className="flex flex-col">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href={project.link}>View Project</Link>
          </Button>
        </CardFooter>
      </Card>
    ))}
  </section>
</main>

    </div>
     <Footer/>

    </>
  )
}