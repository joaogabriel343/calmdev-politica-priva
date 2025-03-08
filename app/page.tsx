import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
        <div className="mb-8 w-64 sm:w-80">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/calmdev-logotipo-removebg-preview-DYYFdJ3F2LLzFIriZlgBeu8wWiyi1B.png"
            alt="Logo CalmDev"
            width={400}
            height={100}
            priority
            className="w-full"
          />
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Documentação Legal</h1>
        <p className="mb-10 max-w-2xl text-xl text-muted-foreground">
          Acesse os Termos de Uso e a Política de Privacidade da CalmDev para entender como operamos e protegemos seus
          dados.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="text-lg">
            <Link href="/terms">Termos de Uso</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg">
            <Link href="/privacy">Política de Privacidade</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

