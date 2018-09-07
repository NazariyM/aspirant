import { css } from '../_helpers';

class Services {
  constructor() {
    this.$block = $('.services');

    this.$item = this.$block.find('.services__item').not('.services__item_full');
    this.$content = this.$block.find('.services__content');
    this.$contentClose = this.$block.find('.services__content-close');

    if (this.$block.length) this.init();
  }

  init() {
    this.showContent();
    this.closeContent();
  }

  showContent() {
    this.$item.on('click', (e) => {
      const $this = $(e.currentTarget);
      const i = $this.index();

      this.$content.addClass(css.active);

      $('.js-slider').slick('slickGoTo', i, true);
    });
  }

  closeContent() {
    this.$contentClose.on('click', () => {
        this.$content.removeClass(css.active);
      });
  }
}

export default new Services();
