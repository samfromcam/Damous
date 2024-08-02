import './Banner.css'
import "@fontsource/poppins/300.css"

type BannerProps = {
    title: string;
}

export default function Banner(props: BannerProps) {
  return (
    <>
      <div className="banner">
        <p className="bannerTitle">{props.title}</p>
    </div>
    </>
  )
}
