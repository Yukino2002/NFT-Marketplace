import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Metaverse Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <span className="mr-4 text-pink-500">
              Home
            </span>
          </Link>
          <Link href="/create-nft">
            <span className="mr-6 text-pink-500">
              Mint & Sell NFT
            </span>
          </Link>
          <Link href="/my-nfts">
            <span className="mr-6 text-pink-500">
              My NFTs
            </span>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp