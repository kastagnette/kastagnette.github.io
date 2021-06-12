import * as React from "react"
import { Link } from "gatsby"
import '../utils/global.css'

// markup
const IndexPage = () => {
  return (
    <div className="h-screen flex flex-wrap flex-row">
      <div className="flex flex-wrap flex-col content-end bg-gray-50 w-1/2">
        <div className="h-screen flex flex-wrap flex-row content-center">
          <div className="flex flex-col w-72">
            <img className="self-center w-36 rounded-full border-solid border-4 border-gray-200" src="/shoma.jpeg" />
            <p className="font-sans text-center p-2 text-gray-700 text-4xl">Shoma Saito</p>
            <p className="font-sans text-center text-gray-600 font-light text-2xl">Engineer</p>
            <p className="font-sans text-center text-gray-600 font-light text-2xl">Love Tea!</p>
            <div className="flex flex-wrap flex-row self-center p-6">
              <a className="m-2" target="_blank" href="https://twitter.com/tantakan_">
                <img className="w-8" src="twitter_logo_icon.svg" />
              </a>
              <a className="m-2" target="_blank" href="https://www.facebook.com/shoma.saito.75">
                <img className="w-8" src="facebook_logo_icon.svg" />
              </a>
              <a className="m-2" target="_blank" href="https://www.instagram.com/tantakan_">
                <img className="w-8" src="instagram_logo_icon.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800  w-1/2">
        <div className="h-screen flex flex-wrap flex-row content-center">
          <div className="flex flex-col w-72">
            <img className="self-center w-36 rounded-full border-solid border-4 border-gray-600" src="/eri.jpeg" />
            <p className="font-sans text-center p-2 text-gray-200 text-4xl">Eri Maeda</p>
            <p className="font-sans text-center text-gray-400 font-light text-2xl">Engineer</p>
            <p className="font-sans text-center text-gray-400 font-light text-2xl">Love Coffee!</p>
            <div className="flex flex-wrap flex-row self-center p-6">
              <a className="m-2" target="_blank" href="https://twitter.com/music431per">
                <img className="w-8" src="twitter_logo_icon.svg" />
              </a>
              <a className="m-2" target="_blank" href="https://www.facebook.com/music431per">
                <img className="w-8" src="facebook_logo_icon.svg" />
              </a>
              <a className="m-2" target="_blank" href="https://www.instagram.com/music431per">
                <img className="w-8" src="instagram_logo_icon.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
