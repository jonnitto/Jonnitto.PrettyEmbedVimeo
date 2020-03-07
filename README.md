[![Latest stable version]][packagist] [![Total downloads]][packagist] [![License]][packagist] [![GitHub forks]][fork] [![Donate Paypal]][paypal] [![Wishlist amazon]][amazon] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription] [![GitHub followers]][followers] [![Follow Jon on Twitter]][twitter]

# Jonnitto.PrettyEmbedVimeo

Prettier embeds for your Vimeo videos in [Neos CMS] - with nice options like high-res preview images, lightbox feature and advanced customization of embed options.

| Version | Neos          |
| ------- | ------------- |
| 1.\*    | 3.3.\* + 4.\* |
| 2.\*    | ^4.2.\*       |
| 3.\*    | ^4.2.\*       |

## Installation

Most of the time you have to make small adjustments to a package (e.g. configuration in `Settings.yaml`). Because of that, it is important to add the corresponding package to the composer from your theme package. Mostly this is the site packages located under `Packages/Sites/`. To install it correctly go to your theme package (e.g.`Packages/Sites/Foo.Bar`) and run following command:

```bash
composer require jonnitto/prettyembedvimeo --no-update
```

The `--no-update` command prevent the automatic update of the dependencies. After the package was added to your theme `composer.json`, go back to the root of the Neos installation and run `composer update`. Et voilà! Your desired package is now installed correctly.

## PrettyEmbedCollection

This package is member of the [PrettyEmbedCollection] which contains following packages:

- [PrettyEmbedVideo]
- [PrettyEmbedVimeo]
- [PrettyEmbedYoutube]

If you install the PrettyEmbedCollection the video players get grouped into a own group in the node inspector, otherwise they will be in the default group.

## FAQ

**What are the differences from the PrettyEmbed series to [Jonnitto.Plyr]?**

|                                    | PrettyEmbed series |  Plyr  |
| ---------------------------------- | :----------------: | :----: |
| YouTube Video                      |         ✓          |   ✓    |
| YouTube Playlist                   |         ✓          |        |
| Vimeo                              |         ✓          |   ✓    |
| Native Audio                       |         ✓          |   ✓    |
| Native Video                       |         ✓          |   ✓    |
| Advanced captions for native video |         ✓          |        |
| Preview image                      |         ✓          |        |
| Lightbox included                  |         ✓          |        |
| Preview image (for videos)         |         ✓          |        |
| Javascript API                     |                    |   ✓    |
| Filesize (JS & CSS)                |      smaller       | bigger |

All packages from the PrettyEmbed series have the benefit of a better frontend performance since the player gets only loaded on request. So, no iframe/video get's loaded until the user wants to watch a video.

## Customization

### Configuration

If you want to customize the default settings, take a look at the [Settings.Jonnitto.yaml] file. If no node property is giving, these default values will be taken. If you, for example, don't want to let the editor choose if the video should open in a lightbox you can deactivate the mixin in your Configuration folder like this:

```yaml
'Jonnitto.PrettyEmbedVimeo:Content.Vimeo':
  superTypes:
    'Jonnitto.PrettyEmbedHelper:Mixin.Lightbox': false
```

These are the available mixins:

| Mixin name                                         | Description                                                           | Enabled |
| -------------------------------------------------- | --------------------------------------------------------------------- | :-----: |
| `Jonnitto.PrettyEmbedHelper:Mixin.Groups`          | Enables the inspector groups                                          |    ✓    |
| `Jonnitto.PrettyEmbedHelper:Mixin.IncludeAssets`   | Include the frontend resources                                        |    ✓    |
| `Jonnitto.PrettyEmbedHelper:Mixin.Image`           | Add the preview image property                                        |    ✓    |
| `Jonnitto.PrettyEmbedHelper:Mixin.Lightbox`        | Open the video in a lightbox, defaults to `false`                     |    ✓    |
| `Jonnitto.PrettyEmbedVimeo:Mixin.VideoID`          | Let the user enter the video id or youtube url                        |    ✓    |
| `Jonnitto.PrettyEmbedVimeo:Mixin.BackendLabel`     | Read the title of the video and set this as label in the content tree |    ✓    |
| `Jonnitto.PrettyEmbedHelper:Mixin.AllowFullScreen` | Allow fullscreen or not, defaults to `true`                           |         |
| `Jonnitto.PrettyEmbedHelper:Mixin.Muted`           | Whether the video is muted upon loading, defaults to `false`          |         |
| `Jonnitto.PrettyEmbedHelper:Mixin.Loop`            | Loop the video, defaults to `false`                                   |         |

If you want to give the editor even more control, you can also add your own properties like `color`, or `background`, for example. For a full list look at the `defaults` section in the [Settings.Jonnitto.yaml] file.

### Fusion

If you want to use the player as a pure component, you can use the [`Jonnitto.PrettyEmbedVimeo:Component.Vimeo`] fusion prototype.

If you want to read the node properties and let the package handle all for you, you should use the [`Jonnitto.PrettyEmbedVimeo:Content.Vimeo`] prototype. For easier including in your own node types, you can disable the content element wrapping with `contentElement = false`. This is useful if you want to create for example a text with video node type.

## Update from version 1

To update from version 1, you have to run following command in your cli:  
`./flow node:migrate --version 20190617204500`

To check the current state of the migrations, you can run  
`./flow node:migrationstatus`

[packagist]: https://packagist.org/packages/jonnitto/prettyembedvimeo
[latest stable version]: https://poser.pugx.org/jonnitto/prettyembedvimeo/v/stable
[total downloads]: https://poser.pugx.org/jonnitto/prettyembedvimeo/downloads
[license]: https://poser.pugx.org/jonnitto/prettyembedvimeo/license
[github forks]: https://img.shields.io/github/forks/jonnitto/Jonnitto.PrettyEmbedVimeo.svg?style=social&label=Fork
[donate paypal]: https://img.shields.io/badge/Donate-PayPal-yellow.svg
[wishlist amazon]: https://img.shields.io/badge/Wishlist-Amazon-yellow.svg
[amazon]: https://www.amazon.de/hz/wishlist/ls/2WPGORAVYF39B?&sort=default
[paypal]: https://www.paypal.me/Jonnitto/20eur
[github stars]: https://img.shields.io/github/stars/jonnitto/Jonnitto.PrettyEmbedVimeo.svg?style=social&label=Stars
[github watchers]: https://img.shields.io/github/watchers/jonnitto/Jonnitto.PrettyEmbedVimeo.svg?style=social&label=Watch
[github followers]: https://img.shields.io/github/followers/jonnitto.svg?style=social&label=Follow
[follow jon on twitter]: https://img.shields.io/twitter/follow/jonnitto.svg?style=social&label=Follow
[twitter]: https://twitter.com/jonnitto
[fork]: https://github.com/jonnitto/Jonnitto.PrettyEmbedVimeo/fork
[stargazers]: https://github.com/jonnitto/Jonnitto.PrettyEmbedVimeo/stargazers
[subscription]: https://github.com/jonnitto/Jonnitto.PrettyEmbedVimeo/subscription
[followers]: https://github.com/jonnitto/followers
[license]: LICENSE
[neos cms]: https://www.neos.io
[prettyembedcollection]: https://github.com/jonnitto/Jonnitto.PrettyembedCollection
[prettyembedvideo]: https://github.com/jonnitto/Jonnitto.PrettyEmbedVideo
[prettyembedvimeo]: https://github.com/jonnitto/Jonnitto.PrettyEmbedVimeo
[prettyembedyoutube]: https://github.com/jonnitto/Jonnitto.PrettyEmbedYoutube
[jonnitto.plyr]: https://github.com/jonnitto/Jonnitto.Plyr
[settings.jonnitto.yaml]: Configuration/Settings.Jonnitto.yaml
[`jonnitto.prettyembedvimeo:component.vimeo`]: Resources/Private/Fusion/Component/Vimeo.fusion
[`jonnitto.prettyembedvimeo:content.vimeo`]: Resources/Private/Fusion/Content/Vimeo.fusion
