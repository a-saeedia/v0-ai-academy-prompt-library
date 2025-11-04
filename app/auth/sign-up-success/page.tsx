import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail } from "lucide-react"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 bg-gradient-to-br from-[#afd700]/10 via-background to-[#afd700]/5">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-[#afd700] mb-2">
            <a
              href="https://tethera.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8fb600] transition-colors"
            >
              Tethera
            </a>
          </h1>
          <p className="text-lg text-muted-foreground font-semibold">AI Academy</p>
        </div>

        <Card className="border-[#afd700]/20">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#afd700]/10">
              <Mail className="h-6 w-6 text-[#afd700]" />
            </div>
            <CardTitle className="text-2xl">Check Your Email</CardTitle>
            <CardDescription>
              We&apos;ve sent you a confirmation link. Please check your email to verify your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button asChild className="bg-[#afd700] hover:bg-[#8fb600] text-black">
              <Link href="/auth/login">Back to Login</Link>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Made by{" "}
          <a
            href="https://a-corp.space"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#afd700] hover:text-[#8fb600] font-semibold underline-offset-4 hover:underline"
          >
            A corp
          </a>
        </div>
      </div>
    </div>
  )
}
