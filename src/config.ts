import { AuditWizardIcon, GuardianAuditsIcon, ImmunefiIcon, OlympixIcon } from "./components/SVGIcons";

const config: Config = {
    urls: {
        discord: "https://discord.gg/opensense",
        twitter: "https://twitter.com/opensensepw",
        youtube: "https://www.youtube.com/@opensensepw",
        github: "https://github.com/opensensepw",
        database: "https://lime-trampoline-6f9.notion.site/c36cbfe49eee4c11ad0fbea676cb12d1?v=2b9076e2eaf34139b3a97ae09a4cb472",
        //// blockchain link repo, needs to be migrated to opensense notion
        //database: "https://ismaelb.notion.site/0297480c38c6455f86878d896c1b323e?v=6cd093c80ce1449a9e32a27f96926302"
    },
    sponsors: [
        {
            name: 'Olympix',
            url: 'https://www.olympix.ai/',
            icon: OlympixIcon
        },
        {
            name: 'Immunefi',
            url: 'https://immunefi.com/',
            icon: ImmunefiIcon
        },
        {
            name: 'Guardian Audits',
            url: 'https://guardianaudits.com/',
            icon: GuardianAuditsIcon
        },
        {
            name: 'AuditWizard',
            url: 'https://www.auditwizard.io/',
            icon: AuditWizardIcon
        },
    ],
    images:{
        size: 256,
    }
}


export default config
