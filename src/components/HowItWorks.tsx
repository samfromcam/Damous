import './HowItWorks.css'
import SectionHeader from './sectionHeader'
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/300.css"

export default function HowItWorks() {
  return (
    <>
    <SectionHeader 
          title="HOW IT WORKS"
          headline="Getting Your Data"
          description="Let us prepare your tailored datasets while you work on what’s important!"
        />
    <div className='HowItWorks'>
        <div className="Wrapper">
            <div className="Steps">
                <div className="Step">
                    <p className="title">Tell us you needs</p>
                    <p className="descript">Are you considering a new project or exploring new business opportunities? What type of data and how much are you aiming to obtain?</p>
                    <hr className="solid"></hr>
                </div>
                <div className="Step">
                    <p className="title">We'll get your data</p>
                    <p className="descript">After confirming with you with the data collection methods, we would proceed with data procurement in a ethical and legal fashion</p>
                    <hr className="solid"></hr>
                </div>
                <div className="Step">
                    <p className="title">Refine the data</p>
                    <p className="descript">Clean and process your data so it is reliable, friendly, and more suitable for your intended usage</p>
                    <hr className="solid"></hr>
                </div>
                <div className="Step">
                    <p className="title">Data delivery and adjustments</p>
                    <p className="descript">We will pass along the data to you so you can continue your ventures. Adjustments you wish to make to the dataset could also be made by us</p>
                    <hr className="solid"></hr>
                </div>
            </div>
            <img src='./step1.png'></img>
        </div>
    </div>
    </>
    
  )
}
