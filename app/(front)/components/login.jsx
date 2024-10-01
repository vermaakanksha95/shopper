import { signIn } from "@/auth";
import Image from "next/image";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <div className=" flex flex-1 justify-center items-center h-[85vh]">
        <button className="flex items-center px-6 py-3 bg-pink-50 shadow rounded-lg">
          <Image
            src="https://authjs.dev/img/providers/google.svg"
            width={30}
            height={30}
            alt="Google Logo"
            className="mr-3"
          />
          <span class="text-blue-500  text-2xl">Sign in with Google</span>
        </button>
      </div>
    </form>
  );
}
