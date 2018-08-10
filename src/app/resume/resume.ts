export interface Resume {
  'basics'?: {
    'name'?: string;
    // e.g. Richard Hendriks
    'birthdate'?: string;
    // resume.json uses the ISO 8601 date standard e.g. 2014-06-29
    'label'?: string;
    // e.g. Web Developer
    'image'?: string;
    // URL (as per RFC 3986) to a image in JPEG or PNG format
    'email'?: string;
    // e.g. thomas@gmail.com
    'phone'?: string;
    // Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923
    'url'?: string;
    // URL (as per RFC 3986) to your website, e.g. personal homepage
    'summary'?: string;
    // Write a short 2-3 sentence biography about yourself
    'location'?: {
      // e.g. 1234 Glücklichkeit Straße
      'address'?: string;
      'postalCode'?: string;
      'city'?: string;
      'countryCode'?: string;
      // code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN
      'region'?: string;
      // The general region where you live. Can be a US state, or a province, for instance.
      [k: string]: any;
    };
    'profiles'?: {
      // Specify any number of social networks that you participate in
      'network'?: string;
      // e.g. Facebook or Twitter
      'username'?: string;
      // e.g. neutralthoughts
      'url'?: string;
      // e.g. http://twitter.example.com/neutralthoughts
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  'work'?: {
    'name'?: string;
    // e.g. Facebook
    'description'?: string;
    // e.g. Social Media Company
    'position'?: string;
    // e.g. Software Engineer
    'url'?: string;
    // e.g. http://facebook.example.com
    'startDate'?: string;
    // resume.json uses the ISO 8601 date standard e.g. 2014-06-29
    'endDate'?: string;
    // e.g. 2012-06-29
    'summary'?: string;
    // Give an overview of your responsibilities at the company
    'highlights'?: string[];
    // Specify multiple accomplishments
    [k: string]: any;
  }[];
  'volunteer'?: {
    'organization'?: string;
    // e.g. Facebook
    'position'?: string;
    // e.g. Software Engineer
    'url'?: string;
    // e.g. http://facebook.example.com
    'startDate'?: string;
    // resume.json uses the ISO 8601 date standard e.g. 2014-06-29
    'endDate'?: string;
    // e.g. 2012-06-29
    'summary'?: string;
    // Give an overview of your responsibilities at the company
    'highlights'?: string[];
    // Specify accomplishments and achievements
    [k: string]: any;
  }[];
  'education'?: {
    'institution'?: string;
    // e.g. Massachusetts Institute of Technology
    'area'?: string;
    // e.g. Arts
    'studyType'?: string;
    // e.g. Bachelor
    'startDate'?: string;
    // e.g. 2014-06-29
    'endDate'?: string;
    // e.g. 2012-06-29
    'gpa'?: string;
    // grade point average, e.g. 3.67/4.0
    'courses'?: string[];
    // List notable courses/subjects
    [k: string]: any;
  }[];
  'awards'?: {
    // Specify any awards you have received throughout your professional career
    'title'?: string;
    // e.g. One of the 100 greatest minds of the century
    'date'?: string;
    // e.g. 1989-06-12
    'awarder'?: string;
    // e.g. Time Magazine
    'summary'?: string;
    // e.g. Received for my work with Quantum Physics
    [k: string]: any;
  }[];
  'publications'?: {
    // Specify your publications through your career
    'name'?: string;
    // e.g. The World Wide Web
    'publisher'?: string;
    // e.g. IEEE, Computer Magazine
    'releaseDate'?: string;
    // e.g. 1990-08-01
    'url'?: string;
    // e.g. http://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html
    'summary'?: string;
    // Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML.
    [k: string]: any;
  }[];
  'skills'?: {
    // List out your professional skill-set
    'name'?: string;
    // e.g. Web Development
    'level'?: string;
    // e.g. Master
    'keywords'?: string[];
    // List some keywords pertaining to this skill
    [k: string]: any;
  }[];
  'languages'?: {
    // List any other languages you speak
    'language'?: string;
    // e.g. English, Spanish
    'fluency'?: string;
    // e.g. Fluent, Beginner
    [k: string]: any;
  }[];
  'interests'?: {
    'name'?: string;
    // e.g. Philosophy
    'keywords'?: string[];
    [k: string]: any;
  }[];
  'references'?: {
    // List references you have received
    'name'?: string;
    // e.g. Timothy Cook
    'reference'?: string;
    // e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations when it came to doing nothing.
    [k: string]: any;
  }[];
  'projects'?: {
    // Specify career projects
    'name'?: string;
    // e.g. The World Wide Web
    'description'?: string;
    // Short summary of project. e.g. Collated works of 2017.
    'highlights'?: string[];
    // Specify multiple features
    'keywords'?: string[];
    // Specify special elements involved
    'startDate'?: string;
    // resume.json uses the ISO 8601 date standard e.g. 2014-06-29
    'endDate'?: string;
    // e.g. 2012-06-29
    'url'?: string;
    // e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html
    'roles'?: string[];
    // Specify your role on this project or in company
    'entity'?: string;
    // Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'
    'type'?: string;
    //  e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'
    [k: string]: any;
  }[];
  'meta'?: {
    // The schema version and any other tooling configuration lives here
    'canonical'?: string;
    // URL (as per RFC 3986) to latest version of this document
    'version'?: string;
    // A version field which follows semver - e.g. v1.0.0
    'lastModified'?: string;
    // Using ISO 8601 with YYYY-MM-DDThh:mm:ss
    [k: string]: any;
  };
}
