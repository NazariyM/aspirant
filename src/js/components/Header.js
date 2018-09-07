import {
  $body,
  $window,
  throttle,
  css,
  Resp, $header, $scrolledElements
} from '../_helpers';

class Header {
	constructor() {
		this.body = document.querySelector('body');
		this.header = document.querySelector('.header');
		// this.menuBtn = this.header.querySelector('.header__menu-btn');
		this.scrollTop = 0;

		this.init();
	}

	async init() {
		this.initFix();
		this.initScroll();
		this.bindEvents();
	}

	bindEvents() {
		// this.menuBtn.addEventListener('click', () => {
    //   if (Resp.isMobile) this.beforeOpen();
		// 	this.toggleMenu();
		// });
	}

  beforeOpen() {
    this.scrollTop = $window.scrollTop();
    this.scrollTop > 0 ? this.header.classList.add(css.menuActive) : false;
  }

  beforeClose() {
    this.body.classList.remove(css.locked);
    $body.scrollTop(this.scrollTop);
    this.header.classList.remove(css.menuActive);
  }

	toggleMenu(state = false) {
		switch (state) {
		case 'open':
			this.menuBtn.classList.add(css.active);
		break;
		case 'close':
			this.menuBtn.classList.remove(css.active);
		break;
		default:
			this.burgerActiveState = css.active;
	}
		return HeaderAPI;
	}

	lockBody() {
		Resp.isMobile ? this.body.classList.toggle(css.locked) : false;
	}

	set burgerActiveState(className) {
		this.menuBtn.classList.toggle(className);
	}

	get burgerActiveState() {
		return this.menuBtn.classList.contains(css.active);
	}

	initFix() {
		const _this = this;
		const toggleHeaderScroll = throttle(() => {
			toggleHeader();
		}, 0, this);

		function toggleHeader() {

      if (window.pageYOffset > 0) {
				_this.header.classList.add(css.fixed);
			} else {
				_this.header.classList.remove(css.fixed);
			}
		}

		window.addEventListener('scroll', toggleHeaderScroll);
	}

  initScroll() {
    const offsetTop = Resp.isDesk ? 70 : 60;
    const $link = $header.find('.header__nav-list').find('a');

    $link.on('click', function (e) {
      e.preventDefault();
      const el = $(this).attr('href');
      $scrolledElements.animate({scrollTop: $(el).offset().top - offsetTop}, 1500);
      return false;
    });
  }
}

export const HeaderAPI = new Header();
