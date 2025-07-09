export const PERSONAL_INFO = {
  name: 'Manthan Makode',
  email: 'manthanmakode991@gmail.com',
  phone: '+91 8625816991',
  github: 'manthanm991',
  linkedin: 'manthan-makode',
  twitter: 'manthanm1100',
  instagram: 'makodemanthan_1100',
  whatsapp: '+91 8625816991',
  location: 'Pune, Maharashtra, India'
};

export const SOCIAL_PLATFORMS = {
  facebook: {
    icon: 'fab fa-facebook',
    color: '#006fff',
    shadowColor: '#006fff',
    getUrl: (shareUrl, shareText) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
  },
  instagram: {
    icon: 'fab fa-instagram',
    color: 'transparent',
    gradient: 'linear-gradient(135deg, #8134AF, #DD2A7B, #F58529, #F9C24B)',
    shadowColor: '#ff5f40',
    getUrl: () => `https://www.instagram.com/${PERSONAL_INFO.instagram}/`
  },
  X: {
    icon: 'fab fa-x-twitter',
    color: '#000000',
    shadowColor: '#00acff',
    getUrl: (shareUrl, shareText) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
  },
  whatsapp: {
    icon: 'fab fa-whatsapp',
    color: '#25D366',
    shadowColor: '#25D366',
    getUrl: (shareUrl, shareText) => `https://wa.me/${PERSONAL_INFO.whatsapp.replace(/\s/g, '')}?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
  },
  email: {
    icon: 'fas fa-envelope',
    color: '#ea4335',
    shadowColor: '#ea4335',
    getUrl: (shareUrl, shareText) => `mailto:${PERSONAL_INFO.email}?subject=Check this out&body=${encodeURIComponent(shareText + ' ' + shareUrl)}`
  },
  github: {
    icon: 'fab fa-github',
    color: '#333',
    shadowColor: '#333',
    getUrl: () => `https://github.com/${PERSONAL_INFO.github}`
  },
  linkedin: {
    icon: 'fab fa-linkedin',
    color: '#0077b5',
    shadowColor: '#0077b5',
    getUrl: (shareUrl) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  },
  telegram: {
    icon: 'fab fa-telegram',
    color: '#0088cc',
    shadowColor: '#0088cc',
    getUrl: (shareUrl, shareText) => `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
  },
  reddit: {
    icon: 'fab fa-reddit',
    color: '#ff4500',
    shadowColor: '#ff4500',
    getUrl: (shareUrl, shareText) => `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`
  }
};

export const SHARE_DEFAULTS = {
  platforms: ['github', 'instagram', 'email', 'whatsapp'],
  direction: 'circular',
  shareText: 'Check this out!'
};