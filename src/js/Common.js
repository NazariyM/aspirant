import objectFitImages from 'object-fit-images';
import objectFitVideos from 'object-fit-videos';
// import '@fancyapps/fancybox';

import './components/Header';
import './components/Sliders';
import './components/CustomScroll';
import './components/VideoBlock';
import './sections/Services';

export class Common {
  constructor() {
    this.init();
  }

  init() {
    objectFitImages();
    objectFitVideos();
    this.expandText();
  }

  expandText() {
    const $btn = $('.js-expand-btn');

    $btn.each(function (i, $btn) {
      $($btn).on('click', (e) => {
        const $this = $(e.currentTarget);
        $this.parent().prev().slideDown();
        $this.parent().addClass('hidden');
      });
    });
  }
}

export default new Common();
