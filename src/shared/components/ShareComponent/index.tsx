import React from 'react';
import { generatePath } from 'react-router';
import { routerVideo, routerVideoDetail } from '@view/VideoDetail/router';

interface IShareComponent {
    icon: any,
    className?: string,
    videoId: string | number
}

const ShareComponent = ({ icon, className, videoId }: IShareComponent) => {
    const linkShare = React.useMemo(() => {
        if (videoId == null) return undefined;
        const url =`https://${window.location.host}/#` + generatePath(routerVideo.path, { idVideo: videoId })
        return encodeURIComponent(url)
    }, [videoId])

    return (
        <div
            className={className}
            data-href="https://developers.facebook.com/docs/plugins/"
            data-layout="button"
            data-size="small"
        >
            <a
                aria-label="share"
                target="_blank"
                href={`https://www.facebook.com/sharer/sharer.php?u=${linkShare}`}
                className="fb-xfbml-parse-ignore button-share"
            >
                {icon}
            </a>
        </div>
    )
}

export default React.memo(ShareComponent)
