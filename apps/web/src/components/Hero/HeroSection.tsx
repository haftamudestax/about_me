import { HeroIntro } from "./HeroIntro";
import { ProfileCard } from "./ProfileCard";
import { FunFactList } from "./FunFactList";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pb-16 pt-24"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
        <HeroIntro />
        <div className="flex flex-col items-center gap-6">
          <ProfileCard />
          <FunFactList />
        </div>
      </div>
    </section>
  );
}
