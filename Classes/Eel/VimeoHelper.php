<?php

namespace Jonnitto\PrettyEmbedVimeo\Eel;


use Neos\Flow\Annotations as Flow;
use Neos\Eel\ProtectedContextAwareInterface;

/**
 * @Flow\Proxy(false)
 */
class VimeoHelper implements ProtectedContextAwareInterface
{


    /**
     * Grab the url of a image publicly embeddable video hosted on vimeo
     * @param string $video_id The "id" of a video
     * @return string The url of the thumbnail, or false if there's an error
     */
    function thumbnail($id)
    {
        if (!$id) {
            return false;
        }
        $url = 'http://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' . $id . '&width=2560';

        if (substr(get_headers($url)[0], 9, 3) != '200') {
            return false;
        }

        $data = json_decode(file_get_contents($url));
        if (!$data) {
            return false;
        }
        return $data->thumbnail_url;
    }

    /**
     * All methods are considered safe
     *
     * @param string $methodName
     * @return boolean
     */
    public function allowsCallOfMethod($methodName)
    {
        return true;
    }
}
