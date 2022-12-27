export interface ICourseList {
  id: string
  shortName: IShortName
  title: string
  body: string
}

export type IShortName = 'btech' | 'be' | 'mtech' | 'phd'

export interface IItem {
  id: string
  title: string
  body: string
}

export interface IString {
  id: string
  text: string
}

export interface ICourse {
  title: string
  intro: IString[]
  shortName: IShortName
  careerProspects: IString[]
  admProcess: IString[]
  intake?: number
  courseFee?: string
  fellowships?: string
  eligibility?: IString[]
  duration?: string
  type?: string
  programEducationalObjectives?: IItem[]
  programSpecificOutcomes?: IItem[]
}

export const coursesList: ICourseList[] = [
  {
    id: 'course1',
    shortName: 'btech',
    title: 'Bachelor of Technology(B.Tech)',
    body: 'B.Tech is a four year full time professional degree programme designed to cater to fresh, promising minds aspiring for a career in the hardware, software and IT industry.',
  },
  {
    id: 'course2',
    shortName: 'be',
    title: 'Bachelor of Engineering(B.E)',
    body: 'B.E. is a four year part time (evening) degree programme tailored for government officials and industry professionals looking for professional advancement.',
  },
  {
    id: 'course3',
    shortName: 'mtech',
    title: 'Master of Technology(M.Tech)',
    body: 'M.Tech is a two year full time professional cum research oriented degree programme to prepare the students for advanced study and/or prospective research in the field of advanced Computer Science, Engineering and Tech.',
  },
  {
    id: 'course4',
    shortName: 'phd',
    title: 'Ph.D. in Computer Engineering',
    body: 'Ph.D. in Computer Engineering is the doctoral degree programme tailored for academics cum research prospective candidates.They are offered the opportunity to pursue theoretical and pragmatic research focussed on a topic of their interest.',
  },
]

export const beData: ICourse = {
  title: 'Bachelor of Engineering (B.E.)',
  intake: 75,
  shortName: 'be',
  courseFee: '38,190/year',
  duration: '4 Years',
  type: 'Part Time',
  intro: [
    {
      id: 'be',
      text: 'B.E. is a four-year part-time (evening) degree programme tailored for government officials and industry professionals looking for professional advancement.',
    },
  ],
  eligibility: [
    {
      id: 'beEl1',
      text: 'Four-year Diploma either in Computer Engineering or in Electronics & Communication Engineering or in a relevant branch is required together with at least two years of professional experience after Diploma. Diploma holders from University Polytechnic, Jamia Millia Islamia securing 70% marks or more are also eligible to appear in the Entrance Test without professional experience.',
    },
    {
      id: 'beEl2',
      text: 'The experience shall be reckoned from the date of declaration of result/date of issue of mark-sheet of qualifying examination or the date of the beginning of professional engagement (whichever is later) till the last date of submission of Application Form. Documentary evidence of declaration of result is required at the time of admission.',
    },
  ],
  admProcess: [
    {
      id: 'beAdmProcess1',
      text: 'Admissions to the B.E. programme is done on the basis of merit determined by an entrance test conducted by JMI. The University shall notify the list of finally selected candidates on its website.',
    },
    {
      id: 'beAdmProcess2',
      text: 'The tentative schedule for the Entrance Test is November every year.',
    },
    {
      id: 'beAdmProcess3',
      text: 'Candidates are advised to check www.jmi.ac.in and www.jmicoe.in for regular updates on B.E. admissions.',
    },
  ],
  careerProspects: [
    {
      id: 'beCareerPros1',
      text: 'A highly successful programme of the Department of Computer Engineering, B.E.(CoE) has proven itself by successfully attaining all its course objectives.',
    },
    {
      id: 'beCareerPros2',
      text: 'Student Pass-outs of the programme have time and again appreciated the course curriculum and how it has helped them in achieving a better grip in the industry.',
    },
  ],
}

export const btechData: ICourse = {
  title: 'Bachelor of Technology (B.Tech)',
  intake: 70,
  shortName: 'btech',
  courseFee: '10,850 / year',
  duration: '8 semesters (4 years)',
  type: 'Full Time',
  intro: [
    {
      id: 'btech',
      text: 'B.Tech is a four-year full-time professional degree programme designed to cater to fresh, promising minds aspiring for a career in the hardware, software and IT industry.',
    },
  ],
  programEducationalObjectives: [
    {
      id: 'btechProgramObj1',
      title: 'Leading a successful Professional Career',
      body: 'Applying their skills as computing professionals for conducting research and/or teaching, designing/developing/maintaining projects in various application areas.',
    },
    {
      id: 'btechProgramObj2',
      title: 'Professional Ethics',
      body: 'Apply the ethical and social aspects of modern computing technology to the design, development, and usage of computing technologies. Pursue Higher',
    },
    {
      id: 'btechProgramObj3',
      title: 'Studies',
      body: 'Improve their computing skills and adopt new computing technologies through self-directed professional development and higher education/training.',
    },
    {
      id: 'btechProgramObj4',
      title: 'Exhibit Teamwork and Leadership',
      body: 'Ready to accept the managerial/leadership role in industry/academic/research institution for the designing and development of projects.',
    },
  ],
  programSpecificOutcomes: [
    {
      id: 'btechPSO1',
      title: 'PSO1',
      body: 'Design and develop Parallel systems using CUDA OPENCL, Microprocessor and Microcontroller based systems.',
    },
    {
      id: 'btechPSO2',
      title: 'PSO2',
      body: 'Apply cryptography techniques for solving network and information security problems.',
    },
    {
      id: 'btechPSO3',
      title: 'PSO3',
      body: 'Apply knowledge of computational techniques of Artificial Intelligence, Language Processing, Data Mining and Machine Learning for solving Engineering problems.',
    },
  ],
  admProcess: [
    {
      id: 'btechAdm1',
      text: 'Admission to B.Tech programme is done on the basis of marks obtained by the candidate in the JEE Main examination, conducted by CBSE. Interested candidates, in addition to registering for JEE Mains, shall have to register at www.jmicoe.in',
    },
    {
      id: 'btechAdm2',
      text: 'Application forms are made available on the university website in the month of Dec-Jan, each year.',
    },
    {
      id: 'btechAdm3',
      text: 'The list of selected/wait-listed candidates is usually declared in the first week of July.',
    },
  ],
  careerProspects: [
    {
      id: 'btechAdm1',
      text: 'The Department of Computer Engineering (DCoE) incessantly endeavours to impart quality education that prepares its students for an excelling career in industry and academia.',
    },
    {
      id: 'btechAdm2',
      text: "One of the foremost departments of the Faculty of Engineering and Technology, DCoE's robust industry connect and reputation ensure it records the highest placement ratio among all the departments, year after year.",
    },
    {
      id: 'btechAdm3',
      text: 'Some of our undergraduate students have gone on grace the admission records of some of the top ranked universities of the world.',
    },
  ],
}

export const mtechData: ICourse = {
  title: 'Master of Technology (M.Tech)',
  intake: 20,
  shortName: 'mtech',
  courseFee: '13,050/year',
  duration: '4 Semester(2 Years)',
  type: 'Full Time',
  intro: [
    {
      id: 'mtechIntro',
      text: 'M.Tech is a two-year full-time professional cum researchoriented degree programme to prepare the students for advanced study and/or prospective research in the field of advanced Computer Engineering and Science/Technology.',
    },
  ],
  admProcess: [
    {
      id: 'mtechAdmPros1',
      text: 'Jamia Millia Islamia conducts a separate entrance test for M.Tech admissions. Admissions are done solely on the basis of this entrance test.',
    },
    {
      id: 'mtechAdmPros2',
      text: 'Forms are tentatively made available in March-April.',
    },
    {
      id: 'mtechAdmPros3',
      text: 'Interested candidates are advised to check www.jmi.ac.in for M.Tech admission updates.',
    },
  ],
  careerProspects: [
    {
      id: 'mtechCarProspects1',
      text: 'The programme bears testimony to an excellent placement track record, with our students bagging offers from the top companies in the industry. The current placement season has seen the Exchanger companies hiring at an annual package of close to a million.',
    },
    {
      id: 'mtechCarProspects2',
      text: 'The department also boasts of state-of-the-art laboratory and infrastructure facilities for its students, thereby stimulating an atmosphere of research among them.',
    },
  ],
}

export const phdData: ICourse = {
  title: 'Ph.D. in Computer Engineering',
  shortName: 'phd',
  intro: [
    {
      id: 'phdIntro1',
      text: 'Ph.D. in Computer Engineering is the doctoral degree programme tailored for academics cum research focused candidates. They are offered the opportunity to pursue theoretical and pragmatic research focussed on a topic of their interest.',
    },
    {
      id: 'phdIntro2',
      text: 'The doctoral programme of the Department of Computer Engineering, Ph.D. offers a plethora of possibilities for research-oriented students. Providing world-class facilities and a conducive environment to our scholars has been a priority for us, many of whom have published results in journals of national and international repute.',
    },
  ],
  fellowships: 'Fellowships are provided as per the rules prescribed by UGC.',
  admProcess: [
    {
      id: 'phdAdmissionPr1',
      text: 'The University will separately notify for admission to Ph.D. Programs, in Nov-Dec every year. The information including available seats, detailed admission guidelines, entrance test syllabi, application form, etc. are made available on the University website www.jmi.ac.in',
    },
    {
      id: 'phdAdmissionPr2',
      text: 'All the candidates wishful of admission to the PhD programme shall be called for an interview as per the schedule notified by the Department.',
    },
  ],
  eligibility: [
    {
      id: 'phdEligible1',
      text: 'The candidate must have obtained at least a Second Class Masters Degree with not less than 55% of marks of a University or a Degree recognized by the University as its equivalent in Computer Science or other engineering disciplines.',
    },
    {
      id: 'phdEligible2',
      text: 'The Department offers the possibility for a certain category of students to supersede the requirement of appearing and qualifying the Entrance Test. Please refer to the Information Brochure given below for further details.',
    },
  ],
  careerProspects: [
    {
      id: 'phdCareer1',
      text: 'The burgeoning demand in industry and academia for quality researchers in India and abroad has opened an avenue of lucrative and satisfying career paths for doctoral students. A Ph.D.. graduate commands a significantly higher salary and respect in the industry, compared to their non-PhD counterparts.',
    },
    {
      id: 'phdCareer2',
      text: 'Academia still remains the most preferred career option for PhDs, with R&D and start-ups following close behind.',
    },
  ],
}
