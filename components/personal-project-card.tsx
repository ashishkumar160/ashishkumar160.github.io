import { Box, Link, Card, CardContent, Typography } from '@material-ui/core';

type PersonalProjectCardProps = {
    projectLink: string;
    projectName: string;
    projectDescription: string;
}

export default function PersonalProjectCard({ projectLink, projectName, projectDescription }: PersonalProjectCardProps) {
    return (
        <Link href={projectLink} color="inherit" target="_blank">
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>{projectName}</Typography>
                    <Typography variant="body1" gutterBottom>{projectDescription}</Typography>
                </CardContent>
            </Card>
        </Link>
    )
}