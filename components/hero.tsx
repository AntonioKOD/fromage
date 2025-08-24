'use client'

import {useState, useEffect} from 'react'
import ScrollExpandMedia from './ui/scroll-expansion-hero'
import charcuterie_photo from "../public/charcuterie_photo.jpeg"
import ContentSection from './content-section'

export default function Hero() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    
    return (
        <>
        {isClient && 
            <ScrollExpandMedia 
                mediaType="video"
                mediaSrc={mediaContent.video.src}
                posterSrc={mediaContent.video.poster}
                bgImageSrc={mediaContent.video.background}
                title={mediaContent.video.title}
                date={mediaContent.video.date}
                scrollToExpand={mediaContent.video.scrolltoExpand}
            >
                <MediaContent mediaType="video" />
            </ScrollExpandMedia>
        }
        </>
    )
}

interface MediaAbout {
    overview: string;
    conclusion: string;

}
interface MediaContent {
    src: string;
    poster?: string;
    background: string;
    title: string;
    date: string;
    scrolltoExpand: string;
    about: MediaAbout;
}

interface MediaContentCollection {
    [key: string]: MediaContent;
}


const mediaContent: MediaContentCollection = {
    video: {
        src: '/charcuterie.mp4',
        poster: charcuterie_photo.src,
        background: charcuterie_photo.src,
        title: "Sip. Savour.",
        date: "Fromage",
        scrolltoExpand: "Scroll to Explore",
        about: {
            overview: "A delightful exploration of South Boston's culinary scene.",
            conclusion: "Join us for a taste of the best that South Boston has to offer."
        }
    },
}

const MediaContent = ({mediaType}: {mediaType: 'video' | 'image'}) => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const currentMedia = mediaContent[mediaType];


    return (
        <div>
            <ContentSection/>
        </div>
    )
}

export const VideoExpansionTextBlend = () => {
  const mediaType = 'video';
  const currentMedia = mediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrolltoExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansionTextBlend = () => {
  const mediaType = 'image';
  const currentMedia = mediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrolltoExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const VideoExpansion = () => {
  const mediaType = 'video';
  const currentMedia = mediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrolltoExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType = 'image';
  const currentMedia = mediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrolltoExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

