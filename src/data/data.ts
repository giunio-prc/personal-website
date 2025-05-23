const githubUrl = import.meta.env.VITE_MY_GITHUB_URL;

const data = {
  skills: [
    {
      id: '1',
      src: './img/product-chain-1.png',
      title: 'Front-End',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
    },
    {
      id: '2',
      src: './img/tag-1.png',
      title: 'Back-End',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
    },
    {
      id: '3',
      src: './img/feather-pen-2.png',
      title: 'UI & UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
    },
    {
      id: '4',
      src: './img/feather-pen-1.png',
      title: 'Webflow Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
    },
  ],
  portfolio: [
    {
      id: '1',
      src: './img/placeholder-image.png',
      title: 'Ahuse',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
      link: 'View in GitHub',
      url: `${githubUrl}/bakerpy`,
    },
    {
      id: '2',
      src: './img/placeholder-image-1.png',
      title: 'App Dashboard',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
      link: 'View In Github',
    },
    {
      id: '3',
      src: './img/placeholder-image-2.png',
      title: 'Easy Rentn',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
      link: 'View In Github',
    },
  ],
};
export default data;
