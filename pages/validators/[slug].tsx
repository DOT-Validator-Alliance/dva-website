// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Components
import Head from "../../components/head/head.component"
import PageLayout from "../../layouts/page/page.layout"
import Image from "../../components/image/image.component"
import Border from "../../components/border/border.component"
import BackButton from "../../components/back-button/back-button.component"
// import ButtonLink from "../../components/button-link/button-link.component"

// Hooks
import { useRouter } from "next/router"
import { useTheme } from "styled-components"
import { useMediaQuery } from "usehooks-ts"

// Types
import { ReactElement } from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { IValidator } from "../../types/validator.types"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    if (!params?.slug)
      return {
        redirect: {
          destination: "/",
        },
        props: {},
      }

    const requireAll = (r: any) => r.keys().map(r)
    const validators: IValidator[] = requireAll(
      require.context("../../validators", false, /\.json$/)
    )

    const uniqueValidators = validators.filter(
      (validator, index, self) =>
        index === self.findIndex((t) => t.id === validator.id)
    )

    const validator: IValidator | undefined = uniqueValidators.find(
      (validator) => validator.meta.slug === params.slug
    )

    if (!validator) {
      return {
        redirect: {
          destination: "/",
        },
        props: {},
      }
    }

    return {
      props: {
        validator,
      },
    }
  } catch (err) {
    // console.log(err)
    return {
      props: { err },
    }
  }
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    // y: 100,
  },
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      // duration: 1,
      // delay: 0.5,
      staggerChildren: 0.2,
      ease: [0.5, 0, 0.56, 0.99],
    },
  },
}

const mobileVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      // delay: 0.2,
      ease: [0.5, 0, 0.56, 0.99],
    },
  },
}

const ItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.5, 0, 0.56, 0.99],
    },
  },
}

const DescriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.5, 0, 0.56, 0.99],
    },
  },
}

const ListItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.5, 0, 0.56, 0.99],
      transition: (i: number) => ({
        delay: 1 + i * 0.2,
        duration: 0.7,
        ease: [0.5, 0, 0.56, 0.99],
      }),
    },
  },
}

const BlopVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: [0.5, 0, 0.56, 0.99],
    },
  },
}

const BorderVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.5, 0, 0.56, 0.99],
    },
  },
}

const ButtonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.5, 0, 0.56, 0.99],
    },
  },
}

export default function ValidatorPage({
  validator,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { asPath, ...rest } = useRouter()
  const theme = useTheme()
  const isMd = useMediaQuery(`(min-width: ${theme.breakpoints.md})`)

  const v = validator as IValidator

  return (
    <>
      <Head
        title={v.meta.title}
        description={v.meta.description}
        image={`https://dotvalidators.org/assets/meta-image.png`}
        url={`https://dotvalidators.org${asPath}`}
      >
        <link rel="canonical" href={`https://dotvalidators.org${asPath}`} />
        <meta property="og:type" content="website" />
      </Head>

      <ValidatorSectionContainer
        variants={variants}
        initial={"hidden"}
        whileInView={"visible"}
        exit={"hidden"}
        viewport={{ once: true }}
      >
        <Col variants={isMd ? DescriptionVariants : mobileVariants}>
          <a href={"/#validators"}>
            <BackButton
              href={"/#validators"}
              variants={isMd ? DescriptionVariants : mobileVariants}
              scroll={false}
            >
              {v.backButton.label}
            </BackButton>
          </a>
          <BlurFigure variants={isMd ? BlopVariants : mobileVariants}>
            <Image
              src={v.blop.src}
              alt={v.blop.alt}
              effect="blur"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "contain" }}
            />
          </BlurFigure>
          <IluFigure
            whileInView={
              isMd ? { y: [0, -15, 0], scale: [1, 0.97, 1] } : undefined
            }
            transition={
              isMd
                ? {
                    duration: 4,
                    repeat: Infinity,
                    // ease: [0.64, 0.33, 0.64, 0.86],
                  }
                : undefined
            }
          >
            <Image
              src={v.image.src}
              alt={v.image.alt}
              width={"100%"}
              height={"100%"}
              effect="blur"
              style={{ objectFit: "contain" }}
            />
          </IluFigure>
        </Col>
        <Col>
          <Title variants={isMd ? ItemVariants : mobileVariants}>
            {v.title}
          </Title>
          <Border variants={isMd ? BorderVariants : mobileVariants} />
          <Description variants={isMd ? DescriptionVariants : mobileVariants}>
            {v.description}
          </Description>

          <ValidatorsContainer>
            <ValidatorsLabel
              variants={isMd ? DescriptionVariants : mobileVariants}
            >
              {v.listLabel}
            </ValidatorsLabel>
            <ValidatorsList>
              {v.validators.map((validator, index) => (
                <Validator
                  custom={index}
                  key={index}
                  variants={isMd ? ListItemVariants : mobileVariants}
                >
                  <h3>{validator.name}</h3>
                  <p>{validator.address}</p>
                </Validator>
              ))}
            </ValidatorsList>
          </ValidatorsContainer>

          {/* <ButtonLink
						top="4rem"
						variants={isMd ? ButtonVariants : mobileVariants}
						href={v.cta.slug}
					>
						{v.cta.label}
					</ButtonLink> */}
          {!isMd && (
            <a href={v.backButton.slug}>
              <BackButton
                href={v.backButton.slug}
                variants={isMd ? DescriptionVariants : mobileVariants}
              >
                {v.backButton.label}
              </BackButton>
            </a>
          )}
        </Col>
      </ValidatorSectionContainer>
    </>
  )
}

ValidatorPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

const ValidatorSectionContainer = styled(motion.section)`
  position: relative;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  padding: 0 2rem;
  max-width: 125rem;
  margin: 2rem auto 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 2rem;

    @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      grid-template-columns: minmax(44.5rem, 1fr) 1fr;
      justify-items: unset;
      padding: 0 2rem;
    }
  }
`

const Col = styled(motion.div)`
  &:nth-child(2) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-left: 4rem;
      @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
          margin-top: 5rem;
          margin-left: unset;
        }
      }
    }
  }

  &:nth-child(1) {
    position: relative;
    /* border: 1px solid red; */
    @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
          max-height: calc(100vh - 14rem);
          position: sticky;
          top: 12rem;
          /* align-self: start; */
        }
      }
    }
  }
`

const BlurFigure = styled(motion.figure)`
  position: absolute;
  border-radius: 50%;
  width: 75rem;
  height: 75rem;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    }
  }
`

const IluFigure = styled(motion.figure)`
  max-width: 40rem;
  margin: 0 auto;
  width: 100%;
  max-height: 100rem;
  height: 100%;
`

const Title = styled(motion.h2)`
  font-size: 4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.fonts.primary};
`

const Description = styled(motion.p)`
  max-width: 43.8rem;
  color: ${({ theme }) => theme.fonts.secondary};
`

const ValidatorsContainer = styled(motion.div)`
  margin-top: 2rem;
`

const ValidatorsLabel = styled(motion.p)`
  color: ${({ theme }) => theme.validatorSection.labelColor};
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

const ValidatorsList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`

const Validator = styled(motion.li)`
  padding: 1.5rem 2rem;
  backdrop-filter: blur(10px);
  background: ${({ theme }) => theme.validatorSection.listItemBackgroundColor};

  h3 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.validatorSection.listItemTitleColor};
  }

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.validatorSection.listItemAddressColor};
    line-break: anywhere;
  }
`
