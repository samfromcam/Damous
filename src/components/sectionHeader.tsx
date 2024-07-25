import './sectionHeader.css'
import "@fontsource/poppins/300.css"

type SectionProps = {
    title: string;
    headline: string;
    description: string;
}

export default function SectionHeader(props: SectionProps) {
  return (
    <>
      <div className="sectionHeader">
        <p className="sectionTitle">{props.title}</p>
        <p className="sectionHeadline">{props.headline}</p>
        <p className="sectionDescription">{props.description}</p>
      </div>
    </>
  )
}
