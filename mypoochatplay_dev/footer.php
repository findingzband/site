<?php
$bannerLeftAd[1] = '<a href="http://www.anrdoezrs.net/click-4250155-10372314" target="_top"><img src="http://www.awltovhc.com/image-4250155-10372314" width="468" height="60" alt="Insure Your Pet\'s Health For Pennies A Day!" border="0"/></a>';
$bannerLeftAd[2] = '<a href="http://www.anrdoezrs.net/click-4250155-10409047"><img src="http://www.awltovhc.com/image-4250155-10409047" width="468" height="60" alt="Save Up To 50% At PetCareRx" border="0"/></a>';
$bannerLeftAd[3] = '<a href="http://www.tkqlhce.com/click-4250155-10566053" target="_top"><img src="http://www.tqlkg.com/image-4250155-10566053" width="468" height="60" alt="DogBreedStore.com: Nothing but the breed" border="0"/></a>';
$bannerLeftAd[4] = '<a href="http://www.jdoqocy.com/click-4250155-10844354" target="_top"><img src="http://www.tqlkg.com/image-4250155-10844354" width="468" height="60" alt="Click here to save money" border="0"/></a>';

$bannerRightAd[1] = '<a href="http://www.kqzyfj.com/click-4250155-10788574" target="_top"><img src="http://www.awltovhc.com/image-4250155-10788574" width="468" height="60" alt="ceasersway" border="0"/></a>';
$bannerRightAd[2] = '<a href="http://www.kqzyfj.com/click-4250155-10414549?cm_mmc=CJ-_-3206480-_-4250155-_-General468x60" target="_top"><img src="http://www.tqlkg.com/image-4250155-10414549" width="468" height="60" alt="FREE Shipping on $50 at PETCO.com" border="0"/></a> ';
$bannerRightAd[3] = '<a href="http://www.kqzyfj.com/click-4250155-10446400" target="_top"><img src="http://www.tqlkg.com/image-4250155-10446400" width="468" height="60" alt="$5.99 Flat Shipping up to 20lbs at Dog.com" border="0"/></a>';
$bannerRightAd[4] = '<a href="http://www.dpbolvw.net/click-4250155-10758932" target="_top"><img src="http://www.awltovhc.com/image-4250155-10758932" width="468" height="60" alt="PetSafe" border="0"/></a>';
$adLeftCount = count($bannerLeftAd);
$adRightCount = count($bannerRightAd);
$randomLeftAdNumber = mt_rand(1, $adLeftCount);
$randomRightAdNumber = mt_rand(1, $adRightCount);

echo $bannerLeftAd[$randomLeftAdNumber].$bannerRightAd[$randomRightAdNumber];
?>

<p><span class="copyright">Copyright 2010 Pooch at Play | Site Designed &amp; Illustrated by <a href="mailto: rkjohns@okstate.edu">Ryan Johnson </a>|  Maintained by Down to the Wire Studios</span><br />
</p>
</body>
</html>
