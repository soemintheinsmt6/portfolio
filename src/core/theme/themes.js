// Theme definitions
export const themes = {
  amethyst: {
    name: 'amethyst',
    colors: {
      // Primary gradient colors
      primary: {
        from: 'purple-400',
        to: 'pink-400',
        fromDark: 'purple-600',
        toDark: 'pink-600',
      },
      // Background colors
      background: {
        main: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
        section: 'bg-slate-900/50',
        card: 'bg-slate-800/50',
        cardHover: 'bg-slate-800/80',
        nav: 'bg-slate-900/80',
        mobileMenu: 'bg-slate-800',
      },
      // Text colors
      text: {
        primary: 'text-white',
        secondary: 'text-gray-300',
        tertiary: 'text-gray-400',
        accent: 'text-purple-400',
        accentSecondary: 'text-pink-400',
        link: 'text-purple-400',
        linkHover: 'text-purple-300',
      },
      // Border colors
      border: {
        default: 'border-purple-500/20',
        card: 'border-purple-500/20',
        nav: 'border-purple-500/20',
        secondary: 'border border-gray-400/60',
      },
      // Button colors
      button: {
        primary: 'bg-purple-600',
        primaryHover: 'hover:bg-purple-700',
        secondary: 'bg-slate-800',
        secondaryHover: 'hover:bg-slate-700',
        gradient: 'bg-gradient-to-r from-purple-600 to-pink-600',
      },
      // Badge/Tag colors
      badge: {
        default: 'bg-slate-700',
        accent: 'bg-purple-900/30',
        accentText: 'text-purple-300',
        gradient: 'bg-gradient-to-r from-purple-600 to-pink-600',
        hoverGradient: 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600',
      },
      // Icon colors
      icon: {
        primary: 'text-purple-400',
        secondary: 'text-pink-400',
        accent: 'text-purple-400',
      },
      // Footer colors
      footer: {
        border: 'border-purple-500/20',
        background: 'bg-slate-900/50',
        text: 'text-gray-400',
      },
      // Decorative elements
      decorative: {
        particle: 'bg-purple-500/10',
        gradientCircle: 'bg-gradient-to-r from-purple-500 to-pink-500',
      },
    },
    // Utility class generators
    classes: {
      gradientText: 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent',
      card: 'bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-purple-500/20',
      buttonPrimary: 'bg-purple-600 hover:text-white text-white',
      buttonGradient: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white',
      navBorder: 'border-b border-purple-500/20',
      activeNav: 'text-purple-400',
    },
  },

  // Minimalist theme
  minimalist: {
    name: 'minimalist',
    colors: {
      // Primary gradient colors (monochrome for minimalist)
      primary: {
        from: 'gray-400',
        to: 'gray-600',
        fromDark: 'gray-600',
        toDark: 'gray-800',
      },
      // Background colors
      background: {
        main: 'bg-gradient-to-br from-white via-gray-50 to-white',
        section: 'bg-gray-50/50',
        card: 'bg-white/80',
        cardHover: 'bg-white/90',
        nav: 'bg-white/90',
        mobileMenu: 'bg-white',
      },
      // Text colors
      text: {
        primary: 'text-gray-900',
        secondary: 'text-gray-700',
        tertiary: 'text-gray-500',
        accent: 'text-gray-900',
        accentSecondary: 'text-gray-700',
        link: 'text-gray-900',
        linkHover: 'text-gray-700',
      },
      // Border colors
      border: {
        default: 'border-gray-200',
        card: 'border-gray-200',
        nav: 'border-gray-200',
        secondary: 'border border-blue-200',
      },
      // Button colors
      button: {
        primary: 'bg-gray-900',
        primaryHover: 'hover:bg-gray-800',
        secondary: 'bg-gray-100',
        secondaryHover: 'hover:bg-gray-200',
        gradient: 'bg-gradient-to-r from-blue-50 to-blue-100/80',
      },
      // Badge/Tag colors
      badge: {
        default: 'bg-gray-100',
        accent: 'bg-gray-200',
        accentText: 'text-gray-700',
        gradient: 'bg-gradient-to-r from-gray-700 to-gray-800',
        hoverGradient: 'hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 hover:text-white',
      },
      // Icon colors
      icon: {
        primary: 'text-gray-900',
        secondary: 'text-gray-700',
        accent: 'text-gray-900',
      },
      // Footer colors
      footer: {
        border: 'border-gray-200',
        background: 'bg-gray-50/50',
        text: 'text-gray-700',
      },
      // Decorative elements
      decorative: {
        particle: 'bg-blue-50/10',
        gradientCircle: 'bg-gradient-to-r from-gray-300 to-gray-400',
      },
    },
    // Utility class generators
    classes: {
      gradientText: 'bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent',
      card: 'bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-200',
      buttonPrimary: 'bg-gray-900 hover:bg-gray-800 text-white',
      buttonGradient: 'bg-gradient-to-r from-gray-800 to-gray-900 text-white',
      navBorder: 'border-b border-gray-200',
      activeNav: 'text-blue-500',
    },
  },
};

// Default theme
export const defaultTheme = 'amethyst';

