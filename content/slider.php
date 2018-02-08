<div id='map' style='width: 900px; height: 400px;'></div>
<script>
    mapboxgl.accessToken = 'pk.eyJ1IjoieHNjaG9lbmJlcmdlciIsImEiOiJjamQ1dnZubnIxZjZ3Mndxcm5qa2NmaHhwIn0.KWNywVu2RAZWK9IL9598-w';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/xschoenberger/cjd5z7kx86nht2squrrp6w97m\n',

    });

    function getCurrPos() {
        var bounds = map.getBounds();
        console.log(bounds.getCenter());

    }

    map.on("dragend", getCurrPos);
    map.on("zoomend", getCurrPos);
    map.on("touchend", getCurrPos);


    map.addControl(new mapboxgl.GeolocateControl({
        trackUserLocation: true
    }));


</script>

<section class="content__gallery">

    <div class="gallery">

        <div class="gallery__cnt">

            <?php

            $sql = "SELECT * FROM work WHERE category = 'photography' AND deleted = '0'";
            $res = mysqli_query($dblink, $sql);
            $row = mysqli_fetch_all($res, MYSQLI_ASSOC);

            foreach ($row as $key => $item) :
                ?>
                <div class="gallery__cnt__thmb">
                    <a data-idx="<?php echo $key; ?>" href="<?php echo APP_ROOT . $item['path']; ?>">
                        <img src="<?php echo APP_ROOT . $item['path']; ?>" alt="">
                    </a>
                </div>
            <?php endforeach; ?>

        </div>


    </div>

</section>