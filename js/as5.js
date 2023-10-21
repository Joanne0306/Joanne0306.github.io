$(function() {
    const videoElement1 = $('#video1').get(0);
    const videoElement2 = $('#video2').get(0);

    if (!videoElement1 || !videoElement2) {
        console.error("Video element not found");
        return;
    }

    const maxScroll = $(document).height() - $(window).height();

    $(window).scroll(function() {
        const currentScrollPosition = $(document).scrollTop();

        if (videoElement1.duration) {
            if (currentScrollPosition >= 0) {
                videoElement1.currentTime = videoElement1.duration * (currentScrollPosition / maxScroll);
                videoElement1.play();
            } else {
                videoElement1.pause();
            }
        } else {
            console.warn("Video 1 duration is not available");
        }

        if (videoElement2.duration) {
            if (currentScrollPosition >= 0) {
                videoElement2.currentTime = videoElement2.duration * (currentScrollPosition / maxScroll);
                videoElement2.play();
            } else {
                videoElement2.pause();
            }
        } else {
            console.warn("Video 2 duration is not available");
        }
    });
});


