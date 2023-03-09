import SF_HambakSnowTTF from '@/assets/fonts/SF_HambakSnowTTF';

const palette = {
	lightblue: '#8dcdd3',
	darkblue: '#4e7275'
};
const fontSizes = {
	large: '40px',
	medium: '30px',
	small: '17px',
	tiny: '15px'
};
const fontFamily = {
	HambakSnow: `@font-face {
    font-family: "HambakSnowTTF";
    src: url(${SF_HambakSnowTTF}) format('truetype')
  }`
};

const button = {
	outline: 'none',
	border: '5px solid',
	borderRadius: '20px',
	backgroundColor: '#fff'
};
const theme = {
	palette,
	fontSizes,
	fontFamily,
	button
};

export default theme;
