import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleGoToCounter = () => {
    router.push("/counter");
  };

  return (
    <div>
      <h1>Hello Next.js!</h1>
      <button onClick={handleGoToCounter}>Go to counter</button>
    </div>
  );
}
