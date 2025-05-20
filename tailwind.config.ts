
import type { Config } from "tailwindcss";

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
				aiblue: {
					50: '#eef6ff',
					100: '#d9eaff',
					200: '#bcd9ff',
					300: '#8ec0ff',
					400: '#5999ff',
					500: '#3370fc', 
					600: '#2050ea',
					700: '#1b3cd1',
					800: '#1e36aa',
					900: '#1e3485',
					950: '#152152',
				},
				aipurple: {
					50: '#f4f2ff',
					100: '#eae7fe',
					200: '#d7d1fe',
					300: '#baaefd',
					400: '#9a83fb',
					500: '#7c55f6',
					600: '#6d3aec',
					700: '#5d29db',
					800: '#4e24b6',
					900: '#412194',
					950: '#270f64',
				}
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"pulse-glow": {
					"0%, 100%": { 
						opacity: "1",
						boxShadow: "0 0 15px 5px rgba(124, 85, 246, 0.4)"
					},
					"50%": { 
						opacity: "0.8",
						boxShadow: "0 0 25px 10px rgba(124, 85, 246, 0.6)"
					},
				},
				"shine": {
					"to": { backgroundPosition: "200% center" }
				},
				"glow": {
					"0%, 100%": { boxShadow: "0 0 15px 5px rgba(124, 85, 246, 0.4)" },
					"50%": { boxShadow: "0 0 30px 15px rgba(124, 85, 246, 0.7)" }
				},
				"neon-pulse": {
					"0%, 100%": { textShadow: "0 0 10px rgba(124, 85, 246, 0.7), 0 0 20px rgba(124, 85, 246, 0.5), 0 0 30px rgba(124, 85, 246, 0.3)" },
					"50%": { textShadow: "0 0 15px rgba(124, 85, 246, 0.9), 0 0 25px rgba(124, 85, 246, 0.7), 0 0 35px rgba(124, 85, 246, 0.5)" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"float": "float 6s ease-in-out infinite",
				"pulse-glow": "pulse-glow 3s ease-in-out infinite",
				"shine": "shine 8s ease-in-out infinite",
				"glow": "glow 3s ease-in-out infinite",
				"neon-pulse": "neon-pulse 3s ease-in-out infinite"
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'cyber-grid': "linear-gradient(to right, rgba(124, 85, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(124, 85, 246, 0.1) 1px, transparent 1px)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
