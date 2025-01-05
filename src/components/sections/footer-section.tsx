import { Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FooterSection = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">InstaRevive</h3>
            <p className="text-gray-400">Professional Instagram account recovery service</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => navigate('/how-it-works')} className="hover:text-orange-500">
                  How It Works
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>instarevived@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+370 623 64 141</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 InstaRevive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};