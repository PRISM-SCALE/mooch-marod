type Props = {
	src: string;
	alt: string;
	width: string;
};

const ReponsiveImage = ({src, alt, width}: Props) => {
	return (
		<img
			src={src}
			alt={alt}
			style={{
				height: "auto",
				maxWidth: "100%",
				margin: "0 auto",
			}}
			width={width}
			loading="lazy"
		/>
	);
};

export default ReponsiveImage;
