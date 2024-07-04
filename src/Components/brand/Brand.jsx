import React from 'react'
import './Brand.css'
import google from "../../assets/google.png"
import atlassian from "../../assets/atlassian.png"
import dropbox from "../../assets/dropbox.png"
import slack from "../../assets/slack.png"
import shopify from "../../assets/shopify.png"

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
  )
}

export default Brand