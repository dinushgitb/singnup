import SignupForm from "./SignupForm/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="mb-8 flex gap-4 justify-center">
        <Link href="/">Home</Link>
        <Link href="/signup-step-two">Signup Step Two</Link>
        <Link href="/signup-complete">Signup Complete</Link>
        <Link href="/NewSignupForm">Signup Step Three</Link>
      </nav>
      <SignupForm />
    </div>
  );
}
