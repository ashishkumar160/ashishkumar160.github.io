import { Box, Card, CardContent, CardHeader, Container, Typography, Link, Grid } from '@material-ui/core';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import PersonalProjectCard from '../components/personal-project-card';
import ProfessionalExperienceTimeline from '../components/professional-experience-timeline';
import { getResumeData } from '../lib/resume';
import { Resume } from '../types';

export const getStaticProps: GetStaticProps = async (context) => {
  const resume = getResumeData();
  return {
    props: {
      resume
    }
  }
}

type HomeProps = {
  resume: Resume
}

export default function Home({ resume }: HomeProps) {
  return (
    <>
      <Head>
        <title>{resume.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md">
        <Box py={10}>
          <Box textAlign="center">
            <Typography variant="h3" gutterBottom><span role="img" aria-label="Hi">👋</span>, I am {resume.name}</Typography>
            {resume.designation && <Typography variant="h5" gutterBottom>{resume.designation}</Typography>}
          </Box>
        </Box>
        <Box my={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>About me</Typography>
              <Typography variant="body1" gutterBottom>{resume.aboutMe}</Typography>
            </CardContent>
          </Card>
        </Box>
        {resume.personalProjects && resume.personalProjects.length > 0 && <Box my={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Personal Projects</Typography>
              <Grid container spacing={2}>
                {resume.personalProjects.map((project) => <Grid key={project.name} item xs={12} sm={6}>
                  <PersonalProjectCard 
                    projectLink={project.link}
                    projectName={project.name}
                    projectDescription={project.description}
                  />
                </Grid>)}
              </Grid>
            </CardContent>
          </Card>
        </Box>}
        {resume.professionalExperience && resume.professionalExperience.length > 0 && <Box my={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Professional Experience</Typography>
              <Box my={2}>
                <ProfessionalExperienceTimeline experienceData={resume.professionalExperience} />
              </Box>
            </CardContent>
          </Card>
        </Box>}
        {resume.skills && resume.skills.length > 0 && <Box my={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Skills</Typography>
              <Box my={2}>
                <Grid container spacing={2}>
                  {resume.skills.map((skill) => <Grid item key={skill.name}>
                    <Box component="fieldset" border="transparent">
                      <Typography gutterBottom>{skill.name}</Typography>
                      <Rating value={skill.rating} precision={0.5} readOnly></Rating>
                    </Box>
                  </Grid>)}
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Box>}
        <Box my={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Education</Typography>
              {resume.education.map((education) => <Box my={2} key={education.degree}>
                <Typography variant="body2" color="textSecondary" gutterBottom>{education.period}</Typography>
                <Typography gutterBottom>{education.degree}</Typography>
                <Typography gutterBottom>{education.university}</Typography>
                <Typography gutterBottom>{education.location}</Typography>
              </Box>)}
            </CardContent>
          </Card>
        </Box>
        {resume.researchPublications && resume.researchPublications.length > 0 && <Box my={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Research Publications</Typography>
              {resume.researchPublications.map((researchPublication) => <Box my={2} key={researchPublication}>
                <Typography gutterBottom>
                  {researchPublication}
                </Typography>
              </Box>)}
            </CardContent>
          </Card>
        </Box>}
        {resume.conferencePapers && resume.conferencePapers.length > 0 && <Box my={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Conference Papers</Typography>
              {resume.conferencePapers.map((conferencePaper) => <Box my={2} key={conferencePaper}>
                <Typography gutterBottom>
                  {conferencePaper}
                </Typography>
              </Box>)}
            </CardContent>
          </Card>
        </Box>}
        {resume.tranings && resume.tranings.length > 0 && <Box my={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Trainings</Typography>
              <Box my={2}>
                {resume.tranings.map((training) => <Box my={2} key={training.name}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>{training.period}</Typography>
                  <Typography gutterBottom>{training.name}</Typography>
                  <Typography gutterBottom>{training.certificationAuthority}</Typography>
                </Box>)}
              </Box>
            </CardContent>
          </Card>
        </Box>}
        {resume.socialMedia && Object.keys(resume.socialMedia).length > 0 && <Box my={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Let's Connect!</Typography>
              <Grid container spacing={2}>
                {resume.socialMedia.linkedIn && <Grid item>
                  <Link href={resume.socialMedia.linkedIn}>
                    <LinkedIn fontSize="large" />
                  </Link>
                </Grid>}
                {resume.socialMedia.github && <Grid item>
                  <Link href={resume.socialMedia.github}>
                    <GitHub fontSize="large" />
                  </Link>
                </Grid>}
                {resume.socialMedia.mail && <Grid item>
                  <Link href={`mailto:${resume.socialMedia.mail}`}>
                    <Email fontSize="large" />
                  </Link>
                </Grid>}
              </Grid>
            </CardContent>
          </Card>
        </Box>}
      </Container>
    </>
  )
}
