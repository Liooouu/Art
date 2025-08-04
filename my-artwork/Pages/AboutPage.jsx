import { Briefcase, Code, User, Facebook, Instagram, Linkedin } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-gradient-to-tr from-indigo-400 to-sky-500">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-black">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate, Hardworking & Adaptive Web Developer</h3>
            <p className="text-muted-foreground">
              With over 2 years of experience in web development, I specialize in creating responsive,
              accessible, interactive and performant web applications using modern technologies.
            </p>
            <p className="text-muted-foreground">
              I am passionate about creating frontend and backend systems that benefit people globally. I'm also a heavy-duty
              developer who enjoys completing projects efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">Building modern web applications</p>
                </div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">Designing intuitive user interfaces</p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion using agile methodologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect With Me Section - bottom centered */}
        <div className="pt-16 flex flex-col items-center">
          <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/john.lio.apiado"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/jihnlee_yu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com/in/john-lio-apiado-ab2557373/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
