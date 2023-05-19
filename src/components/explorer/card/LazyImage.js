import React, { useState, useEffect } from 'react';

const placeHolder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

export const LazyImage = ({ src, alt, idx, imageOnLoad }) => {
	const [imageSrc, setImageSrc] = useState(placeHolder);
	const [imageRef, setImageRef] = useState();

	const onLoad = (event) => {
		event.target.classList.add('loaded');
		imageOnLoad();
	};

	const onError = (event) => {
		event.target.classList.add('has-error');
	};

	useEffect(() => {
		let observer;
		let didCancel = false;

		if (imageRef && imageSrc !== src) {
			if (IntersectionObserver) {
				observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (
								!didCancel
								&& (entry.intersectionRatio > 0 || entry.isIntersecting)
							) {
								//	console.log(idx)
								setTimeout(() => { setImageSrc(src) }, idx * 100); //add 200 ms delay between image loads :/

								observer.unobserve(imageRef);
							}
						});
					},
					{
						threshold: 0.01,
						rootMargin: '75%',
					},
				);
				observer.observe(imageRef);
			} else {
				// Old browsers fallback
				setImageSrc(src);
			}
		}
		return () => {
			didCancel = true;
			// on component cleanup, we remove the listner
			if (observer && observer.unobserve) {
				observer.unobserve(imageRef);
			}
		};
	}, [src, imageSrc, imageRef]);
	return (
		<img
		className='gallery-lazy-image'
			ref={setImageRef}
			src={imageSrc}
			alt={alt}
			onLoad={onLoad}
			onError={onError}
			style={{ zIndex: '0', borderRadius: '15px 15px 0px 0px' }}
		/>
	);
};
