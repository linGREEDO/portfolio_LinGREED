import React, { useState } from "react";
import Glitch from "./Glitch";
import { Mail, Send } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsSubmitting(true);
    setError("");

    // Access environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_RECIPIENT;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("Missing environment variables. Please check your .env file.");
      setIsSubmitting(false);
      return;
    }

    // Data for the email sent to you
    const emailData = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
    };

    // Send the user's message to you
    emailjs.send(serviceId, templateId, emailData, publicKey).then(
      () => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      },
      (err) => {
        setIsSubmitting(false);
        setError("Failed to send your message. Please try again later.");
        console.error("Email sending error:", err);
      }
    );
  };

  return (
    <section id="contact" className="section bg-cyber-black/70 relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ff1e1e' fill-opacity='0.3'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <div className="border-2 border-cyber-yellow/30 inline-block px-4 py-1 mb-4">
            <h2 className="text-3xl md:text-4xl font-cyber font-bold uppercase tracking-wide">
              <Glitch text="Contact" color="yellow" />
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-sm">
            // INITIATE SECURE TRANSMISSION
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-cyber-black/60 border border-cyber-yellow/30 p-6 h-full">
              <h3 className="text-xl font-cyber mb-4 text-cyber-yellow flex items-center">
                <Mail size={18} className="mr-2" />
                <span>DIRECT LINK</span>
              </h3>

              <p className="mb-6 font-mono text-gray-400 text-sm">
                Need a skilled NetRunner for your next digital project?
                Establish a secure connection and let's discuss how I can help
                transform your vision into reality.
              </p>

              <div className="space-y-4 font-mono relative z-10">
                <div className="flex items-center">
                  <div className=" p-2 mr-4 border border-cyber-yellow/30">
                    <Mail size={20} className="text-cyber-red" />
                  </div>
                  <div>
                    <a
                      href="mailto:dyarialitaher03@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyber-gray hover:underline cursor-pointer"
                    >
                      dyarialitaher03@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className=" p-2 mr-4 border border-cyber-yellow/30">
                    <svg
                      className="h-5 w-5"
                      fill="#FF1E1E"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="https://discord.com/users/lin_greed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyber-gray hover:underline"
                    >
                      lin_greed
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className=" p-2 mr-4 border border-cyber-yellow/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="#FF1E1E"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/dyari-ali-tahir-b005352b5/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyber-gray hover:underline"
                    >
                      Dyari Ali Tahir
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className=" p-2 mr-4 border border-cyber-yellow/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="#FF1E1E"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="https://github.com/linGREEDO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyber-gray hover:underline"
                    >
                      linGREEDO
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-cyber-yellow/20">
                <h4 className="text-sm font-bold text-gray-400 mb-3 font-mono">
                  RESPONSE TIME
                </h4>
                <div className="bg-cyber-darkblue/50 h-2 w-full rounded-sm overflow-hidden">
                  <div className="bg-cyber-yellow h-full w-4/5 animate-pulse"></div>
                </div>
                <p className="text-right text-xs text-gray-500 mt-1 font-mono">
                  TYPICAL: &lt; 24 HOURS
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-cyber-black/60 border border-cyber-yellow/30 p-6 h-full relative retro-terminal">
              <h3 className="text-xl font-cyber mb-6 text-cyber-yellow flex items-center">
                <Send size={18} className="mr-2" />
                <span>TRANSMIT MESSAGE</span>
              </h3>

              {submitted ? (
                <div className="border border-green-500 bg-green-500/10 p-4 text-center font-mono">
                  <p className="text-green-400 mb-2">
                    <span className="block text-lg">
                      Transmission successful!
                    </span>
                  </p>
                  <p className="text-gray-400 text-sm">
                    Your message has been received. Expect a response shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-1 text-sm text-gray-400 font-mono"
                    >
                      CODE NAME:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-darkblue/50 border border-cyber-yellow/30 p-3 text-white font-mono focus:outline-none focus:border-cyber-yellow"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 text-sm text-gray-400 font-mono"
                    >
                      NEURAL LINK (EMAIL):
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-darkblue/50 border border-cyber-yellow/30 p-3 text-white font-mono focus:outline-none focus:border-cyber-yellow"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-1 text-sm text-gray-400 font-mono"
                    >
                      MESSAGE PAYLOAD:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-cyber-darkblue/50 border border-cyber-yellow/30 p-3 text-white font-mono focus:outline-none focus:border-cyber-yellow"
                    ></textarea>
                  </div>

                  {error && (
                    <div className="border border-cyber-yellow bg-cyber-yellow/10 p-2 text-sm text-cyber-yellow font-mono">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cyber-button w-full flex items-center justify-center border border-cyber-yellow/30 text-cyber-yellow font-mono py-2 px-4 rounded hover:bg-cyber-yellow/90 transition duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-blink mr-2">■</span>
                        <span>TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        <span>SEND TRANSMISSION</span>
                      </>
                    )}
                  </button>

                  {submitted && (
                    <p className="text-green-400 text-center mt-4 font-mono">
                      Transmission successful! Your message has been sent.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
