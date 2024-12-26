
import Link from "next/link";

export default function Home() {
  return (
    <div>
      hi there
      <Link className="text-md border m-2" href="/signin">Sign In</Link>
      <Link className="text-md border m-2" href="/blogs">Blogs</Link>
      <Link className="text-md border m-2" href="/signup">Sign Up</Link>
    </div>
  );
}
