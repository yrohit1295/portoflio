import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiHackerrank } from 'react-icons/si';
import {trackEvent} from "@/lib/mixpanel.js";

function Footer() {
    return (
        <footer className="bg-[#0f0f0f] text-white py-10 px-4 border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-end min-h-[100px] gap-6 text-sm">

                {/* Left: Address + Social Icons */}
                <div className="space-y-4 text-center md:text-left">
                    {/* Address */}
                    <div className="text-gray-400 space-y-1 text-sm">
                        <div>Dundalk</div>
                        <div>County Louth, Ireland</div>
                        <div>📞 +353 89 988 9055</div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start space-x-6 text-lg pt-2 text-gray-400">
                        <a
                            href="https://www.linkedin.com/in/yrohit1295"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-400 hover:scale-110 transform transition duration-200"
                            aria-label="LinkedIn"
                            onClick={() => trackEvent("Social Link Click", { platform: "LinkedIn" })}
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/yrohit1295"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-400 hover:scale-110 transform transition duration-200"
                            aria-label="GitHub"
                            onClick={() => trackEvent("Social Link Click", { platform: "GitHub" })}
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:yrohit12@outlook.com"
                            className="hover:text-green-400 hover:scale-110 transform transition duration-200"
                            aria-label="Email"
                            onClick={() => trackEvent("Social Link Click", { platform: "Email" })}
                        >
                            <FaEnvelope />
                        </a>
                        <a
                            href="https://www.hackerrank.com/profile/yrohit121"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-400 hover:scale-110 transform transition duration-200"
                            aria-label="HackerRank"
                            onClick={() => trackEvent("Social Link Click", { platform: "HackerRank" })}
                        >
                            <SiHackerrank />
                        </a>

                    </div>
                </div>

                {/* Right: Bottom-aligned copyright */}
                <div className="flex justify-center md:justify-end items-end text-gray-400 text-xs h-full">
                    <span>© {new Date().getFullYear()} Rohit Yadav</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
