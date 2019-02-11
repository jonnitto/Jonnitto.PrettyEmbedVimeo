[![Latest Stable Version](https://poser.pugx.org/jonnitto/prettyembedvimeo/v/stable)](https://packagist.org/packages/jonnitto/prettyembedvimeo)
[![Total Downloads](https://poser.pugx.org/jonnitto/prettyembedvimeo/downloads)](https://packagist.org/packages/jonnitto/prettyembedvimeo)
[![License](https://poser.pugx.org/jonnitto/prettyembedvimeo/license)](https://packagist.org/packages/jonnitto/prettyembedvimeo)
[![GitHub forks](https://img.shields.io/github/forks/jonnitto/Jonnitto.PrettyEmbedVimeo.svg?style=social&label=Fork)](https://github.com/jonnitto/Jonnitto.PrettyEmbedVimeo/fork)
[![Support development](https://img.shields.io/badge/Donate-PayPal-yellow.svg)](https://www.paypal.me/Jonnitto/20eur)
[![My wishlist on amazon](https://img.shields.io/badge/Wishlist-Amazon-yellow.svg)](https://www.amazon.de/hz/wishlist/ls/2WPGORAVYF39B?&sort=default)  
[![GitHub stars](https://img.shields.io/github/stars/jonnitto/Jonnitto.PrettyEmbedVimeo.svg?style=social&label=Stars)](https://github.com/jonnitto/Jonnitto.PrettyEmbedVimeo/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/jonnitto/Jonnitto.PrettyEmbedVimeo.svg?style=social&label=Watch)](https://github.com/jonnitto/Jonnitto.PrettyEmbedVimeo/subscription)
[![GitHub followers](https://img.shields.io/github/followers/jonnitto.svg?style=social&label=Follow)](https://github.com/jonnitto/followers)
[![Follow Jon on Twitter](https://img.shields.io/twitter/follow/jonnitto.svg?style=social&label=Follow)](https://twitter.com/jonnitto)

# Jonnitto.PrettyEmbedVimeo

Prettier embeds for your Vimeo videos in [Neos CMS](https://www.neos.io) - with nice options like high-res preview images and advanced customization of embed options. Embed and lightbox functions use [Gator](https://github.com/ccampbell/gator) for event delegation.

| Version | Neos          |
| ------- | ------------- |
| 1.\*    | 3.3.\* + 4.\* |

## Installation

Most of the time you have to make small adjustments to a package (e.g. configuration in `Settings.yaml`). Because of that, it is important to add the corresponding package to the composer from your theme package. Mostly this is the site packages located under `Packages/Sites/`. To install it correctly go to your theme package (e.g.`Packages/Sites/Foo.Bar`) and run following command:

```
composer require jonnitto/prettyembedvimeo --no-update
```

The `--no-update` command prevent the automatic update of the dependencies. After the package was added to your theme `composer.json`, go back to the root of the Neos installation and run `composer update`. Et voilà! Your desired package is now installed correctly.

## FAQ

**What are the differences from this package to the [Jonnitto.Plyr](https://github.com/jonnitto/Jonnitto.Plyr) package?**

|                     | Jonnitto.PrettyEmbedVimeo | Jonnitto.Plyr | Jonnitto.PrettyEmbedYoutube |
| ------------------- | :-----------------------: | :-----------: | :-------------------------: |
| YouTube Video       |                           |       ✓       |              ✓              |
| YouTube Playlist    |                           |               |              ✓              |
| Vimeo               |             ✓             |       ✓       |                             |
| Native Audio        |                           |       ✓       |                             |
| Native Video        |                           |       ✓       |                             |
| Preview image       |             ✓             |               |              ✓              |
| Picture in picture  |                           |       ✓       |                             |
| Javascript API      |                           |       ✓       |                             |
| Filesize (JS & CSS) |          smaller          |    bigger     |           smaller           |

Jonnitto.PrettyembedVimeo also has the benefit of a better frontend  
performance since the player gets only loaded on request.  
So, no iframe until the user wants to watch a video.

## License

Licensed under MIT, see [LICENSE](LICENSE)
