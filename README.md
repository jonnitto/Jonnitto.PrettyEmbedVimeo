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

Prettier embeds for your Vimeo videos in [Neos CMS](https://www.neos.io) - with nice options like high-res preview images, lightbox feature and advanced customization of embed options.

| Version | Neos          |
| ------- | ------------- |
| 1.\*    | 3.3.\* + 4.\* |
| 2.\*    | ^4.2.\*       |

## Installation

Most of the time you have to make small adjustments to a package (e.g. configuration in `Settings.yaml`). Because of that, it is important to add the corresponding package to the composer from your theme package. Mostly this is the site packages located under `Packages/Sites/`. To install it correctly go to your theme package (e.g.`Packages/Sites/Foo.Bar`) and run following command:

```bash
composer require jonnitto/prettyembedvimeo --no-update
```

The `--no-update` command prevent the automatic update of the dependencies. After the package was added to your theme `composer.json`, go back to the root of the Neos installation and run `composer update`. Et voilà! Your desired package is now installed correctly.

## PrettyEmbedCollection

This package is member of the [PrettyEmbedCollection](https://github.com/jonnitto/Jonnitto.PrettyembedCollection) which contains following packages:

- [PrettyEmbedVideo](https://github.com/jonnitto/Jonnitto.PrettyEmbedVideo)
- [PrettyEmbedVimeo](https://github.com/jonnitto/Jonnitto.PrettyEmbedVimeo)
- [PrettyEmbedYoutube](https://github.com/jonnitto/Jonnitto.PrettyEmbedYoutube)

If you install the PrettyEmbedCollection the video players get grouped into a own group in the node inspector, otherwise they will be in the default group.

## FAQ

**What are the differences from the PrettyEmbed series to [Jonnitto.Plyr](https://github.com/jonnitto/Jonnitto.Plyr)?**

|                                    | PrettyEmbed series |  Plyr  |
| ---------------------------------- | :----------------: | :----: |
| YouTube Video                      |         ✓          |   ✓    |
| YouTube Playlist                   |         ✓          |        |
| Vimeo                              |         ✓          |   ✓    |
| Native Audio                       |                    |   ✓    |
| Native Video                       |         ✓          |   ✓    |
| Advanced captions for native video |         ✓          |        |
| Preview image                      |         ✓          |        |
| Lightbox included                  |         ✓          |        |
| Preview image                      |         ✓          |        |
| Javascript API                     |                    |   ✓    |
| Filesize (JS & CSS)                |      smaller       | bigger |

All packages from the PrettyEmbed series have the benefit of a better frontend performance since the player gets only loaded on request. So, no iframe/video get's loaded until the user wants to watch a video.

## Update from version 1

To update from version 1, you have to run following command in your cli:  
`./flow node:migrate --version 20190617204500`

To check the current state of the migrations, you can run  
`./flow node:migrationstatus`
