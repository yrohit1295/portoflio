import cvPDF from "@/assets/rohit-cv.pdf";
import {trackEvent} from "@/lib/mixpanel.js";

function DownloadCV() {
    return (
        <a
            href={cvPDF}
            download="Rohit-Yadav-CV.pdf"
            className="text-sm bg-green-400 text-black px-4 py-1 rounded-full font-medium hover:bg-green-300 transition whitespace-nowrap"
            onClick={() => trackEvent("CV Download")}
        >
            Download CV
        </a>
    );
}

export default DownloadCV;