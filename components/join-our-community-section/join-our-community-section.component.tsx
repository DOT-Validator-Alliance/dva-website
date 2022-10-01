// Utils
import styled from "styled-components"

const JoinOurCommunitySection: React.FC = () => {
	return (
		<JoinOurCommunitySectionContainer>
			<div>
				<Title>Join our community!</Title>
				<Description>
					Get help and the latest news from Polkadot ecosystem.
				</Description>
			</div>
			<div></div>
		</JoinOurCommunitySectionContainer>
	)
}

export default JoinOurCommunitySection

const JoinOurCommunitySectionContainer = styled.section`
	position: relative;
	max-width: 125rem;
	margin: 15rem auto 0;
	padding: 6rem;
	background: ${({ theme }) => theme.joinOurCommunitySection.backgroundColor};
`

const Title = styled.h2`
	font-size: 4rem;
`

const Description = styled.p`
	font-size: 1.8rem;
	color: ${({ theme }) => theme.joinOurCommunitySection.descriptionColor};
`
