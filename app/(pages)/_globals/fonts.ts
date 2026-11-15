import { Inter, Montserrat, Plus_Jakarta_Sans } from 'next/font/google';

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

const fonts = [inter, montserrat, plusJakartaSans];

const font_variables = fonts.map((font) => font.variable);
const font_string = font_variables.join(' ');
export default font_string;
