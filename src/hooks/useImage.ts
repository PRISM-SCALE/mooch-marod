import {useState, useEffect} from "react";

interface ImageState {
	src: string;
	isLoading: boolean;
	error: Error | null;
}

const useImage = (initialSrc: string): ImageState => {
	const [image, setImage] = useState<ImageState>({
		src: initialSrc,
		isLoading: false,
		error: null,
	});

	useEffect(() => {
		if (!initialSrc) return;

		let isMounted = true;

		const loadImage = async () => {
			setImage((prevImage) => ({...prevImage, isLoading: true}));

			try {
				const response = await fetch(initialSrc);
				if (!response.ok) {
					throw new Error("Failed to load image");
				}

				const blob = await response.blob();
				const objectURL = URL.createObjectURL(blob);

				if (isMounted) {
					setImage({src: objectURL, isLoading: false, error: null});
				}
			} catch (error) {
				if (isMounted) {
					setImage({src: initialSrc, isLoading: false, error});
				}
			}
		};

		loadImage();

		return () => {
			isMounted = false;
		};
	}, [initialSrc]);

	return image;
};

export default useImage;
