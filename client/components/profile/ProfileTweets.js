import { useEffect, useContext, useState } from 'react'
// import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName: 'Mirko',
    userName: '0x...',
    avatar: 'The last airbender',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.000Z',
  },
  {
    displayName: 'Karlo',
    userName: '0x...',
    avatar: 'The last airbender',
    text: 'gn',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.000Z',
  },
  {
    displayName: 'Ivo',
    userName: '0x0000000000',
    avatar: 'The last airbender',
    text: 'ga',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.000Z',
  },
]

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post
          key={index}
          // displayName={
          //   author.name === 'Unnamed'
          //     ?
          //      `${author.walletAddress.slice(
          //         0,
          //         4
          //       )}...${author.walletAddress.slice(41)}`
          //     : author.name
          // }
          // userName={`${author.walletAddress.slice(
          //   0,
          //   4
          // )}...${author.walletAddress.slice(41)}`}
          displayName="Mirko"
          userName={'Username'}
          text={tweet.text}
          // avatar={author.profileImage}
          avatar=""
          timestamp={tweet.timestamp}
          // isProfileImageNft={author.isProfileImageNft}
          isProfileImageNft={true}
        />
      ))}
    </div>
  )
}

export default ProfileTweets
