var tracks = [];
var current = 0;
var config = {
    bandcamp_api_key: "droghagspakrrynavortishegnir",
    albums: ["1223951139","2630216186"],
    bandcamp_url: "http://music.findingz.com",
    amazon_url: "http://www.amazon.com/gp/product/",
    amazon_tracks: {
        "Better Off Dead": "B0050TKR0Y",
        "Just Trust": "B0050TKR54",
        "Mr. Wrong": "B0050TKRDQ",
        "Envy": "B0050TKRJK",
        "Throw Away": "B0050TKRRM",
        "Gravel Roads": "B0050TKS08",
        "Without Me": "B0050TKS6W",
        "Games": "B0050TKSN0",
        "Relapse": "B0050TKT02",
        "500": "B0050TKTFW",
        "Black Notebook": "B0050TKUAG",
        "Past Beyond the Point": "B0050TKUSI",
        "Blue": "B0050TKV0K",
        "Another Life": "B0050TKV50"
    },
    colorBoxDefaults: {
        current: "{current} of {total}",
        maxHeight: "90%",
        opacity: .6,
        slideshow: true,
        slideshowAuto: false,
        slideshowStart: "Start Slideshow",
        slideshowStop: "Stop Slideshow"
    },
    fleeckrDefaults: {
        apikey: "96184c3c741e46bebc7b413055aec46c",
        limit: 40,
        method: "flickr.photosets.getPhotos"
    },
    flickrSets: {
        artwork: "72157625336005640",
        live: "72157625015020630",
        promotional: "72157624890427357"
    }
}

function checkBrowser()
{
    var audioTest = document.createElement('audio');
    return typeof audioTest.canPlayType === "function" && audioTest.canPlayType("audio/mpeg") !== "";
}
function playNext()
{
    var next = current + 1;
    if(next <= tracks.length-1) {
        initPlayer(tracks[next]);
        current = next;
    }
    else {
        initPlayer(tracks[0]);
        current = 0;
    }
}
function initPlayer(track)
{
    // Initialize
    $("#player").html("");
    var loaded = false;
    var manualSeek = false;
    var $player = $('\
        <p class="player">\
            <a href="http://music.findingz.com"><img class="album hasTooltip" title="Buy Make It Right on Bandcamp" src="http://s0.bcbits.com/img/buttons/bandcamp_60x60_white.png"></a>\
            <span class="previous" />\
            <span class="playtoggle" />\
            <span class="next" />\
            <span class="trackname"><a href="'+track.view_url+'" target="_blank" title="View track information for \''+track.name+'\' on Bandcamp.">'+track.name+'</a></span>\
            <span class="amazonLink"></span>\
            <span class="gutter">\
                <span class="loading" />\
                <span class="ui-slider-handle handle" />\
            </span>\
            <span class="timeleft" />\
            <audio preload="metadata">\
            <source src="'+track.stream_url+'" type="audio/mpeg"></source>\
            </audio>\
        </p>');
    if (track.amazon_url)
        $player.find(".amazonLink").html('<a href="'+track.amazon_url+'" target="_blank" title="Buy \''+track.name+'\' on Amazon."><img src="static/images/social/amazon_buy.png" /></a>');
    $("#player").append($player);
    var audio = $(".player audio").get(0);
    var loadingIndicator = $(".player .loading");
    var positionIndicator = $(".player .handle");
    var timeleft = $(".player .timeleft");
    
    // Bind Events
    if ((audio.buffered !== undefined) && (audio.buffered.length !== 0))
    {
        $(audio).bind('progress', function() {
            var loaded = parseInt(((audio.buffered.end(0) / audio.duration) * 100), 10);
            loadingIndicator.css({width: loaded + '%'});
        });
    }
    else
        loadingIndicator.remove();
    
    $(audio).bind('timeupdate', function() {
        var rem = parseInt(audio.duration - audio.currentTime, 10),
        pos = (audio.currentTime / audio.duration) * 100,
        mins = Math.floor(rem/60,10),
        secs = rem - mins*60;
        
        if(audio.duration == audio.currentTime)
            playNext();
        if (!isNaN(mins) && !isNaN(secs))
            timeleft.text('-' + mins + ':' + (secs < 10 ? '0' + secs : secs));
        if (!manualSeek)
            positionIndicator.css({left: pos + '%'});
        if (!loaded)
        {
            loaded = true;
            $(".player .gutter").slider({
                value: 0,
                step: 0.01,
                orientation: "horizontal",
                range: "min",
                max: audio.duration,
                animate: true,          
                slide: function() {             
                    manualSeek = true;
                },
                stop: function(e,ui) {
                    manualSeek = false;         
                    audio.currentTime = ui.value;
                }
            });
        }
    }).bind('play',function() {
        $(".player .playtoggle").addClass('playing');
    }).bind('pause ended', function() {
        $(".player .playtoggle").removeClass('playing');    
    });
    
    // Click Events
    $(".player .playtoggle").click(function() {     
        if (audio.paused) {
            $(".player").each(function(index) {
                var tempAudio = $(this).find("audio").get(0);
                tempAudio.pause();
            });
            audio.play();
        }
        else {
            audio.pause();
        }
    });
    $(".player .previous").click(function() {
        var previous = current - 1;
        if(previous >= 0) {
            initPlayer(tracks[previous]);
            current = previous;
        }
    });
    $(".player .next").click(function() {     
        playNext();
    });
    tipsyfy();
}
function disableSelection(target){
    if (typeof target.onselectstart!="undefined") //IE route
        target.onselectstart=function(){return false}
    else if (typeof target.style.MozUserSelect!="undefined") //Firefox route
        target.style.MozUserSelect="none"
    else //All other route (ie: Opera)
        target.onmousedown=function(){return false}
}
function toggleAsides()
{
    if($("#fanPlayerWrapper").is(":visible")) {
        $("#fanPlayerWrapper").hide();
        $("#photosWrapper").fadeIn();
        $("#btnToggle").text("Show News & Music");
    }
    else {
        $("#photosWrapper").hide();
        $("#fanPlayerWrapper").fadeIn();
        $("#btnToggle").text("Show Photos");
    }
}
function hidePhotos($container)
{
    // TODO cleanup and run this every time you view photos (so it always changes).
    var photos = $container.find(".fleeckr-image").length;
    var photosToHide = [];
    while (photosToHide.length < photos - 4) {
        var random = Math.floor(Math.random() * photos);
        if (photosToHide.indexOf(random) == -1)
            photosToHide.push(random);
    }
    for (var x=0; x<photosToHide.length; x++) {
        $container.find(".fleeckr-image").eq(photosToHide[x]).hide();
    }
}
function tipsyfy()
{
    $("a, .hasTooltip").tipsy({
        gravity: 'nw',
        opacity: 0.9
    });
}

$(document).ready(function() {
    
    //Music Player
    if (checkBrowser()) { // Chrome, Safari, IE9
        
        var deferreds = [];
        
        for (var i=0; i<config.albums.length; i++) {
            
            deferreds.push($.getJSON('http://api.bandcamp.com/api/album/1/info?key='+config.bandcamp_api_key+'&album_id='+config.albums[i]+'&callback=?', function(returnData) {
                
                var albumTracks = [];
                            
                $.each(returnData.tracks, function() {
                    var temp = {
                        name: this.title,
                        stream_url: this.streaming_url,
                        view_url: config.bandcamp_url + this.url
                    }
                    if (config.amazon_tracks[this.title])
                        temp.amazon_url = config.amazon_url + config.amazon_tracks[this.title];
                    albumTracks.push(temp);
                });
                            
                albumTracks.sort(function() { return Math.round(Math.random())-0.5; });
                tracks = tracks.concat(albumTracks);
            }));
        }
        
        $.when.apply($, deferreds).done(function () {
            initPlayer(tracks[0]);
        });
        
    } else { // Firefox, IE6-8
        var flashURL = '\
            <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="300" height="80">\
                <param name="movie" value="http://bandcamp.com/EmbeddedPlayer.swf/album='+config.albums[0].id+'/size=grande/bgcol=000000/linkcol=6FC334/" />\
                <param name="quality" value="high" />\
                <param name="allowScriptAccess" value="never" />\
                <param name="allowNetworking" value="always" />\
                <param name="wmode" value="transparent" />\
                <param name="bgcolor" value="#000000" />\
                <embed src="http://bandcamp.com/EmbeddedPlayer.swf/album='+config.albums[0].id+'/size=grande/bgcol=000000/linkcol=6FC334/" width="300" height="80" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" quality=high allowScriptAccess=never allowNetworking=always wmode=transparent bgcolor=#000000 ></embed>\
                <noembed><a href="http://music.findingzband.com/">Make It Right by Finding Z</a></noembed>\
            </object><br />';
        $("#player").append(flashURL);
    }
    
    // Photos
    $("#photosArtwork").jfleeckr($.extend(config.fleeckrDefaults, {
        extra: "photoset_id=" + config.flickrSets.artwork,
        itemTemplate: '<div class="fleeckr-image"><a href="{{image_b}}" title="{{title}}" rel="artworkGallery"><img alt="{{title}}" src="{{image_s}}" /></div>'
    }), function(data) {
        $('#photosArtwork a').colorbox(config.colorBoxDefaults);
        hidePhotos($(this));
    });
    $("#photosLive").jfleeckr($.extend(config.fleeckrDefaults, {
        extra: "photoset_id=" + config.flickrSets.live,
        itemTemplate: '<div class="fleeckr-image"><a href="{{image_b}}" title="{{title}}" rel="liveGallery"><img alt="{{title}}" src="{{image_s}}" /></div>'
    }), function(data) {
        $('#photosLive a').colorbox(config.colorBoxDefaults);
        hidePhotos($(this));
    });
    $("#photosPromotional").jfleeckr($.extend(config.fleeckrDefaults, {
        extra: "photoset_id=" + config.flickrSets.promotional,
        itemTemplate: '<div class="fleeckr-image"><a href="{{image_b}}" title="{{title}}" rel="promotionalGallery"><img alt="{{title}}" src="{{image_s}}" /></div>'
    }), function(data) {
        $('#photosPromotional a').colorbox(config.colorBoxDefaults);
        hidePhotos($(this));
    });
    $("#photosWrapper").hide();
    disableSelection(document.body);
    tipsyfy();
});