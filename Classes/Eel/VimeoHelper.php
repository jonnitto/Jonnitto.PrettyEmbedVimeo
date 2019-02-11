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
     * Get Vimeo video id from url
     *
     * Supported url formats -
     *
     * https://vimeo.com/11111111
     * http://vimeo.com/11111111
     * https://www.vimeo.com/11111111
     * http://www.vimeo.com/11111111
     * https://vimeo.com/channels/11111111
     * http://vimeo.com/channels/11111111
     * https://vimeo.com/groups/name/videos/11111111
     * http://vimeo.com/groups/name/videos/11111111
     * https://vimeo.com/album/2222222/video/11111111
     * http://vimeo.com/album/2222222/video/11111111
     * https://vimeo.com/11111111?param=test
     * http://vimeo.com/11111111?param=test
     *
     * @param string $url The URL
     *
     * @return string the video id extracted from url
     */

    function parseID($url) {
        if (!$url) {
            return false;
        }
        $regs = array();
        if (preg_match('%^https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)(?:[?]?.*)$%im', $url, $regs)) {
            return $regs[3];
        }
        return $url;
    }

    /**
     * Grab the url of a image publicly embeddable video hosted on vimeo
     * @param string $video_id The "id" of a video
     * @return string The data or false if there's an error
     */
    function data($id)
    {
        if (!$id) {
            return false;
        }
        $data = json_decode(@file_get_contents('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' . $id . '&width=2560'));
        if (!$data) {
            return false;
        }
        return $data;
    }

    function title($id) {
        $data = $this->data($id);
        if (!$data) {
            return false;
        }
        return $data->title;
    }

    function thumbnail($id) {
        $data = $this->data($id);
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
