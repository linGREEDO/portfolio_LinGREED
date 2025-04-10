import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cyber: {
					black: '#0D0D0D',
					darkblue: '#101420',
					blue: '#ea384c',
					yellow: '#FFD500',
					pink: '#FF007F',
					red: '#FF1E1E',
					crimson: '#8B0000',
					neonred: '#FF3D3D',
					green: '#00FF66',
					purple: '#9933FF',
					orange: '#FF6E27',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				cyber: ['Rajdhani', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				tech: ['Share Tech Mono', 'monospace'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				glitch: {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' }
				},
				'text-glitch': {
					'0%': { opacity: '1' },
					'2%': { opacity: '0.8', transform: 'translate(-3px, 0)' },
					'4%': { opacity: '1', transform: 'translate(0)' },
					'19%': { opacity: '1', transform: 'translate(0)' },
					'20%': { opacity: '0.7', transform: 'translate(10px, 0)', 'text-shadow': '-1px 0 yellow' },
					'21%': { opacity: '1', transform: 'translate(0)' },
					'49%': { opacity: '1', transform: 'translate(0)' },
					'50%': { opacity: '0.5', transform: 'translate(-10px, 0)', 'text-shadow': '1px 0 blue' },
					'52%': { opacity: '1', transform: 'translate(0)' },
					'69%': { opacity: '1', transform: 'translate(0)' },
					'70%': { opacity: '0.8', transform: 'translate(5px, 0)', 'text-shadow': '-1px 0 green' },
					'72%': { opacity: '1', transform: 'translate(0)' },
					'100%': { opacity: '1', transform: 'translate(0)' }
				},
				scanline: {
					'0%': { transform: 'translateY(0%)' },
					'100%': { transform: 'translateY(100%)' }
				},
				blink: {
					'0%, 49%': { opacity: '1' },
					'50%, 100%': { opacity: '0' }
				},
				float: {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'cyber-pulse': {
					'0%, 100%': { boxShadow: '0 0 15px rgba(255, 30, 30, 0.5), 0 0 30px rgba(255, 30, 30, 0.3), 0 0 45px rgba(255, 30, 30, 0.1)' },
					'50%': { boxShadow: '0 0 20px rgba(255, 30, 30, 0.8), 0 0 40px rgba(255, 30, 30, 0.4), 0 0 60px rgba(255, 30, 30, 0.2)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'rotate-360': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				reveal: {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'matrix-rain': {
					'0%': { top: '-50%' },
					'100%': { top: '110%' }
				},
				flicker: {
					'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
						opacity: '0.99',
						filter: 'drop-shadow(0 0 1px rgba(255, 30, 30, 0.7))'
					},
					'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
						opacity: '0.4',
						filter: 'none'
					}
				},
				'data-flow': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100%)' }
				},
				glitch2: {
					'0%': {
						clip: 'rect(18px, 9999px, 65px, 0)'
					},
					'5%': {
						clip: 'rect(47px, 9999px, 49px, 0)'
					},
					'10%': {
						clip: 'rect(18px, 9999px, 78px, 0)'
					},
					// ... more steps ...
					'100%': {
						clip: 'rect(95px, 9999px, 14px, 0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 0.5s infinite',
				'text-glitch': 'text-glitch 3s infinite',
				'scanline': 'scanline 4s linear infinite',
				'blink': 'blink 1s infinite',
				'float': 'float 6s ease-in-out infinite',
				'cyber-pulse': 'cyber-pulse 2s infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'rotate-360': 'rotate-360 20s linear infinite',
				'reveal': 'reveal 0.8s ease-out forwards',
				'matrix-rain': 'matrix-rain 10s linear infinite',
				'flicker': 'flicker 2s linear infinite',
				'data-flow': 'data-flow 15s linear infinite',
				'glitch2': 'glitch2 1s infinite'
			},
			boxShadow: {
				'glow-md': '0 0 10px #8B0000, 0 0 20px #8B0000, 0 0 30px #8B0000',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
