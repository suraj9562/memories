import Form from "../components/form/Form"
import Header from "../components/header/Header"
import Posts from "../components/posts/Posts"

import Styles from "./landingPage.module.css"

function LandingPage() {
  return (
    <div className={Styles.container}>
        <Header />
        <div className={Styles.grid}>
          <div className={Styles.posts}>
            <Posts />
          </div>
          <div className={Styles.form}>
            <Form />
          </div>
        </div>
    </div>
  )
}

export default LandingPage