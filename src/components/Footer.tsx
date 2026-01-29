import { Instagram, Facebook, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://page.gensparksite.com/v1/base64_upload/37f33f826ae0c7aa3fa8e396e53a1f3c"
              alt="Absolute Hack Logo"
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="font-display font-bold">FTC Team 28028</p>
              <p className="text-sm opacity-80">ABSOLUTE HACK</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ftc.absolutehack.28028/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/absolutehack10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="mailto:absolutehack10@gmail.com"
              className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Team 28028 Absolute Hack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
