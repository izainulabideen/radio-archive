import { Link } from "react-router-dom";

function Common() {
  return (
    <div className="px-4 md:px-10 py-12">
      <h2 className="text-3xl font-spaceGrotesk mb-6">
        Run in your own Data Center
      </h2>
      <p className="text-sm leading-relaxed">
        To use our techology for your own recordings or to{" "}
        <Link
          to="https://s3.amazonaws.com/radio-archive.org.site/transcribe.html"
          className="underline"
        >
          make your own batch transcription jobs
        </Link>{" "}
        at a fraction of what you pay now, see the email contact information
        below or message us at{" "}
        <Link
          to="https://www.linkedin.com/company/radio-archive-org"
          className="underline"
        >
          https://www.linkedin.com/company/radio-archive-org
        </Link>
      </p>
    </div>
  );
}

export default Common;
