import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaShareAlt,
  FaExternalLinkAlt,
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

  return (
    <footer className="bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Me</h3>

            <a
              href="https://portfolio-haftamudesta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-slate-700 bg-slate-800/40 p-5 hover:border-blue-500 hover:bg-slate-800 transition"
            >
              <h4 className="flex items-center gap-2 text-lg font-medium">
                My Portfolio
                <FaExternalLinkAlt className="text-sm group-hover:text-blue-400" />
              </h4>

              <p className="mt-2 text-sm text-slate-300">
                Explore my Portfolio to Learn more About Me, my Experience,
                Projects, Technical Skills, and Professional Journey.
              </p>
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>

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
            <h3 className="text-xl font-semibold mb-4">Share</h3>

            <button
              onClick={handleShare}
              className="flex items-center gap-3 rounded-lg bg-blue-600 px-5 py-3 hover:bg-blue-700 transition"
            >
              <FaShareAlt />
              Share This Page
            </button>
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
