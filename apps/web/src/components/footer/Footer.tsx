import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaShareAlt,
  FaGift,
} from "react-icons/fa";

export default function Footer() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "About Me",
          text: "Check out my About Me page!",
          url: window.location.href,
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Page link copied to clipboard!");
    }
  };

  const handleRefer = async () => {
    const referralUrl = window.location.href;
    const subject = encodeURIComponent("Check out Haftamu's About Me page");
    const body = encodeURIComponent(`Thought you'd like this: ${referralUrl}`);

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Refer a friend",
          text: "Thought you'd like this page",
          url: referralUrl,
        });
        return;
      } catch (err) {
        console.error(err);
      }
    }

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="bg-linear-to-br from-slate-950 via-slate-900 teal-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:divide-x md:divide-slate-700">
          <div className="md:pr-6">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
              Follow Me
            </h3>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/haftamudesta/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/haftamudesta"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://web.facebook.com/haftamudesta"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="md:px-6">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
              Share Page
            </h3>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm hover:bg-blue-700 transition"
            >
              <FaShareAlt />
              Share This Page
            </button>
          </div>

          <div className="md:px-6">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
              Refer Me
            </h3>
            <button
              onClick={handleRefer}
              className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm hover:bg-purple-700 transition"
            >
              <FaGift />
              Give Referrals
            </button>
          </div>

          <div className="md:px-6">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
              About
            </h3>
            <p className="text-sm font-semibold text-emerald-400">
              Passionate Full-Stack Developer
            </p>
          </div>

          <div className="md:pl-6 md:ml-auto">
            <p className="text-sm text-sky-400">
              © {new Date().getFullYear()} Haftamu Desta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
