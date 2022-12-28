import { useState } from 'react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'

// Use the JWT key
import pinataSDK from '@pinata/sdk'
const pinata = new pinataSDK({ pinataJWTKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjMmI2ZGM0MC1kMzA4LTQ0NGQtYjFmMy1jYzc5MTZlNDVhOWYiLCJlbWFpbCI6InByYXRpa2phbGFuMTFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjVkMjAzMGQ5NmRiOGJkMDQ0Y2I2Iiwic2NvcGVkS2V5U2VjcmV0IjoiZDQ2ODg5NWI5YWJjMmNlMjBlZmU5NThkMGRmNjFhNDA1ZWI2OGFkODVlMWMwZDE5MWExMDE1NWRhNDUzYWQ1MyIsImlhdCI6MTY3MjIxNTYyNH0.mGsDynzeGr6ctfFPdJZPXEpsNoHqxlV3zyo_wqf-SNA' });

import {
    marketplaceAddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

export default function CreateItem() {
    const [fileUrl, setFileUrl] = useState(null)
    const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
    const router = useRouter()

    async function onChange(e) {
        const fs = require('fs');
        const readableStreamForFile = await fs.createReadStream('../public/yukino.jpeg');
        const options = {
            pinataMetadata: {
                name: MyCustomName,
                keyvalues: {
                    customKey: 'customValue',
                    customKey2: 'customValue2'
                }
            },
            pinataOptions: {
                cidVersion: 0
            }
        };

        pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
            //handle results here
            console.log(result);
        }).catch((err) => {
            //handle error here
            console.log(err);
        });
    }

    // async function uploadToIPFS() {
    //     const { name, description, price } = formInput
    //     if (!name || !description || !price || !fileUrl) return
    //     /* first, upload metadata to IPFS */
    //     const data = JSON.stringify({
    //         name, description, image: fileUrl
    //     })
    //     try {
    //         const added = await client.add(data)
    //         const url = `https://ipfs.infura.io/ipfs/${added.path}`
    //         /* after metadata is uploaded to IPFS, return the URL to use it in the transaction */
    //         return url
    //     } catch (error) {
    //         console.log('Error uploading file: ', error)
    //     }
    // }

    // async function listNFTForSale() {
    //     const url = await uploadToIPFS()
    //     const web3Modal = new Web3Modal()
    //     const connection = await web3Modal.connect()
    //     const provider = new ethers.providers.Web3Provider(connection)
    //     const signer = provider.getSigner()

    //     /* create the NFT */
    //     const price = ethers.utils.parseUnits(formInput.price, 'ether')
    //     let contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
    //     let listingPrice = await contract.getListingPrice()
    //     listingPrice = listingPrice.toString()
    //     let transaction = await contract.createToken(url, price, { value: listingPrice })
    //     await transaction.wait()

    //     router.push('/')
    // }

    return (
        <div className="flex justify-center">
            <div className="w-1/2 flex flex-col pb-12">
                <input
                    placeholder="Asset Name"
                    className="mt-8 border rounded p-4"
                    onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
                />
                <textarea
                    placeholder="Asset Description"
                    className="mt-2 border rounded p-4"
                    onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
                />
                <input
                    placeholder="Asset Price in Eth"
                    className="mt-2 border rounded p-4"
                    onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
                />
                <input
                    type="file"
                    name="Asset"
                    className="my-4"
                    onChange={onChange}
                />
                {
                    fileUrl && (
                        <img className="rounded mt-4" width="350" src={fileUrl} />
                    )
                }
                <button onClick={() => { }} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
                    Create NFT
                </button>
            </div>
        </div>
    )
}