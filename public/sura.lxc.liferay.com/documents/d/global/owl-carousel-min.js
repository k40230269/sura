/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
.owl-carousel,
.owl-carousel .owl-item {
  -webkit-tap-highlight-color: transparent;
  position: relative;
}
.owl-carousel {
  display: none;
  width: 100%;
  z-index: 1;
}
.owl-carousel .owl-stage {
  position: relative;
  -ms-touch-action: pan-Y;
  touch-action: manipulation;
  -moz-backface-visibility: hidden;
}
.owl-carousel .owl-stage:after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}
.owl-carousel .owl-stage-outer {
  position: relative;
  overflow: hidden;
  -webkit-transform: translate3d(0, 0, 0);
}
.owl-carousel .owl-item,
.owl-carousel .owl-wrapper {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
}
.owl-carousel .owl-item {
  min-height: 1px;
  float: left;
  -webkit-backface-visibility: hidden;
  -webkit-touch-callout: none;
}
.owl-carousel .owl-item img {
  display: block;
  width: 100%;
}
.owl-carousel .owl-dots.disabled,
.owl-carousel .owl-nav.disabled {
  display: none;
}
.no-js .owl-carousel,
.owl-carousel.owl-loaded {
  display: block;
}
.owl-carousel .owl-dot,
.owl-carousel .owl-nav .owl-next,
.owl-carousel .owl-nav .owl-prev {
  cursor: pointer;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.owl-carousel .owl-nav button.owl-next,
.owl-carousel .owl-nav button.owl-prev,
.owl-carousel button.owl-dot {
  background: 0 0;
  color: inherit;
  border: none;
  padding: 0 !important;
  font: inherit;
}
.owl-carousel.owl-loading {
  opacity: 0;
  display: block;
}
.owl-carousel.owl-hidden {
  opacity: 0;
}
.owl-carousel.owl-refresh .owl-item {
  visibility: hidden;
}
.owl-carousel.owl-drag .owl-item {
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.owl-carousel.owl-grab {
  cursor: move;
  cursor: grab;
}
.owl-carousel.owl-rtl {
  direction: rtl;
}
.owl-carousel.owl-rtl .owl-item {
  float: right;
}
.owl-carousel .animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.owl-carousel .owl-animated-in {
  z-index: 0;
}
.owl-carousel .owl-animated-out {
  z-index: 1;
}
.owl-carousel .fadeOut {
  animation-name: fadeOut;
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.owl-height {
  transition: height 0.5s ease-in-out;
}
.owl-carousel .owl-item .owl-lazy {
  opacity: 0;
  transition: opacity 0.4s ease;
}
.owl-carousel .owl-item .owl-lazy:not([src]),
.owl-carousel .owl-item .owl-lazy[src^=""] {
  max-height: 0;
}
.owl-carousel .owl-item img.owl-lazy {
  transform-style: preserve-3d;
}
.owl-carousel .owl-video-wrapper {
  position: relative;
  height: 100%;
  background: #000;
}
.owl-carousel .owl-video-play-icon {
  position: absolute;
  height: 80px;
  width: 80px;
  left: 50%;
  top: 50%;
  margin-left: -40px;
  margin-top: -40px;
  background: url(owl.video.play.png) no-repeat;
  cursor: pointer;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  transition: transform 0.1s ease;
}
.owl-carousel .owl-video-play-icon:hover {
  -ms-transform: scale(1.3, 1.3);
  transform: scale(1.3, 1.3);
}
.owl-carousel .owl-video-playing .owl-video-play-icon,
.owl-carousel .owl-video-playing .owl-video-tn {
  display: none;
}
.owl-carousel .owl-video-tn {
  opacity: 0;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: opacity 0.4s ease;
}
.owl-carousel .owl-video-frame {
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
}
