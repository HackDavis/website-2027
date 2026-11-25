import {
  DM_Mono,
  Inter,
  Montserrat,
  Plus_Jakarta_Sans,
} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

// Stats section only from what I can tell.. (Figma 222:2143)
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
});

const fonts = [inter, montserrat, plusJakartaSans, dmMono];

const font_variables = fonts.map((font) => font.variable);
const font_string = font_variables.join(' ');
export default font_string;
