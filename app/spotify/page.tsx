'use client';

import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getSpotifyInfo } from '@/lib/spotify';
import Link from 'next/link';

// export const metadata: Metadata = {
//   title: 'Recently listened',
//   description: 'Here are my recently listened musics on spotify',
// };

function Card({
  singer,
  name,
  image,
  link,
}: {
  singer: string;
  name: string;
  image: string;
  link: string;
}) {
  return (
    <>
      <Link href={link}>
        <div className="h-52 rounded-md relative border my-2 overflow-hidden">
          <Image
            src={image}
            alt={name}
            width="550"
            height="550"
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute left-5">
            <h3 className="text-2xl">{name}</h3>
            <p>{singer}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default function Spotify() {
  const [musics, setMusics] = useState<
    {
      singer: string[];
      name: string;
      image: string;
      link: string;
    }[]
  >([]);

  const { data, isError, isFetched } = useQuery(
    'played',
    async () =>
      await getSpotifyInfo(
        'https://api.spotify.com/v1/me/player/recently-played'
      )
  );

  useEffect(() => {
    if (isFetched && !isError) {
      data.items.forEach((music: any) => {
        const artists = music.track.artists.map((artists: any) => artists.name);
        setMusics((old: any) => [
          ...old,
          {
            name: music.track.name,
            singer: artists,
            image: music.track.album.images[0].url,
            link: music.track.external_urls.spotify,
          },
        ]);
      });
    }
  }, [data]);

  return (
    <>
      <div className="max-w-full">
        {musics.map((music, index) => (
          <Card
            key={index}
            image={music.image}
            name={music.name}
            singer={music.singer.join(' & ')}
            link={music.link}
          />
        ))}
      </div>
    </>
  );
}
