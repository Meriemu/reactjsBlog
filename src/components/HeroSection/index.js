import React, { useState } from "react";
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { 
HeroContainer,
HeroBg,
VideoBg,
HeroContent,
HeroH1,
HeroP,
HeroBtnWrapper,
ArrowForward,
ArrowRight
} from "./HeroElements";

const HeroSection = () => {
	const [hover, setHover] = useState(false);
	const handleHover = () => {
		setHover(!hover);
	}
  return (
	<HeroContainer>
		<HeroBg>
			<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
		</HeroBg>
		<HeroContent>
			<HeroH1>  Virtual Banking Made Easy</HeroH1>	
			<HeroP>
				Sign up for a new account today and receine 0$ :D
			</HeroP>
			<HeroBtnWrapper>
				<Button to="signup" 
					onMouseEnter={handleHover} 
					onMouseLeave={handleHover}
					primary='true' dark="true"
				>
					 Get started { hover ? <ArrowForward /> : <ArrowRight /> }
				</Button>
			</HeroBtnWrapper>
		</HeroContent>
	</HeroContainer>
  );
};

export default HeroSection;
