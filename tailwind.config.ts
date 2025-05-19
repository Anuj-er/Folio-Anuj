import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// Define proper types for the color variables
type ColorVariable = string | { [key: string]: string };

function addVariablesForColors({ addBase, theme }: PluginAPI) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  ) as { [key: string]: string };

  addBase({
    ":root": newVars,
  });
}

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
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
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			slide: {
  				'0%': {
  					transform: 'translateY(0%)'
  				},
  				'100%': {
  					transform: 'translateY(-50%)'
  				}
  			},
  			spotlight: {
  				'0%': {
  					opacity: '0',
  					transform: 'translate(-72%, -62%) scale(0.5)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translate(-50%,-40%) scale(1)'
  				}
  			},
  			grid: {
  				'0%': {
  					transform: 'translateY(-50%)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
  			'spin-slow': {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translate(0, 0) scale(1)'
  				},
  				'33%': {
  					transform: 'translate(25px, -25px) scale(1.1)'
  				},
  				'66%': {
  					transform: 'translate(-25px, 25px) scale(0.9)'
  				}
  			},
  			ping: {
  				'75%, 100%': {
  					transform: 'scale(2)',
  					opacity: '0'
  				}
  			},
  			shimmer: {
  				'0%': {
  					backgroundPosition: '200% 0'
  				},
  				'100%': {
  					backgroundPosition: '-200% 0'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-900px)',
  					opacity: '0'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			orbit: {
  				'0%': {
  					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
  				}
  			},
  			'shimmer-slide': {
  				to: {
  					transform: 'translate(calc(100cqw - 100%), 0)'
  				}
  			},
  			'spin-around': {
  				'0%': {
  					transform: 'translateZ(0) rotate(0)'
  				},
  				'15%, 35%': {
  					transform: 'translateZ(0) rotate(90deg)'
  				},
  				'65%, 85%': {
  					transform: 'translateZ(0) rotate(270deg)'
  				},
  				'100%': {
  					transform: 'translateZ(0) rotate(360deg)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			slide: 'slide 60s linear infinite',
  			spotlight: 'spotlight 2s ease .75s 1 forwards',
  			grid: 'grid 15s linear infinite',
  			'spin-slow': 'spin-slow 3s linear infinite',
  			float: 'float 10s ease-in-out infinite',
  			ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  			shimmer: 'shimmer 8s ease-in-out infinite',
  			meteor: 'meteor 5s linear infinite',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite',
  			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
  			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear'
  		},
  		backgroundSize: {
  			shimmer: '200% 100%'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ addBase, addUtilities }: PluginAPI) {
      addBase({});

      addUtilities({
        ".bg-grid": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48 L60 48 L60 54 M42 48 L48 48 L48 54 M30 48 L36 48 L36 54 M18 48 L24 48 L24 54 M6 48 L12 48 L12 54 M54 36 L60 36 L60 42 M42 36 L48 36 L48 42 M30 36 L36 36 L36 42 M18 36 L24 36 L24 42 M6 36 L12 36 L12 42 M54 24 L60 24 L60 30 M42 24 L48 24 L48 30 M30 24 L36 24 L36 30 M18 24 L24 24 L24 30 M6 24 L12 24 L12 30 M54 12 L60 12 L60 18 M42 12 L48 12 L48 18 M30 12 L36 12 L36 18 M18 12 L24 12 L24 18 M6 12 L12 12 L12 18 M54 0 L60 0 L60 6 M42 0 L48 0 L48 6 M30 0 L36 0 L36 6 M18 0 L24 0 L24 6 M6 0 L12 0 L12 6' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/svg%3E")`,
        },
        ".mask-fade-out": {
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
        },
        ".backdrop-blur-sm": {
          backdropFilter: "blur(4px)",
        },
        ".glow-meteor": {
          boxShadow:
            "0 0 20px 2px rgba(255, 215, 0, 0.3), 0 0 30px 4px rgba(255, 215, 0, 0.2)",
          filter:
            "brightness(1.3) drop-shadow(0 0 10px rgba(255, 215, 0, 0.4))",
        },
      });
    },
  ],
} satisfies Config;

export default config;