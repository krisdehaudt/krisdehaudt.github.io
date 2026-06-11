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
        };
        email: string;
        phone: string;
        linkedin: string;
        linkedinLabel: string;
        cvPaths: Record<Language, string>;
    };
    profile: {
        name: string;
        baseUrl: string;
        headshot: string;
        location: string;
    };
}

interface SiteData {
    seo: {
        title: string;
        description: string;
        keywords: string[];
        ogTitle: string;
        ogDescription: string;
    };
    hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
        availability: string;
        primaryCta: string;
        secondaryCta: string;
        tertiaryCta: string;
    };
    valueProps: string[];
    trustIndicators: {
        value: string;
        label: string;
        detail: string;
    }[];
    services: {
        title: string;
        description: string;
        items: {
            name: string;
            problem: string;
            outcome: string;
        }[];
    };
    projects: {
        title: string;
        description: string;
        items: {
            name: string;
            challenge: string;
            solution: string;
            technologies: string[];
            result: string;
        }[];
    };
    experience: {
        title: string;
        description: string;
        roles: {
            title: string;
            company: string;
            period: string;
            summary: string;
            highlights: string[];
        }[];
    };
    skills: {
        title: string;
        description: string;
        groups: {
            category: string;
            focus: string;
            items: string[];
        }[];
    };
    education: {
        title: string;
        items: {
            title: string;
            school: string;
            period: string;
        }[];
    };
    contact: {
        title: string;
        description: string;
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
        linkedin: "https://www.linkedin.com/in/kris-dehaudt",
        linkedinLabel: "linkedin.com/in/kris-dehaudt",
        cvPaths: {
            [Language.EN]: "/Kris-Dehaudt-CV-en.pdf",
            [Language.NL]: "/Kris-Dehaudt-CV-nl.pdf"
        }
    },
    profile: {
        name: "Kris Dehaudt",
        baseUrl: "https://krisdehaudt.github.io",
        headshot: "/profile.jpg",
        location: "Brugge, België"
    }
};

export const data: Record<Language, SiteData> = {
    [Language.NL]: {
        seo: {
            title: "Kris Dehaudt | Senior Full Stack, Cloud & IoT consultant",
            description: "Freelance full stack, cloud en IoT consultant in België. Kris Dehaudt helpt bedrijven bij het ontwerpen en opleveren van Azure-, Kubernetes-, TypeScript- en industriële IoT-platformen met end-to-end ownership.",
            keywords: [
                "Freelance Full Stack Developer België",
                "Freelance Cloud Engineer België",
                "Azure Consultant België",
                "IoT Consultant België",
                "Kubernetes Consultant",
                "TypeScript Consultant"
            ],
            ogTitle: "Senior Full Stack, Cloud & IoT Consultant",
            ogDescription: "13+ jaar ervaring in cloud-native platformen, industriële IoT-oplossingen en moderne webapplicaties."
        },
        hero: {
            eyebrow: "Senior consultant voor complexe software-, cloud- en industriële platformen",
            title: "Senior Full Stack, Cloud & IoT Consultant",
            subtitle: "13+ jaar ervaring in het ontwerpen en opleveren van cloud-native platformen, industriële IoT-oplossingen en moderne webapplicaties.",
            availability: "Open voor freelance consultancyopdrachten.",
            primaryCta: "Contacteer mij",
            secondaryCta: "LinkedIn",
            tertiaryCta: "Download cv"
        },
        valueProps: [
            "Architecturale blik met hands-on deliverydiepgang",
            "Volledige ownership van analyse tot productie en onderhoud",
            "Cloud- en IoT-specialist voor businesskritische systemen",
            "Betrouwbare technische partner voor CTO’s, technische managers en productteams"
        ],
        trustIndicators: [
            {
                value: "13+",
                label: "jaar ervaring",
                detail: "Opleveren van softwareplatformen in product-, cloud- en industriële context."
            },
            {
                value: "Cloud en IoT",
                label: "Specialistische focus",
                detail: "Verbindt devices, backendplatformen en gebruikersapplicaties tot een werkend geheel."
            },
            {
                value: "End-to-end",
                label: "Verantwoordelijkheid van begin tot eind",
                detail: "Van architectuur en implementatie tot automatisatie, releases en support."
            },
            {
                value: "Enterprise",
                label: "Software-ervaring",
                detail: "Gewend aan langlevende systemen met eisen rond betrouwbaarheid en schaal."
            },
            {
                value: "Azure en K8s",
                label: "Platformexpertise",
                detail: "Sterke basis in cloudfundamenten en engineering workflows."
            }
        ],
        services: {
            title: "Hoe ik kan helpen",
            description: "Ik kom het best tot mijn recht waar softwarecomplexiteit samenkomt met operationele realiteit: platformmodernisering, industriële connectiviteit en technische fundamenten voor betrouwbare oplevering die teams echt kunnen volhouden.",
            items: [
                {
                    name: "Cloudarchitectuur en modernisering",
                    problem: "Wanneer legacy systemen, versnipperde services of knelpunten in delivery productteams afremmen.",
                    outcome: "Pragmatische doelarchitecturen en migratiepaden die onderhoudbaarheid, betrouwbaarheid en leveringssnelheid verbeteren."
                },
                {
                    name: "Industriële IoT-platformen",
                    problem: "Wanneer machinegegevens moeilijk te capteren, normaliseren en operationaliseren zijn over sites of producten heen.",
                    outcome: "Robuuste device-to-cloud platformen die industriële data omzetten in bruikbare operationele inzichten."
                },
                {
                    name: "Azure-oplossingen",
                    problem: "Wanneer teams een cloudfundament nodig hebben dat beperkingen van enterprise-omgevingen ondersteunt zonder te overengineeren.",
                    outcome: "Azure-architecturen met de juiste balans tussen managed services, security, observability en kostenbewustzijn."
                },
                {
                    name: "Kubernetes-platformengineering",
                    problem: "Wanneer containerplatformen inconsistent, fragiel of duur in beheer worden.",
                    outcome: "Betere deploymentstandaarden, runtime betrouwbaarheid en teamautonomie via een properder platformfundament."
                },
                {
                    name: "TypeScript en Node.js applicaties",
                    problem: "Wanneer backend- en frontendsystemen meer structuur nodig hebben om mee te groeien met productnoden.",
                    outcome: "Onderhoudbare applicaties met duidelijke grenzen, leesbare code en betrouwbare opleverpraktijken."
                },
                {
                    name: "GraphQL API-ontwerp",
                    problem: "Wanneer productteams een flexibele integratielaag nodig hebben zonder backendsprawl te creëren.",
                    outcome: "API’s die clientproductiviteit verhogen terwijl domeingrenzen en performantie onder controle blijven."
                },
                {
                    name: "Infrastructure as Code (IaC)",
                    problem: "Wanneer omgevingen afwijken en releases afhangen van manuele kennis.",
                    outcome: "Geautomatiseerde infrastructuur en change management voor herhaalbaarheid, controleerbaarheid en snellere oplevering."
                },
                {
                    name: "DevOps en CI/CD verbeteringen",
                    problem: "Wanneer releasepipelines traag, fragiel of moeilijk vertrouwbaar zijn.",
                    outcome: "Gestroomlijnde build-, test- en deploymentworkflows met minder frictie en minder operationeel risico."
                },
                {
                    name: "Edge computing oplossingen",
                    problem: "Wanneer industriële of gedistribueerde workloads lokale verwerking nodig hebben voor data naar de cloud gaat.",
                    outcome: "Edge-architecturen die rekening houden met connectiviteitsbeperkingen en veilige device-operaties."
                }
            ]
        },
        projects: {
            title: "Uitgelichte projecten",
            description: "Representatieve voorbeelden van het type consultancywerk dat ik kan leiden. Projecten zijn geanonimiseerd maar weerspiegelen echte engagementen qua complexiteit, patronen en resultaten.",
            items: [
                {
                    name: "Corporate wellbeing platform op schaal",
                    challenge: "Een multi-tenant B2B SaaS-platform moest werknemers van bedrijven stimuleren om meer te bewegen via challenges op basis van Fitbit-, Garmin- en Strava-activiteiten. Het platform verwerkte activiteitsdata voor ongeveer 800.000 gebruikers en pieken tot 30 miljoen events per dag, waardoor realtime verwerking, foutafhandeling en schaalbaarheid steeds kritischer werden.",
                    solution: "Als lead backend engineer en architect ontwierp ik de overkoepelende microservice-architectuur van het platform, met services voor data-ingestie, samenvoeging, aggregaties, challengeverwerking, rapportering, beloningen en mailing. Ik nam volledige ownership over backend en hosting, ondersteunde het frontend team architecturaal en bouwde eerst verder op Google Cloud met onder andere GKE, waarna ik ook zelf de migratie naar Azure uitvoerde. Om de eventverwerking schaalbaar te houden, introduceerde ik Kafka op de plaatsen waar hogere throughput nodig was, terwijl RabbitMQ behouden bleef waar deadlettering en gecontroleerde foutafhandeling essentieel waren.",
                    technologies: ["Node.js", "RabbitMQ", "Kafka", "MongoDB", "Google Cloud", "GKE", "Azure"],
                    result: "De architectuur werd schaalbaarder en de realtime verwerking betrouwbaarder, met minder druk op dead-letterqueues en een sterker platformfundament voor grootschalige corporate wellbeing programma’s. In een latere fase nam ik ook een overkoepelende rol op richting andere backend engineers via kennisdeling en code reviews."
                },
                {
                    name: "Industrieel edge- en dataplatform",
                    challenge: "Een multi-tenant SaaS-platform moest industriële klanten ontzorgen in het uitlezen, verwerken en visualiseren van data uit uiteenlopende devices en protocollen zoals OPC UA, Modbus en Siemens S7. De uitdaging lag in standaardisatie over klanten heen, kostenefficiënt data naar de cloud brengen en edge devices volledig remote beheersbaar maken, ook in omgevingen met frequente datastromen en tijdelijke connectiviteitsproblemen.",
                    solution: "Ik zette de oplossing end-to-end op, van architectuur en backend tot frontend, edge modules en Infrastructure as Code. Het platform bouwde op Azure IoT Edge, waardoor edge pc’s offline konden blijven functioneren en data automatisch konden doorsturen zodra connectiviteit terug beschikbaar was. Ik beheerde ook de device provisioning zelf, onder meer via een aangepaste device image waarmee batches devices zichzelf automatisch konden registreren. In de cloud draaide de oplossing op Azure en AKS, met Grafana voor visualisatie. Daarnaast bouwde ik een adminportaal waarmee klanten realtime exports konden configureren naar onder andere webhooks en Azure Event Hub.",
                    technologies: ["Azure IoT Edge", "AKS", "Azure", "Grafana", "OPC UA", "Modbus", "Siemens S7", "Azure Event Hub"],
                    result: "Klanten kregen een gestandaardiseerde en schaalbare data-brug tussen industriële installaties en cloudtoepassingen, zonder zelf complexe integraties te moeten uitwerken. Dat maakte nieuwe operationele diensten mogelijk, zoals realtime inzicht in havenkranen zonder fysieke inspectierondes, en remote diagnose van warmtepompen. Het resultaat was minder manueel werk, snellere toegang tot operationele data en een robuust fundament voor verdere digitale dienstverlening."
                },
                {
                    name: "Digitalisering van een on-site sampleproces",
                    challenge: "Een manueel proces op basis van losse Excelbestanden moest vervangen worden door een geïntegreerd digitaal systeem voor het bemonsteren en classificeren van ingeleverd materiaal zoals lampen, tv’s en wasmachines. De uitdaging lag in het betrouwbaar combineren van operatorworkflows op locatie, hardware-integraties en cloudverwerking, zodat automatische detectie mogelijk werd met online manuele controle en centrale rapportering.",
                    solution: "Ik zette de oplossing end-to-end op, van onsite installatie tot cloudplatform. Op de edge synchroniseerde het systeem transporten vanuit de cloud, waarna operatoren via een lokaal scherm een transport konden selecteren en materiaal in de installatie plaatsen. Via een drukknop werden automatisch de nodige acties uitgevoerd, zoals weging via RS485-integratie met een weegschaal en het nemen van foto’s via camera’s, met onmiddellijke visuele controle op de edge. Na validatie door de operator werden samples in batch naar de cloud gesynchroniseerd, waar verdere verwerking gebeurde via externe classificatiediensten, aangevuld met opslag, beheer, review en correctie via een cloudapplicatie. Basisrapportering liep via de cloudapplicatie, terwijl statistieken ook geëxporteerd werden naar een andere database voor verdere rapportering.",
                    technologies: ["Edge computing", "RS485", "Camera-integratie", "Cloud synchronisatie", "Operator applicatie", "Cloud applicatie"],
                    result: "Het platform verving een versnipperd Excelproces door een centraal digitaal systeem dat rapportering en geautomatiseerde detectie mogelijk maakte, met manuele controle waar nodig. De oplossing draaide over meerdere sites en installaties en ondersteunde vorig jaar ongeveer 70.000 samples, waardoor datakwaliteit, opvolging en operationele efficiëntie aanzienlijk verbeterden."
                },
                {
                    name: "Gamification platform voor duurzame schoolmobiliteit",
                    challenge: "Een digitaal platform moest kinderen op een blijvende en speelse manier motiveren om te voet of met de fiets naar school te komen, zodat verkeersdrukte rond scholen afneemt. De uitdaging lag niet alleen in de verwerking van IoT-registraties, maar vooral in het beheersbaar maken van complexe businesslogica rond scholen, schooljaren, klassen, leerlingen, gemeentes en beloningsmodellen, terwijl onboarding voor scholen en leerlingen zo eenvoudig mogelijk moest blijven.",
                    solution: "Ik werkte eerst de backend en architectuur uit en nam later ook frontend development op. Het platform verwerkt registraties van verschillende types custom IoT-toestellen die centraal configureerbaar zijn in een adminportaal, zoals een handje voor voetgangers en een fietsenteller aan de fietsenstalling. Leerlingen konden zichzelf registreren via een portaal en enkel basisinformatie over hun klas ingeven, zonder manuele verwerking via mail of Excel. In de cloud bouwde ik de microservice-architectuur en de kernlogica uit voor schooljaarovergangen, anonimisatie, beloningsregels, tags gekoppeld aan leerlingen en provisioning van toestellen. Daarnaast ondersteunde het platform gamification via muntjes, beloningen, leventjes, campagnes, avatars en quizzen. Als volgende stap onderzoek en test ik hier ook LLM-integraties om beheer- en gebruikersworkflows slimmer en efficiënter te maken.",
                    technologies: ["IoT integratie", "Microservices", "Backend architectuur", "Frontend development", "Gamification", "Provisioning", "LLM integraties"],
                    result: "Het platform groeide uit tot een oplossing met ongeveer 60.000 leerlingen, 100 scholen in Vlaanderen en Nederland, circa 3 miljoen geldige registraties en in totaal ongeveer 30 miljoen ontvangen berichten. Daarmee ontstond een schaalbaar digitaal fundament dat duurzame mobiliteit stimuleert, scholen eenvoudiger laat aansluiten en complexe businessregels omzet in een toegankelijke en motiverende gebruikerservaring."
                }
            ]
        },
        experience: {
            title: "Ervaring",
            description: "Doorheen mijn loopbaan heb ik gewerkt op het snijvlak van architectuur, implementatie en delivery. De rode draad is ownership nemen over complexe systemen en ze schaalbaarder, onderhoudbaarder en waardevoller maken voor het bedrijf.",
            roles: [
                {
                    title: "Senior Cloud, IoT & Full Stack Engineer",
                    company: "Aptus IoT Solutions",
                    period: "Oktober 2016 - heden",
                    summary: "Senior engineering rol over industriële IoT, cloudarchitectuur, platform engineering en moderne applicatiedelivery.",
                    highlights: [
                        "Cloud-native en Kubernetes-gebaseerde platformen ontworpen en opgeleverd voor industriële en operationele use cases.",
                        "Azure IoT Edge oplossingen geconfigureerd om machineprotocollen zoals Modbus, OPC UA, CAN, Siemens S7 en P1 te integreren in bruikbare productplatformen.",
                        "End-to-end ownership opgenomen over backendservices, React-frontends, infrastructuurautomatisatie en delivery pipelines.",
                        "CI/CD en Infrastructure as Code workflows geoptimaliseerd met GitHub Actions, Azure DevOps, Bitbucket Pipelines, CircleCI, Terraform en Pulumi."
                    ]
                },
                {
                    title: "Analyst Developer",
                    company: "BMSvision",
                    period: "Oktober 2015 - oktober 2016",
                    summary: "Gewerkt aan enterprise software als analist-developer met focus op backend- en frontendontwikkeling binnen een bestaande productomgeving.",
                    highlights: [
                        "Backend development in C# binnen een ASP MVC 4 omgeving.",
                        "Frontend development in AngularJS, TypeScript en Knockout.",
                        "Meegewerkt aan businessfunctionaliteit in een enterprise softwarecontext."
                    ]
                },
                {
                    title: "Software Engineer",
                    company: "Transics, nu ZF Group",
                    period: "Juli 2012 - oktober 2015",
                    summary: "Software gebouwd in een mature productomgeving met eisen rond betrouwbaarheid, integratie en langetermijnonderhoud.",
                    highlights: [
                        "Backendservices en frontendmogelijkheden ontwikkeld over meerdere generaties van het platform.",
                        "SSO-functionaliteit opgeleverd en meegewerkt aan bredere moderniseringsinitiatieven van de applicatie.",
                        "Deliveryprocessen ondersteund via CI/CD verbeteringen en hands-on werk over web- en mobiele toepassingen."
                    ]
                }
            ]
        },
        skills: {
            title: "Kernexpertise",
            description: "De waarde zit niet in een lange lijst tools, maar in weten hoe je de juiste technologieën combineert tot systemen die teams met vertrouwen kunnen bouwen, uitrollen en verder ontwikkelen.",
            groups: [
                {
                    category: "Frontend",
                    focus: "Moderne interfaces voor operationele en productworkflows.",
                    items: ["React", "TypeScript", "Astro", "Tailwind CSS", "Headless UI"]
                },
                {
                    category: "Backend",
                    focus: "Onderhoudbaar servicedesign en API-delivery.",
                    items: ["Node.js", "NestJS", "Express", "GraphQL", "REST", "C#"]
                },
                {
                    category: "Cloud",
                    focus: "Pragmatische cloudarchitectuur en managed services.",
                    items: ["Azure", "AWS", "Google Cloud", "Azure Functions", "Event-driven systems"]
                },
                {
                    category: "Infrastructure",
                    focus: "Betrouwbare delivery foundations en platformoperaties.",
                    items: ["Kubernetes", "Docker", "Terraform", "Pulumi", "GitHub Actions", "Azure DevOps"]
                },
                {
                    category: "Data",
                    focus: "Storage en messaging voor analytics- en operationele platformen.",
                    items: ["PostgreSQL", "TimescaleDB", "MS SQL", "MongoDB", "Redis", "Kafka", "RabbitMQ"]
                },
                {
                    category: "IoT",
                    focus: "Industriële connectiviteit van edge tot cloud.",
                    items: ["Azure IoT Hub", "Azure IoT Edge", "MQTT", "Modbus", "OPC UA", "CAN", "Siemens S7", "P1"]
                },
                {
                    category: "AI",
                    focus: "Pragmatische inzet van AI in engineering- en productworkflows.",
                    items: ["AI-assisted engineering", "LLM integraties", "Prompt design", "Workflow automatisatie"]
                }
            ]
        },
        education: {
            title: "Opleiding",
            items: [
                {
                    title: "Master in de industriële wetenschappen: informatica",
                    school: "Hogeschool Gent (BMI)",
                    period: "2007 - 2012"
                },
                {
                    title: "Industriële wetenschappen",
                    school: "VTI Ieper",
                    period: "2001 - 2007"
                }
            ]
        },
        contact: {
            title: "Laten we uw volgende platform- of productuitdaging bespreken",
            description: "Heeft u een senior consultant nodig die architectuur kan vormgeven, delivery kan aligneren en een team kan helpen complexe cloud- of IoT-initiatieven uit te voeren, neem dan contact op via e-mail of LinkedIn."
        }
    },
    [Language.EN]: {
        seo: {
            title: "Kris Dehaudt | Senior Full Stack, Cloud & IoT consultant",
            description: "Freelance full stack, cloud and IoT consultant in Belgium. Kris Dehaudt helps companies design and deliver Azure, Kubernetes, TypeScript and industrial IoT platforms with end-to-end ownership.",
            keywords: [
                "Freelance Full Stack Developer Belgium",
                "Freelance Cloud Engineer Belgium",
                "Azure Consultant Belgium",
                "IoT Consultant Belgium",
                "Kubernetes Consultant",
                "TypeScript Consultant"
            ],
            ogTitle: "Senior Full Stack, Cloud & IoT Consultant",
            ogDescription: "13+ years delivering cloud-native platforms, industrial IoT solutions, and modern web applications."
        },
        hero: {
            eyebrow: "Senior consultant for complex software, cloud, and industrial platforms",
            title: "Senior Full Stack, Cloud & IoT Consultant",
            subtitle: "13+ years of experience designing and delivering cloud-native platforms, industrial IoT solutions, and modern web applications.",
            availability: "Open to freelance consulting engagements.",
            primaryCta: "Contact Me",
            secondaryCta: "LinkedIn",
            tertiaryCta: "Download CV"
        },
        valueProps: [
            "Architectural perspective with hands-on delivery depth",
            "Full ownership from analysis to production and maintenance",
            "Cloud and IoT specialist focused on business-critical systems",
            "Trusted technical partner for CTOs, technical managers, and product teams"
        ],
        trustIndicators: [
            {
                value: "13+",
                label: "Years experience",
                detail: "Delivering software platforms across product, cloud, and industrial environments."
            },
            {
                value: "Cloud and IoT",
                label: "Specialist profile",
                detail: "Bridging connected devices, backend systems, and user-facing applications."
            },
            {
                value: "End-to-end",
                label: "End-to-end responsibility",
                detail: "From architecture and implementation to automation, release, and support."
            },
            {
                value: "Enterprise",
                label: "Software experience",
                detail: "Used to operating in long-lived systems with reliability and scale constraints."
            },
            {
                value: "Azure and K8s",
                label: "Platform expertise",
                detail: "Building maintainable cloud foundations and engineering workflows."
            }
        ],
        services: {
            title: "How I can help",
            description: "I am most effective where software complexity meets operational reality: platform modernization, industrial connectivity, and technical foundations for reliable delivery that teams can actually sustain.",
            items: [
                {
                    name: "Cloud architecture and modernization",
                    problem: "When legacy systems, fragmented services, or delivery bottlenecks slow product teams down.",
                    outcome: "Design pragmatic target architectures and migration paths that improve maintainability, reliability, and time to delivery."
                },
                {
                    name: "Industrial IoT platforms",
                    problem: "When machine data is hard to capture, normalize, and operationalize across plants or products.",
                    outcome: "Build robust device-to-cloud platforms that turn industrial data into actionable operational insight."
                },
                {
                    name: "Azure solutions",
                    problem: "When teams need a cloud foundation that fits enterprise constraints without becoming overengineered.",
                    outcome: "Deliver Azure-based architectures with the right balance of managed services, security, observability, and cost awareness."
                },
                {
                    name: "Kubernetes platform engineering",
                    problem: "When container platforms become inconsistent, fragile, or expensive to run.",
                    outcome: "Improve deployment standards, runtime reliability, and team autonomy through a cleaner platform setup."
                },
                {
                    name: "TypeScript and Node.js applications",
                    problem: "When backend and frontend systems need stronger structure to scale with product demands.",
                    outcome: "Design and deliver maintainable applications with clear boundaries, readable code, and dependable delivery practices."
                },
                {
                    name: "GraphQL API design",
                    problem: "When product teams need a flexible integration layer without creating backend sprawl.",
                    outcome: "Shape APIs that improve client productivity while keeping domain boundaries and performance under control."
                },
                {
                    name: "Infrastructure as Code (IaC)",
                    problem: "When environments drift and releases depend on manual knowledge.",
                    outcome: "Automate infrastructure provisioning and change management for repeatability, auditability, and faster delivery."
                },
                {
                    name: "DevOps and CI/CD improvements",
                    problem: "When release pipelines are slow, brittle, or hard for teams to trust.",
                    outcome: "Streamline build, test, and deployment workflows so teams can ship with less friction and less operational risk."
                },
                {
                    name: "Edge computing solutions",
                    problem: "When industrial or distributed workloads need local processing before data reaches the cloud.",
                    outcome: "Design edge architectures that support real-world connectivity constraints and secure device operations."
                }
            ]
        },
        projects: {
            title: "Featured projects",
            description: "Representative examples of the kind of consulting work I can lead. Projects are anonymized, but reflect real engagements in terms of complexity, patterns, and outcomes.",
            items: [
                {
                    name: "Corporate wellbeing platform at scale",
                    challenge: "A multi-tenant B2B SaaS platform was built to encourage employees to move more through challenges based on Fitbit, Garmin, and Strava activity. The platform processed activity data for about 800,000 users and peaks of up to 30 million events per day, making real-time processing, error handling, and scalability increasingly critical.",
                    solution: "As lead backend engineer and architect, I designed the overarching microservice architecture of the platform, with services for data ingestion, merging, aggregations, challenge processing, reporting, rewards, and mailing. I took full ownership of backend and hosting, supported the frontend team from an architectural perspective, and first built further on Google Cloud including GKE before later executing the migration to Azure myself. To keep event processing scalable, I introduced Kafka where higher throughput was required, while RabbitMQ remained in place where dead-lettering and controlled error handling were essential.",
                    technologies: ["Node.js", "RabbitMQ", "Kafka", "MongoDB", "Google Cloud", "GKE", "Azure"],
                    result: "The architecture became more scalable and real-time processing more reliable, with less pressure on dead-letter queues and a stronger platform foundation for large-scale corporate wellbeing programs. At a later stage, I also took on an overarching role towards other backend engineers through knowledge sharing and code reviews."
                },
                {
                    name: "Industrial edge and data platform",
                    challenge: "A multi-tenant SaaS platform had to relieve industrial customers from the complexity of reading, processing, and visualizing data from a wide range of devices and protocols such as OPC UA, Modbus, and Siemens S7. The challenge was to standardize this across customers, move data to the cloud cost-efficiently, and keep edge devices fully manageable remotely, even in environments with frequent data flows and temporary connectivity issues.",
                    solution: "I built the solution end-to-end, from architecture and backend to frontend, edge modules, and Infrastructure as Code. The platform was built on Azure IoT Edge, allowing edge PCs to continue operating offline and automatically forward data once connectivity returned. I also handled device provisioning myself, including using a custom device image that allowed batches of devices to self-register automatically. In the cloud, the solution ran on Azure and AKS, with Grafana for visualization. I also built an admin portal that allowed customers to configure real-time exports to targets such as webhooks and Azure Event Hub.",
                    technologies: ["Azure IoT Edge", "AKS", "Azure", "Grafana", "OPC UA", "Modbus", "Siemens S7", "Azure Event Hub"],
                    result: "Customers received a standardized and scalable data bridge between industrial installations and cloud applications, without having to design complex integrations themselves. That enabled new operational services, such as real-time insight into what cranes in a port were doing and where they were located, and remote diagnosis for heat pumps. The result was less manual work, faster access to operational data, and a robust foundation for further digital services."
                },
                {
                    name: "Digitization of an on-site sampling process",
                    challenge: "A manual process built around scattered Excel files had to be replaced by an integrated digital system for sampling and classifying incoming materials such as lamps, televisions, and washing machines. The challenge was to reliably combine on-site operator workflows, hardware integrations, and cloud processing, so automated detection became possible with online manual review and centralized reporting.",
                    solution: "I built the solution end-to-end, from the on-site installation to the cloud platform. At the edge, the system synchronized transports from the cloud, after which operators could select a transport through a local screen and place material in the installation. Via a push button, the required actions were performed automatically, including weighing through an RS485 integration with a scale and taking photos through cameras, with immediate visual verification on the edge. After operator validation, samples were synchronized in batches to the cloud, where further processing happened through external classification services, combined with storage, management, review, and correction through a cloud application. Basic reporting happened through the cloud application, while statistics were also exported to another database for further reporting.",
                    technologies: ["Edge computing", "RS485", "Camera integration", "Cloud synchronization", "Operator application", "Cloud application"],
                    result: "The platform replaced a fragmented Excel-based process with a central digital system that enabled reporting and automated detection, with manual control where required. The solution ran across multiple sites and installations and supported about 70,000 samples last year, significantly improving data quality, traceability, and operational efficiency."
                },
                {
                    name: "Gamification platform for sustainable school mobility",
                    challenge: "A digital platform had to motivate children in a lasting and playful way to walk or cycle to school, reducing traffic around schools. The challenge was not only in processing IoT registrations, but especially in making complex business logic manageable across schools, school years, classes, pupils, municipalities, and reward models, while keeping onboarding for schools and pupils as simple as possible.",
                    solution: "I first designed the backend and architecture, and later also took on frontend development. The platform processes registrations from different types of custom IoT devices that can be centrally configured in an admin portal, such as a high-five device for pedestrians and a bike counter at the bicycle parking area. Pupils could register themselves through a portal and only needed to enter basic class information, without any manual processing through email or Excel. In the cloud, I built the microservice architecture and core logic for school year transitions, anonymization, reward rules, tags linked to pupils, and device provisioning. The platform also supported gamification through coins, rewards, lives, campaigns, avatars, and quizzes. As a next step, I am also validating LLM integrations here to make admin and user workflows smarter and more efficient.",
                    technologies: ["IoT integration", "Microservices", "Backend architecture", "Frontend development", "Gamification", "Provisioning", "LLM integrations"],
                    result: "The platform grew into a solution used by about 60,000 pupils across 100 schools in Flanders and the Netherlands, with around 3 million valid registrations and about 30 million messages received in total. This created a scalable digital foundation that encourages sustainable mobility, makes school onboarding easier, and turns complex business rules into an accessible and motivating user experience."
                }
            ]
        },
        experience: {
            title: "Experience",
            description: "Throughout my career, I have worked at the intersection of architecture, implementation, and delivery. The common thread is taking ownership of complex systems and making them more scalable, more maintainable, and more valuable to the business.",
            roles: [
                {
                    title: "Senior Cloud, IoT & Full Stack Engineer",
                    company: "Aptus IoT Solutions",
                    period: "October 2016 - Present",
                    summary: "Senior engineering role spanning industrial IoT, cloud architecture, platform engineering, and modern application delivery.",
                    highlights: [
                        "Designed and delivered cloud-native and Kubernetes-based platforms for industrial and operational use cases.",
                        "Architected Azure IoT Edge solutions to integrate machine protocols such as Modbus, OPC UA, CAN, Siemens S7, and P1 into usable product platforms.",
                        "Led end-to-end ownership across backend services, React frontends, infrastructure automation, and delivery pipelines.",
                        "Optimized CI/CD and Infrastructure as Code workflows using GitHub Actions, Azure DevOps, Bitbucket Pipelines, CircleCI, Terraform, and Pulumi."
                    ]
                },
                {
                    title: "Analyst Developer",
                    company: "BMSvision",
                    period: "October 2015 - October 2016",
                    summary: "Worked on enterprise software as an analyst developer with a focus on backend and frontend delivery in an existing product environment.",
                    highlights: [
                        "Backend development in C# within an ASP MVC 4 environment.",
                        "Frontend development in AngularJS, TypeScript, and Knockout.",
                        "Contributed to business functionality in an enterprise software context."
                    ]
                },
                {
                    title: "Software Engineer",
                    company: "Transics, now ZF Group",
                    period: "July 2012 - October 2015",
                    summary: "Built software in a mature product environment with requirements around reliability, integration, and long-term maintainability.",
                    highlights: [
                        "Developed backend services and frontend capabilities across multiple generations of the platform.",
                        "Delivered SSO capabilities and contributed to broader application modernization efforts.",
                        "Supported delivery processes through CI/CD improvements and hands-on work across web and mobile surfaces."
                    ]
                }
            ]
        },
        skills: {
            title: "Core expertise",
            description: "The value is not in a long list of tools. It is in knowing how to combine the right technologies into systems that teams can deliver, run, and evolve with confidence.",
            groups: [
                {
                    category: "Frontend",
                    focus: "Modern interfaces for operational and product workflows.",
                    items: ["React", "TypeScript", "Astro", "Tailwind CSS", "Headless UI"]
                },
                {
                    category: "Backend",
                    focus: "Maintainable service design and API delivery.",
                    items: ["Node.js", "NestJS", "Express", "GraphQL", "REST", "C#"]
                },
                {
                    category: "Cloud",
                    focus: "Pragmatic cloud architecture and managed services.",
                    items: ["Azure", "AWS", "Google Cloud", "Azure Functions", "Event-driven systems"]
                },
                {
                    category: "Infrastructure",
                    focus: "Reliable delivery foundations and platform operations.",
                    items: ["Kubernetes", "Docker", "Terraform", "Pulumi", "GitHub Actions", "Azure DevOps"]
                },
                {
                    category: "Data",
                    focus: "Storage and messaging for analytics and operational platforms.",
                    items: ["PostgreSQL", "TimescaleDB", "MS SQL", "MongoDB", "Redis", "Kafka", "RabbitMQ"]
                },
                {
                    category: "IoT",
                    focus: "Industrial connectivity from edge to cloud.",
                    items: ["Azure IoT Hub", "Azure IoT Edge", "MQTT", "Modbus", "OPC UA", "CAN", "Siemens S7", "P1"]
                },
                {
                    category: "AI",
                    focus: "Pragmatic use of AI in engineering and product workflows.",
                    items: ["AI-assisted engineering", "LLM integrations", "Prompt design", "Workflow automation"]
                }
            ]
        },
        education: {
            title: "Education",
            items: [
                {
                    title: "Master of Science in Computer Science",
                    school: "Hogeschool Gent (BMI)",
                    period: "2007 - 2012"
                },
                {
                    title: "Industrial Sciences",
                    school: "VTI Ieper",
                    period: "2001 - 2007"
                }
            ]
        },
        contact: {
            title: "Let’s discuss your next platform or product challenge",
            description: "If you need a senior consultant who can shape architecture, align delivery, and help your team execute on complex cloud or IoT work, reach out by email or connect on LinkedIn."
        }
    }
};
