FPS Tracking

general layout: 
>shottrracker, decibelmeter
	>These will belong in there own javascript files 
>scene.html 
	>page layout: canvas, live video of user in corner
	>canvas contains an array of objects of images
		>will include image file, coordinates, point value
	>start button will trigger voice recording
	>shottracker will live plot crosshair
	>point value displayed in top left corner 
	>if recording exceeds decibel value--> trigger shot()
		>iterate through array of images
		>compare crosshair to location of image
			>elif: if overlap, plot hit @ crosshair location; else plot miss @crosshair location
			>based on this add to running point value

