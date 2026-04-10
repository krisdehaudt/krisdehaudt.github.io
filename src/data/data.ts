export enum Language {
    NL = "nl",
    EN = "en"
}

interface GenericData {
    contact: {
        address: {
            street: string;
            city: string;
            postalCode: string;
            fullAddress: string;
        }
        email: string;
        phone: string;
        linkedin: string;
    };
}

interface ResumeData {    
    educations: {
        title: string;
        period: string;
        school: string;
    }[];
    experience: {
        title: string;
        period: string;
        company: string;
        descriptions: string[];
    }[];
    skills: {
        category: string;
        items: string[];
    }[];
    texts: {
        profileIntro: string;
        education: string;
        experience: string;
        skills: string;
    };
}

export const genericData: GenericData = {
    contact: {
            address: {
                street: "Noordbruggestraat 5",
                city: "Sint-Andries",
                postalCode: "8200",
                fullAddress: "Noordbruggestraat 5, 8200 Sint-Andries"
            },
            email: "krisdehaudt@gmail.com",
            phone: "+32 476 78 70",
            linkedin: "www.linkedin.com/in/kris-dehaudt"
        }
}

export const data: Record<Language, ResumeData> = {
    "nl": {
        educations: [
            {
                title: "Industrieel ingenieur Informatica (master)",
                school: "Hogeschool Gent (BMI)",
                period: "2007 - 2012"
            },
            {
                title: "Industriële wetenschappen",
                school: "VTI Ieper",
                period: "2001 - 2007"
            }
        ],
        experience: [
            {
                title: "Full stack developer / Senior Cloud & IOT engineer",
                period: "oktober 2016 - nu",
                company: "Aptus IOT Solutions",
                descriptions: [
                    "Backend development in NodeJS & Python (voor interne tools)",
                    "Frontend development in React",
                    "CI/CD via CircleCI, Bitbucket pipelines, Azure Devops & Github actions",
                    "IaC via Pulumi & Terraform (hosting is combo van Cloud native onderdelen zoals functions & databases als ook op Kubernetes)",
                    "IOT development door middel van eigen Azure IOT Edge modules (uitlezen van machine protocollen zoals Modbus, OPCUA, CAN ...)"
                ]
            },
            {
                title: "Analyst-developer",
                period: "oktober 2015 - oktober 2016",
                company: "BMSvision",
                descriptions: [
                    "Backend development in C# (ASP MVC 4)",
                    "Frontend development in AngularJS, Typescript & Knockout"
                ]
            },
            {
                title: "Software engineer",
                period: "juli 2012 - oktober 2015",
                company: "Transics (nu ZF Group)",
                descriptions: [
                    "Backend development in C# (ASP MVC 4) & NodeJS (ExpressJS)",
                    "SSO ontwikkelen met behulp van OAUTH",
                    "Frontend development door middel van eigen ontworpen framework. In latere fase AngularJS geïntegreerd in bestaand framework",
                    "Mobile development in PhoneGap",
                    "CI/CD via Jenkins & Team Foundation Server"
                ]
            }
        ],
        skills: [
            {
                category: "Programmeertalen",
                items: [
                    "Javascript/Typescript (NodeJS & React)",
                    "C#",
                    "Python"
                ]
            },
            {
                category: "Databases",
                items: [
                    "SQL (Postgres, TimescaleDB, MS SQL)",
                    "MongoDB",
                    "Redis",
                    "InfluxDB"
                ]
            },
            {
                category: "Cloud providers",
                items: [
                    "Azure",
                    "Google Cloud",
                    "AWS"
                ]
            },
            {
                category: "CI/CD & DevOps",
                items: [
                    "Azure DevOps",
                    "Bitbucket",
                    "Github actions",
                    "CirleCI",
                    "Pulumi",
                    "Terraform",
                    "Kubernetes",
                    "Docker"
                ]
            },
            {
                category: "IOT",
                items: [
                    "Azure IOT Hub",
                    "Azure IOT edge",
                    "MQTT",
                    "Modbus",
                    "CAN",
                    "OPCUA",
                    "Siemens S7",
                    "P1"
                ]
            },
            {
                category: "Overige",
                items: [
                    "API (GraphQL, REST)",
                    "TDD (Jest, Vitest, NUnit)",
                    "Grafana",
                    "React libraries (Tailwind, Vite, Headless UI, Chakra, Antd)",
                    "NodeJS frameworks (NestJS, Express)",
                    "Queue systems (RabbitMQ, Kafka, Azure Service Bus, Azure Event Hub)"
                ]
            }
        ],
        texts: {
            profileIntro: "Ik ben een ervaren full-stack developer en senior Cloud & IoT engineer met een brede technische achtergrond. Door de jaren heen heb ik me ontwikkeld tot een allround engineer die zowel backend als frontend aankan, en die complexe IoT- en cloudoplossingen kan ontwerpen, bouwen en onderhouden. Ik hou ervan om nieuwe technologieën te verkennen en mijn expertise continu uit te breiden. Er is altijd ruimte om te groeien en bij te leren aangezien het opbouwen van expertise nooit 'af' is. Ik hou van een uitdaging en los deze graag op via leesbare & gestructureerde code. De juiste design patterns toepassen vind ik essentieel om onderhoudbare en schaalbare oplossingen te bouwen.",
            education: "Opleidingen",
            experience: "Werkervaring",
            skills: "Vaardigheden"
        }
    },
    "en": {
        educations: [
            {
                title: "Master of science: computer sience",
                school: "College Gent (BMI)",
                period: "2007 - 2012"
            },
            {
                title: "Industrial science (highschool)",
                school: "VTI Ieper",
                period: "2001 - 2007"
            }
        ],
        experience: [
            {
                title: "Full stack developer / Senior Cloud & IOT engineer",
                period: "October 2016 - now",
                company: "Aptus IOT Solutions",
                descriptions: [
                    "Backend development in NodeJS & Python (for internal tools)",
                    "Frontend development in React",
                    "CI/CD configured in CircleCI, Bitbucket pipelines, Azure Devops & Github actions",
                    "IaC configured with Pulumi & Terraform (hosting is a combination of Cloud native components like functions & databases and on Kubernetes)",
                    "IOT development wit own Azure IOT Edge modules (integrate with machine protocols like Modbus, OPCUA, CAN ...)"
                ]
            },
            {
                title: "Analyst-developer",
                period: "October 2015 - October 2016",
                company: "BMSvision",
                descriptions: [
                    "Backend development in C# (ASP MVC 4)",
                    "Frontend development in AngularJS, Typescript & Knockout"
                ]
            },
            {
                title: "Software engineer",
                period: "July 2012 - October 2015",
                company: "Transics (currently ZF Group)",
                descriptions: [
                    "Backend development in C# (ASP MVC 4) & NodeJS (ExpressJS)",
                    "Development of a SSO with OAUTH",
                    "Frontend development with self-created framework. After a few years we integrated AngularJS into the framework",
                    "Mobile development in PhoneGap",
                    "CI/CD configured in Jenkins & Team Foundation Server"
                ]
            }
        ],
        skills: [
            {
                category: "Programming languages",
                items: [
                    "Javascript/Typescript (NodeJS & React)",
                    "C#",
                    "Python"
                ]
            },
            {
                category: "Databases",
                items: [
                    "SQL (Postgres, TimescaleDB, MS SQL)",
                    "MongoDB",
                    "Redis",
                    "InfluxDB"
                ]
            },
            {
                category: "Cloud providers",
                items: [
                    "Azure",
                    "Google Cloud",
                    "AWS"
                ]
            },
            {
                category: "CI/CD & DevOps",
                items: [
                    "Azure DevOps",
                    "Bitbucket",
                    "Github actions",
                    "CirleCI",
                    "Pulumi",
                    "Terraform",
                    "Kubernetes",
                    "Docker"
                ]
            },
            {
                category: "IOT",
                items: [
                    "Azure IOT Hub",
                    "Azure IOT edge",
                    "MQTT",
                    "Modbus",
                    "CAN",
                    "OPCUA",
                    "Siemens S7",
                    "P1"
                ]
            },
            {
                category: "Other",
                items: [
                    "API (GraphQL, REST)",
                    "TDD (Jest, Vitest, NUnit)",
                    "Grafana",
                    "React libraries (Tailwind, Vite, Headless UI, Chakra, Antd)",
                    "NodeJS frameworks (NestJS, Express)",
                    "Queue systems (RabbitMQ, Kafka, Azure Service Bus, Azure Event Hub)"
                ]
            }
        ],
        texts: {
            profileIntro: "I am an experienced full-stack developer and senior Cloud & IoT engineer with a broad technical background. Over the years, I have developed into an allround engineer who can handle both backend and frontend, and who can design, build, and maintain complex IoT and cloud solutions. I love exploring new technologies and continuously expanding my expertise. There is always room to grow and learn because expertise is never 'complete'. I enjoy a challenge and love to build them in a clean and structured way. Applying the right design patterns is essential to me for building maintainable and scalable solutions.",
            education: "Education",
            experience: "Experience",
            skills: "Skills"
        }
    }
}