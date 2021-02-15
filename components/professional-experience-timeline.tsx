import React from 'react';
import { Button, ButtonBase, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography } from '@material-ui/core';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab';

import { ProfessionalExperience } from '../types';

type ProfessionalExperienceTimelineProps = {
    experienceData: ProfessionalExperience[]
}

export default function ProfessionalExperienceTimeline({ experienceData }: ProfessionalExperienceTimelineProps) {

    const [isDialogOpen, setDialogState] = React.useState(false);
    const [selectedExperience, setSelectedExperience] = React.useState(experienceData[0]);

    const openDialog = () => {
        setDialogState(true);
    }

    const closeDialog = () => {
        setDialogState(false);
    }

    return (
        <>
            <Timeline>
                {experienceData.map((experience) => <TimelineItem key={experience.companyName}>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">{experience.period}</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <ButtonBase onClick={() => {
                                setSelectedExperience(experience);
                                openDialog();
                            }}>
                            <Box minWidth="130px">
                                <Card>
                                    <CardContent>
                                        <Typography variant="body1" gutterBottom>{experience.position}</Typography>
                                        <Typography variant="body1" gutterBottom>{experience.companyName}</Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </ButtonBase>
                    </TimelineContent>
                </TimelineItem>)}
            </Timeline>
            <Dialog open={isDialogOpen} onClose={closeDialog}>
                <DialogTitle>{selectedExperience.position} - {selectedExperience.companyName}</DialogTitle>
                <DialogContent dividers>
                        <ul>
                            {selectedExperience.achievements.map((achievement) => <li key={achievement}><Typography gutterBottom>{achievement}</Typography></li>)}
                        </ul>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus color="primary" onClick={closeDialog}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}