import * as React from 'react';
import * as Markdown from 'react-markdown';

import aboutMarkdown from './about.md';

const About = () => (
    <div>
        <Markdown source={aboutMarkdown} />
    </div>
);

export default About;