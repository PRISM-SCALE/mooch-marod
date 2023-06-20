import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const imagePaths: string[] = [
	"/images/jd_white.png",
	"/images/fk_hero.png",
	"/images/banner_image_2.png",
	"/images/banner_image_3.png",
];

const PreloadImages: React.FC = () => {
	const location = useLocation();

	useEffect(() => {
		const imagePromises: Promise<void>[] = imagePaths.map((path) => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.src = path;
				img.onload = () => resolve();
				img.onerror = () => reject();
			});
		});

		Promise.all(imagePromises)
			.then(() => console.log("Images pre-loaded successfully"))
			.catch((error) => console.error("Error pre-loading images:", error));
	}, [location]);

	return null;
};

export default PreloadImages;
