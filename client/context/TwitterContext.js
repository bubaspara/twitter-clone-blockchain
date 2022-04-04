import { useState, useEffect, createContext } from 'react'
import { useRouter } from 'next/router'
import { client } from '../lib/client'

export const TwitterContext = createContext()

export const TwitterProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('loading')
  const [currentAccount, setCurrentAccount] = useState('')
  const router = useRouter()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      //Opens MetaMask and asks to login
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        //Connected
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        //Not connected
        setAppStatus('notConnected')
        router.push('/')
      }
    } catch (error) {
      setAppStatus('error')
    }
  }
  //Initiate MetaMask wallet connection
  const connectToWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      setAppStatus('loading')

      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      setAppStatus('error')
    }
  }

  const createUserAccount = async (userWalletAddress = currentAccount) => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const userDoc = {
        _type: 'users',
        _id: userWalletAddress,
        name: 'Unnamed',
        isProfileImageNft: false,
        profileImage:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ASample_User_Icon.png&psig=AOvVaw3aw2L0uR1bvYZtx6KRSRZs&ust=1649184158351000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDFwPGH-_YCFQAAAAAdAAAAABAD',
        walletAddress: userWalletAddress,
        coverImage:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcover-art&psig=AOvVaw3BeqrYzbpaxQKv40GdMgd8&ust=1649185646259000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOCDiLeN-_YCFQAAAAAdAAAAABAJ',
      }

      await client.createIfNotExists(userDoc)
      setAppStatus('connected')
    } catch (error) {
      setAppStatus('error')
      router.push('/')
    }
  }

  return (
    <TwitterContext.Provider
      value={{ appStatus, currentAccount, connectToWallet }}
    >
      {children}
    </TwitterContext.Provider>
  )
}
