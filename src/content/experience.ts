import type { ExperienceEntry } from './types'

export const experience: ExperienceEntry[] = [
  {
    company: 'dpa-IT Services GmbH',
    title: 'Software Engineer',
    start: 'Jan 2021',
    end: 'Present',
    location: 'Hamburg, Germany',
  },
  {
    company: 'dpa - digital services',
    title: 'App & Service Manager',
    start: 'Feb 2020',
    end: 'Jan 2021',
    location: 'Hamburg, Germany',
    summary:
      'Owned the ePaper apps (Android and iOS) services end to end, acting as the central point of contact for publisher customers across Germany on service definition, branding and releases.',
    highlights: [
      'Ran service transition work — change request management, release planning and rollout — plus service-level reporting through the team’s ticketing system.',
      'Investigated and documented incidents and drove root-cause fixes.',
      'Main point of contact, alongside Business Relationship Management, for publisher customers on the strategic direction of the ePaper apps services, including backend and web technology, aligning change requests and reporting relevant updates.',
      'Worked closely with the team to analyze and resolve more complex issues together.',
    ],
  },
  {
    company: 'dpa - digital services',
    title: 'Junior Web Developer',
    start: 'Apr 2017',
    end: 'Jan 2020',
    location: 'Greater Hamburg Area',
  },
  {
    company: 'EnergyQuants',
    title: 'Junior Consultant',
    start: 'Aug 2016',
    end: 'Dec 2016',
    location: 'The Randstad, Netherlands',
    highlights: [
      'Developed and implemented financial models and algorithms using MATLAB, Excel and VBA.',
      'Implemented web applications in HTML, CSS and JavaScript to client requirements.',
      'Collaborated closely with a range of international clients to understand their business needs and challenges.',
    ],
  },
  {
    company: 'University of Wuppertal',
    title: 'Web Developer',
    start: 'Dec 2013',
    end: 'Sep 2014',
    location: 'Wuppertal, Germany',
    summary: 'Built the CSiS department website within TYPO3 CMS.',
    links: [{ label: 'csis.uni-wuppertal.de', href: 'http://www.csis.uni-wuppertal.de/en/' }],
  },
]
