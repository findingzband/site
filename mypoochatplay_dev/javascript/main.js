$(document).ready(function() { 
    $('#flickr_div').flickrGallery({
    		api_key: '6a416fb685e399ff0e10240654d3db41',
    		photoset_ids: ['72157625800350510', '72157625801606626', '72157625801727558'],
    		loading_msg: 'Loading ...',
    		thumb_click_hide: false,
    		slideshow_interval: 5000
		});	
});
