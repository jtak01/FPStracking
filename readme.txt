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
			
			
			
NOTE: The file named "JS" is the file with the decibel tracker in it.


<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/addons/p5.sound.min.js"></script>
