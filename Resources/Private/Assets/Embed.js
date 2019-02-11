import Gator from 'gator';

const SELECTOR = 'a.jonnitto-prettyembedvimeo--inline';
const PLAY_CLASS = 'jonnitto-prettyembedvimeo--play';

function replaceTag(element, tagName) {
    if (typeof element === 'object' && typeof tagName === 'string') {
        let originalElement = element;
        let originalTag = originalElement.tagName;
        let startRX = new RegExp('^<' + originalTag, 'i');
        let endRX = new RegExp(originalTag + '>$', 'i');
        let startSubst = '<' + tagName;
        let endSubst = tagName + '>';
        let wrapper = document.createElement('div');
        wrapper.innerHTML = originalElement.outerHTML
            .replace(startRX, startSubst)
            .replace(endRX, endSubst);
        let newElement = wrapper.firstChild;
        element.parentNode.replaceChild(newElement, element);
        return newElement;
    }
}

function initVideo(link) {
    let embed = link.getAttribute('data-embed') || false;
    let image = link.getElementsByTagName('img')[0];
    let imageSrc = image.getAttribute('src') || false;
    let width = image.width;
    let height = image.height;
    if (embed && width && height) {
        let element = replaceTag(link, 'div');
        let fullscreen =
            link.getAttribute('data-fs') == 'true' ? 'allowfullscreen ' : '';

        element.setAttribute('data-img', imageSrc);
        element.classList.add(PLAY_CLASS);
        element.style.paddingTop =
            (parseInt(height) / parseInt(width)) * 100 + '%';
        element.innerHTML = `<iframe src="${embed}" width="${width}" height="${height}" ${fullscreen}frameborder="0"></iframe>`;
    }
}

function openVideo(event) {
    event.preventDefault();
    initVideo(this);
}

function restore(element) {
    let img = element.getAttribute('data-img') || false;
    if (img) {
        element.classList.remove(PLAY_CLASS);
        element.removeAttribute('style');
        element.innerHTML = `<img src="${img}" />`;
        replaceTag(element, 'a');
    }
}

function init(links) {
    // We are on a mobile device without autoplay
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    ) {
        if (typeof links === 'undefined') {
            links = document.querySelectorAll(SELECTOR);
        }
        for (let i = links.length - 1; i >= 0; i--) {
            initVideo(links[i]);
        }
    }
}

Gator(window).on('load', function() {
    init();
});

// Attach the events to the html tag (because of the Google Tag Manager)
Gator(document.documentElement).on('click', SELECTOR, openVideo);

export { init, restore };
