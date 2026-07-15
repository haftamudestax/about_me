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
    <footer className="bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>

            <div className="flex gap-6 text-3xl">
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

          <div>
            <h3 className="text-xl font-semibold mb-4">Refer Me</h3>

            <button
              onClick={handleRefer}
              className="flex items-center gap-3 rounded-lg bg-purple-600 px-5 py-3 hover:bg-purple-700 transition"
            >
              <FaGift />
              Give Referrals
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Share Page</h3>

            <button
              onClick={handleShare}
              className="flex items-center gap-3 rounded-lg bg-blue-600 px-5 py-3 hover:bg-blue-700 transition"
            >
              <FaShareAlt />
              Share This Page
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <p className="text-emerald-400 font-bold">
              Passionate Full-Stack Developer
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Haftamu Desta. All rights reserved.
          </p>

          <p className="text-sm md:text-xl font-bold text-slate-400">
            Built with Xcelsz Tech Stacks
          </p>
        </div>
      </div>
    </footer>
  );
}
