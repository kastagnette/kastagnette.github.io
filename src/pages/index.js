import * as React from "react"
import '../utils/global.css'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Kastagnette</title>
      <div className="flex flex-wrap flex-row">
        <div className="flex flex-wrap flex-col content-end bg-gray-50 w-1/2">

          <div className="min-h-screen flex flex-wrap flex-row content-center">
            <div className="flex flex-col w-36 md:w-64">
              <img className="self-center w-24 h-24 md:w-36 md:h-36 rounded-full border-solid border-4 border-gray-200" alt="shoma" src="/shoma.jpeg" />
              <p className="font-sans text-center text-gray-700 text-xl md:text-4xl mt-2">Shoma Saito</p>
              <p className="font-sans text-center text-gray-600 font-light md:text-lg text-sm">@tantakan</p>
              <div className="flex flex-wrap flex-row self-center mt-8 md:mt-16">
                <a className="mx-2" target="_blank" rel="noreferrer" href="https://twitter.com/tantakan_">
                  <img className="w-6 md:w-8" alt="twitter" src="twitter_logo_icon_black.svg" />
                </a>
                <a className="mx-2" target="_blank" rel="noreferrer" href="https://www.facebook.com/shoma.saito.75">
                  <img className="w-6 md:w-8" alt="facebook" src="facebook_logo_icon_black.svg" />
                </a>
                <a className="mx-2" target="_blank" rel="noreferrer" href="https://www.instagram.com/tantakan_">
                  <img className="w-6 md:w-8" alt="instagram" src="instagram_logo_icon_black.svg" />
                </a>
              </div>
            </div>
          </div>

        </div>
        <div className="bg-gray-800  w-1/2">

          <div className="min-h-screen flex flex-wrap flex-row content-center">
            <div className="flex flex-col w-36 md:w-64">
              <img className="self-center w-24 h-24 md:w-36 md:h-36 rounded-full border-solid border-4 border-gray-600" alt="eri" src="/eri.jpeg" />
              <p className="font-sans text-center text-gray-200 text-xl md:text-4xl mt-2">Eri Maeda</p>
              <p className="font-sans text-center text-gray-400 font-light md:text-lg text-sm">@music431per</p>
              <div className="flex flex-wrap flex-row self-center mt-8 md:mt-16">
                <a className="mx-2" target="_blank" rel="noreferrer" href="https://twitter.com/music431per">
                  <img className="w-6 md:w-8" alt="twitter" src="twitter_logo_icon_white.svg" />
                </a>
                <a className="mx-2" target="_blank" rel="noreferrer" href="https://www.facebook.com/music431per">
                  <img className="w-6 md:w-8" alt="facebook" src="facebook_logo_icon_white.svg" />
                </a>
                <a className="mx-2" target="_blank" rel="noreferrer" href="https://www.instagram.com/music431per">
                  <img className="w-6 md:w-8" alt="instagram" src="instagram_logo_icon_white.svg" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default IndexPage
