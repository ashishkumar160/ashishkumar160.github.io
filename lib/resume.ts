import fs from 'fs';
import path from 'path';

const resumeDirectory = path.join(process.cwd(), 'resume');

export function getResumeData() {
    const resume = fs.readFileSync(path.join(resumeDirectory, 'resume.json'));
    return JSON.parse(resume.toString());
}