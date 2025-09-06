import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Zap, Database, Globe } from "lucide-react"
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: ElixirPhoenixStarter,
})

function ElixirPhoenixStarter() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">Phoenix + React</span>
          </div>
        </div>
      </header>

      <section className="py-24 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <Badge variant="secondary" className="mb-6">
            Elixir + Phoenix LiveView + Vite + React
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">Real-Time Web Applications Made Simple</h1>
          <p className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed">
            Combine Elixir's reliability with React's modern frontend experience. Build scalable, real-time applications
            with ease.
          </p>
          <Button size="lg" className="text-lg px-8">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why This Stack?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time by Default</h3>
              <p className="text-muted-foreground">
                Phoenix LiveView provides instant updates without writing JavaScript
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fault-Tolerant</h3>
              <p className="text-muted-foreground">Elixir's actor model keeps your application resilient under load</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Frontend</h3>
              <p className="text-muted-foreground">React components with Vite's lightning-fast development</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Great DX</h3>
              <p className="text-muted-foreground">Productive development with excellent tooling and debugging</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">&copy; 2024 Phoenix + React Starter. Built for developers.</p>
        </div>
      </footer>
    </div>
  )
}