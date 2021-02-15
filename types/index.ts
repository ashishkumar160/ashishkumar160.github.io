export type SocialMedia = {
    linkedIn?: string,
    github?: string,
    mail?: string
}

export type Training = {
    period: string,
    name: string,
    certificationAuthority: string
}

export type Education = {
    period: string,
    degree: string,
    university: string,
    location: string
}

export type Skill = {
    name: string,
    rating: number
}

export type ProfessionalExperience = {
    period: string,
    position: string,
    companyName: string,
    achievements: string[]
}

export type PersonalProject = {
    name: string,
    description: string,
    link: string
}

export type Resume = {
    name: string,
    designation?: string,
    aboutMe: string,
    personalProjects?: PersonalProject[],
    professionalExperience?: ProfessionalExperience[],
    skills?: Skill[],
    education: Education[],
    researchPublications?: string[],
    conferencePapers?: string[],
    tranings?: Training[],
    socialMedia?: SocialMedia
}