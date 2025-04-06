
import React, { useState } from 'react';
import Glitch from './Glitch';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section bg-cyber-black/70 relative">
      {/* Circuit board pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ff1e1e' fill-opacity='0.3'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <div className="border-2 border-cyber-red/30 inline-block px-4 py-1 mb-4">
            <h2 className="text-3xl md:text-4xl font-cyber font-bold uppercase tracking-wide">
              <Glitch text="Contact" color="red" />
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-sm">// INITIATE SECURE TRANSMISSION</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-cyber-black/60 border border-cyber-red/30 p-6 h-full">
              <h3 className="text-xl font-cyber mb-4 text-cyber-red flex items-center">
                <Mail size={18} className="mr-2" />
                <span>DIRECT LINK</span>
              </h3>
              
              <p className="mb-6 font-mono text-gray-400 text-sm">
                Need a skilled NetRunner for your next digital project? Establish a secure connection and let's discuss how I can help transform your vision into reality.
              </p>
              
              <div className="space-y-4 font-mono">
                <div className="flex items-start">
                  <div className="bg-cyber-red/10 p-2 mr-4 border border-cyber-red/30">
                    <Mail size={20} className="text-cyber-red" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400">Email</h4>
                    <p className="text-cyber-red">contact@blackwallrunner.net</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyber-red/10 p-2 mr-4 border border-cyber-red/30">
                    <MessageSquare size={20} className="text-cyber-red" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400">Discord</h4>
                    <p className="text-cyber-red">blackwall#7734</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-cyber-red/20">
                <h4 className="text-sm font-bold text-gray-400 mb-3 font-mono">RESPONSE TIME</h4>
                <div className="bg-cyber-darkblue/50 h-2 w-full rounded-sm overflow-hidden">
                  <div className="bg-cyber-red h-full w-4/5 animate-pulse"></div>
                </div>
                <p className="text-right text-xs text-gray-500 mt-1 font-mono">TYPICAL: &lt; 24 HOURS</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-cyber-black/60 border border-cyber-red/30 p-6 h-full relative retro-terminal">
              {/* Terminal decoration corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyber-red"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyber-red"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyber-red"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyber-red"></div>
              
              <h3 className="text-xl font-cyber mb-6 text-cyber-red flex items-center">
                <Send size={18} className="mr-2" />
                <span>TRANSMIT MESSAGE</span>
              </h3>
              
              {submitted ? (
                <div className="border border-green-500 bg-green-500/10 p-4 text-center font-mono">
                  <p className="text-green-400 mb-2">
                    <span className="block text-lg">Transmission successful!</span>
                  </p>
                  <p className="text-gray-400 text-sm">Your message has been received. Expect a response shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 text-sm text-gray-400 font-mono">CODE NAME:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-darkblue/50 border border-cyber-red/30 p-3 text-white font-mono focus:outline-none focus:border-cyber-red"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm text-gray-400 font-mono">NEURAL LINK (EMAIL):</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-darkblue/50 border border-cyber-red/30 p-3 text-white font-mono focus:outline-none focus:border-cyber-red"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1 text-sm text-gray-400 font-mono">MESSAGE PAYLOAD:</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-cyber-darkblue/50 border border-cyber-red/30 p-3 text-white font-mono focus:outline-none focus:border-cyber-red"
                    ></textarea>
                  </div>
                  
                  {error && (
                    <div className="border border-cyber-red bg-cyber-red/10 p-2 text-sm text-cyber-red font-mono">
                      {error}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cyber-button w-full flex items-center justify-center"
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
                  
                  <p className="text-xs text-gray-500 text-center mt-4 font-mono">
                    ALL TRANSMISSIONS ARE ENCRYPTED WITH BLACK ICE PROTOCOL
                  </p>
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
