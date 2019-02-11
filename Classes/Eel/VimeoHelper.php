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
    function data($id)
    {
        if (!$id) {
            return false;
        }
        $data = json_decode(@file_get_contents('http://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' . $id . '&width=2560'));
        if (!$data) {
            return false;
        }
        return [
            'title' => $data->title,
            'description' => $data->description,
            'duration' => $data->duration,
            'thumbnail' => $data->thumbnail_url
        ];
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
