'use client';

import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { BsSpotify } from 'react-icons/bs';
import Link from 'next/link';
import { getSpotifyInfo } from '../lib/spotify';

export function Playing() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicInfo, setMusicInfo] = useState({
    image: '',
    singer: [''],
    name: '',
  });
  const { data, isError, isLoading, isFetched } = useQuery(
    'spotify',
    async () =>
      await getSpotifyInfo(
        'https://api.spotify.com/v1/me/player/currently-playing'
      )
  );

  useEffect(() => {
    if (isFetched && !isError) {
      setIsPlaying(data.is_playing);
      if (!isPlaying) return;
      const artists = data.item.artists.map((artists: any) => artists.name);
      setMusicInfo({
        name: data.item.name,
        image: data.item.album.images[0],
        singer: artists,
      });
    }
  }, [data]);

  return (
    <Link href={'/spotify'}>
      <div className="absolute top-10 right-10 flex text-sm">
        {!isLoading ? (
          <>
            <BsSpotify />
            &nbsp;
            {isPlaying ? (
              <>
                {musicInfo.singer.join(' & ')} - {musicInfo.name}
              </>
            ) : (
              <>Not playing</>
            )}
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </Link>
  );
}
